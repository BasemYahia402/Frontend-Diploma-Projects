# start program
# import modules [tkinter ,requests , Datetime]
# prepare api of currency
# create GUI => 
# inputs of data [amount , currency , category , Payment method , date]
# place of output data [table] is content names of inputs by defualt and when click button add it show data in table 
# handle inputs =>
# currency and payment and category are dropdown list
# date and amount are field normal
# add data to table output
# some feature [filters + clear all]
# test program=> try to add data to table
# end program


# import modules
import tkinter as tk
from tkinter import ttk, messagebox
import requests

class Transaction:
    def __init__(self, amount, currency, category, payment, date):
        self.amount = amount
        self.currency = currency
        self.category = category
        self.payment = payment
        self.date = date


class AppGUI:
    def __init__(self):
                # array of rates 
        self.rates=[]

        # array of amount use USD
        self.data_USD=[]

        # total row
        self.total_row_id = None

        self.data = []
        self.root = tk.Tk()
        self.root.title('Expenses Tracker')
        self.create_widgets()

    def create_widgets(self):
        self.frame = tk.Frame(self.root)
        self.frame.pack()

        self.label_amount = tk.Label(self.frame, text="Amount:")
        self.entry_amount = tk.Entry(self.frame)

        self.label_currency = tk.Label(self.frame, text="Currency:")
        # Fetch and sort currencies from the API
        currencies = values=[i for i in self.get_currency()]
        self.dropdown_currency = ttk.Combobox(self.frame, values=currencies)

        self.label_category = tk.Label(self.frame, text="Category:")
        self.dropdown_category = ttk.Combobox(self.frame, values=["Food", "Transportation"])

        self.label_payment = tk.Label(self.frame, text="Payment Method:")
        self.dropdown_payment = ttk.Combobox(self.frame, values=["Credit Card","Paybal","Cash"])

        self.label_date = tk.Label(self.frame, text="Date:")
        self.entry_date = tk.Entry(self.frame)

        self.style = ttk.Style(self.root)
        self.style.theme_use('default')
        self.style.configure("Treeview.Heading",font=("Calibri",12,'italic'),activebackground="#0D94D2",background = "#0D94D2",foreground="White")
        
        self.button_add = tk.Button(self.frame, text='Add Data', command=self.add_data, bg='#4CAF50', fg='white')
        self.button_remove_filter = tk.Button(self.frame, text='Remove Filter', command=self.remove_filter, bg='#FFA500', fg='white')
        self.button_clear_data = tk.Button(self.frame, text='Clear Data', command=self.clear_data, bg='#FF4500', fg='white')

        self.label_filters = tk.Label(self.frame, text="Filters")

        self.headers = ["Number", "Amount", "Currency", "Category", "Payment", "Date"]
        self.treeview = ttk.Treeview(self.frame, columns=self.headers, show="headings")

        for header in self.headers:
            self.treeview.heading(header, text=header)
            self.treeview.column(header, anchor="center")

        self.filter_comboboxes = {}
        for i, header in enumerate(self.headers[1:]):  # Exclude "Number" from filter_comboboxes
            self.filter_comboboxes[header] = ttk.Combobox(self.frame, values=["All"])
            self.filter_comboboxes[header].set("All")
            self.filter_comboboxes[header].bind("<FocusOut>", lambda event, h=header: self.filter_data())  # Bind FocusOut event
            self.filter_comboboxes[header].grid(row=8, column=i, padx=5, pady=5, sticky="NSEW")
            label = tk.Label(self.frame, text=header)
            label.grid(row=7, column=i, padx=5, pady=5, sticky="NSEW")  # Shift column by 1

        self.grid_widgets()


        self.update_filter_values()
        self.display_data()

    def grid_widgets(self):
        self.label_amount.grid(row=0, column=0, padx=5, pady=5, sticky="NSEW")
        self.entry_amount.grid(row=0, column=1, padx=(5), pady=5, sticky="NSEW")
        self.label_currency.grid(row=1, column=0, padx=5, pady=5, sticky="NSEW")
        self.dropdown_currency.grid(row=1, column=1, padx=5, pady=5, sticky="NSEW")
        self.label_category.grid(row=2, column=0, padx=5, pady=5, sticky="NSEW")
        self.dropdown_category.grid(row=2, column=1, padx=5, pady=5, sticky="NSEW")
        self.label_payment.grid(row=3, column=0, padx=5, pady=5, sticky="NSEW")
        self.dropdown_payment.grid(row=3, column=1, padx=5, pady=5, sticky="NSEW")
        self.label_date.grid(row=4, column=0, padx=5, pady=5, sticky="NSEW")
        self.entry_date.grid(row=4, column=1, padx=5, pady=5, sticky="NSEW")
        self.button_add.grid(row=5, column=0, padx=5, pady=5, sticky="NSEW")
        self.button_remove_filter.grid(row=5, column=1, padx=5, pady=5, sticky="NSEW")
        self.button_clear_data.grid(row=5, column=2, padx=5, pady=5, sticky="NSEW")
        self.label_filters.grid(row=6, column=0, columnspan=5, padx=5, pady=5, sticky="NSEW")
        self.treeview.grid(row=9, rowspan=3, columnspan=6, padx=5, pady=5, sticky="NSEW")  # Adjust columnspan

    def add_data(self):
        amount_value = str(self.entry_amount.get())
        currency_value = str(self.dropdown_currency.get())
        category_value = str(self.dropdown_category.get())
        payment_value = str(self.dropdown_payment.get())
        date_value = str(self.entry_date.get())

        # Check if all entry fields are filled
        if not all([amount_value, currency_value, category_value, payment_value, date_value]):
            tk.messagebox.showerror("Error", "All fields must be filled.")
            return
        # calc amount to usd
        self.data_USD.append(self.convert_currency(amount_value,currency_value,"USD"))
        # Insert values into the table
        self.treeview.insert("", "end", values=(amount_value, currency_value, category_value, payment_value, date_value))
        transaction = Transaction(amount_value, currency_value, category_value, payment_value, date_value)
        self.data.append(transaction)
        # show Amount USD
        self.calc_and_show_total_USD()
        self.update_filter_values()
        self.display_data()
        self.clear_entries()

    def get_currency(self):
        url = "https://api.currencyfreaks.com/latest?apikey=d8630eb3f8f84724aa316b3589ad3dce"
        print("send Request to api")
        response = requests.get(url)
        if response.status_code == 200:
            self.rates=response.json()
            print("Request is success")
            # return rate with sort him 
            return sorted([item for item in response.json()['rates']], key=lambda x : str(x[0]))
        else:
            raise Exception("Error")
    
    def convert_currency(self,amount, from_currency, to_currency):
        baseExchangeRate = self.rates['rates'][from_currency]
        targetExchangeRate = self.rates['rates'][to_currency]
        convertedAmount = round((float(amount) * float(targetExchangeRate)) / float(baseExchangeRate),3)
        return convertedAmount

    def calc_and_show_total_USD(self):
        total_usd = round(sum(self.data_USD),2)

        if self.total_row_id is not None and self.treeview.exists(self.total_row_id):
            current_children = self.treeview.get_children()
            if self.total_row_id != current_children[-1]:
                self.treeview.delete(self.total_row_id)
        self.total_row_id = self.treeview.insert("", "end", values=("Total USD:", total_usd), tags=("total_row",))
        self.change_last_row_color()  

    def change_last_row_color(self):
        children = self.treeview.get_children()
        if children:
            last_row_id = children[-1]
            self.treeview.tag_configure("last_row", background='#0D94D2',foreground='white')
            self.treeview.item(last_row_id, tags=("last_row",))
    
    def update_filter_values(self):
        for header in self.headers[1:]:  # Exclude "Number" from update_filter_values
            unique_values = set(transaction.__dict__[header.lower()] for transaction in self.data)
            self.filter_comboboxes[header]['values'] = ["All"] + list(unique_values)

    def display_data(self):
        self.clear_table()
        total_amount = 0
        for i, transaction in enumerate(self.data, start=1):
            values = (i, transaction.amount, transaction.currency, transaction.category, transaction.payment, transaction.date)
            self.treeview.insert("", "end", values=values)
            total_amount += int(transaction.amount)
        self.treeview.insert("", "end", values=("Total USD:", total_amount))
        self.change_last_row_color() 

    def clear_table(self):
        for item in self.treeview.get_children():
            self.treeview.delete(item)

    def filter_data(self):
        filtered_data = self.data.copy()

        for header in self.headers[1:]:  # Exclude "Number" from filter_data
            filter_value = self.filter_comboboxes[header].get()
            if filter_value != "All":
                filtered_data = [transaction for transaction in filtered_data if transaction.__dict__[header.lower()] == filter_value]

        self.display_filtered_data(filtered_data)

    def display_filtered_data(self, filtered_data):
        self.clear_table()
        total_amount = 0
        for i, transaction in enumerate(filtered_data, start=1):
            values = (i, transaction.amount, transaction.currency, transaction.category, transaction.payment, transaction.date)
            self.treeview.insert("", "end", values=values)
            total_amount += int(transaction.amount)
        self.treeview.insert("", "end", values=("Total USD:", total_amount))
        self.change_last_row_color() 

    def remove_filter(self):
        for header in self.headers[1:]:  # Exclude "Number" from remove_filter
            self.filter_comboboxes[header].set("All")
        self.display_data()

    def clear_data(self):

        confirmation = messagebox.askquestion("Clear Data", "Are you sure you want to clear all data?")
        if confirmation == 'yes':
            self.data = []
            self.update_filter_values()
            self.display_data()
    
    def clear_entries(self):
        self.entry_amount.delete(0, tk.END)
        self.dropdown_currency.delete(0, tk.END)
        self.dropdown_category.delete(0, tk.END)
        self.dropdown_payment.delete(0, tk.END)
        self.entry_date.delete(0, tk.END)

if __name__ == "__main__":
    app = AppGUI()
    app.root.mainloop()

