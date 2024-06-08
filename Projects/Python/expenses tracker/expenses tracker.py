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
# some feature [clear all]
# test program=> try to add data to table
# end program

# This program took me a lot of effort and time, I wish you an enjoyable review 


# import modules
import tkinter as tk
from tkinter import messagebox, ttk
import requests
from datetime import datetime # not used because it is not important



class AppGUI:

    def __init__(self):
        # array of rates 
        self.rates=[]

        # array of amount use USD
        self.data_USD=[]

        # total row
        self.total_row_id = None

        # create window
        self.root = tk.Tk()
        self.root.title('Expenses Tracker')
        self.frame = tk.Frame(self.root)
        self.frame.pack()
        
        # create widgets
        self.label_amount = tk.Label(self.frame, text="Amount : ")
        self.entry_amount = tk.Entry(self.frame)

        self.label_currency = tk.Label(self.frame, text="Currency : ")
        self.dropdown_currency = ttk.Combobox(self.frame, values=[i for i in self.get_currency()])

        self.label_category = tk.Label(self.frame, text="Category : ")
        self.dropdown_category = ttk.Combobox(self.frame, values=["Food", "Transportation"])

        self.label_payment = tk.Label(self.frame, text="Payment Method : ")
        self.dropdown_payment = ttk.Combobox(self.frame, values=["Credit Card","Paybal","Cash"])

        self.label_date = tk.Label(self.frame, text="Date : ")
        self.entry_date = tk.Entry(self.frame)

        self.style = ttk.Style(self.root)
        self.style.theme_use('default')
        self.style.configure("Treeview.Heading",font=("Calibri",12,'italic'),activebackground="#0D94D2",background = "#0D94D2",foreground="White")

        self.button = tk.Button(self.frame, text='Add Data', command=lambda: self.add_data(),bg='#0D94D2', fg='white')
        self.button_clear_all = tk.Button(self.frame, text='Clear All', command=lambda: self.clear_all(), bg='#FF5733', fg='white')
        self.label_output = tk.Label(self.frame, text="Output Table")


        self.headers = ["Amount", "Currency", "Category", "Payment", "Date"]
        self.treeview = ttk.Treeview(self.frame,columns=self.headers,show="headings")



        # Set column headers
        for header in self.headers:
            self.treeview.heading(header, text=header)
            self.treeview.column(header, anchor="center")

        # form widgets in window
        self.label_amount.grid(row=0, column=0, padx=5, pady=5)
        self.entry_amount.grid(row=0, column=1, padx=(5), pady=5,sticky="NSEW")
        self.label_currency.grid(row=1, column=0, padx=5, pady=5)
        self.dropdown_currency.grid(row=1, column=1, padx=5, pady=5,sticky="NSEW")
        self.label_category.grid(row=2, column=0, padx=5, pady=5)
        self.dropdown_category.grid(row=2, column=1, padx=5, pady=5,sticky="NSEW")
        self.label_payment.grid(row=3, column=0, padx=5, pady=5)
        self.dropdown_payment.grid(row=3, column=1, padx=5, pady=5,sticky="NSEW")
        self.label_date.grid(row=4, column=0, padx=5, pady=5)
        self.entry_date.grid(row=4, column=1, padx=5, pady=5,sticky="NSEW")
        self.button.grid(row=5, columnspan=2, padx=5, pady=5)
        self.button_clear_all.grid(row=5,column=1,columnspan=2, padx=5, pady=5)
        self.label_output.grid(row=6, columnspan=2, padx=5, pady=5)
        self.treeview.grid(row=7, rowspan=3, columnspan=2, padx=5, pady=5)
    
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
        # Clear entry widgets
        self.clear_entries()
        # show Amount USD
        self.calc_and_show_total_USD()
       

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


    def clear_entries(self):
        self.entry_amount.delete(0, tk.END)
        self.dropdown_currency.delete(0, tk.END)
        self.dropdown_category.delete(0, tk.END)
        self.dropdown_payment.delete(0, tk.END)
        self.entry_date.delete(0, tk.END)
        

    def clear_all(self):
        for item in self.treeview.get_children():
            self.treeview.delete(item)


    def mainloop(self):
        self.root.mainloop()

# create instance from class and show gui
app = AppGUI()
app.mainloop()

        

