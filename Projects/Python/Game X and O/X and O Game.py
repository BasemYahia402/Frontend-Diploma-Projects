# start program
# import modules => [tkinter , random , glob]
# create GUI => [2 label (score) + button (restart) + label (who win) + Playground 3 * 3]
# handle inputs => Input equations
# who win => laws win + tie 
# restart => function to restart
# test program => play the game 
# end program

import tkinter as tk
import random

# Variable to keep track of the player and computer
player = 'X'
Computer = 'O'

# Create the main window
root = tk.Tk()
root.title("Tic Tac Toe")
root.minsize(width=400, height=400)

# Create labels for scores and result
score_label_player = tk.Label(root, text="Player: 0", font=("Arial", 12))
score_label_player.pack()

score_label_computer = tk.Label(root, text="Computer: 0", font=("Arial", 12))
score_label_computer.pack()

button_restart = tk.Button(root, text="Restart", command=lambda: restart())
button_restart.pack()

result_label = tk.Label(root, text="No one wins yet!", font=("Arial", 12))
result_label.pack()

# Create a frame to hold the game board
board_frame = tk.Frame(root)
board_frame.pack(expand=True)

# Create the game board
board = [[' ' for _ in range(3)] for _ in range(3)]

# Create the buttons for each cell
buttons = []
for row in range(3):
    button_row = []
    for col in range(3):
        button = tk.Button(board_frame, text=' ', width=10, height=5,
                           command=lambda r=row, c=col: on_button_click(r, c))
        button.grid(row=row, column=col, padx=5, pady=5)
        button_row.append(button)
    buttons.append(button_row)

# Function to handle button clicks
def on_button_click(row, col):
    global player, Computer

    # Check if the cell is already occupied
    if board[row][col] == ' ':
        # Update the cell with the current player's symbol
        board[row][col] = player
        buttons[row][col].config(text=player)

        # Check winner
        if check_winner(player):
            result_label.config(text=f"{player} wins!")
            return
        else:
            # Check Tie
            check_Tie()
        # Role playing computer
        computer_run(Computer)


# Function playing computer
def computer_run(Computer):
    # Check for available cells
    available_cells = [(row, col) for row in range(3) for col in range(3) if board[row][col] == ' ']

    # If there are no available cells, return from the function
    if not available_cells:
        return

    # Make the computer choose a random cell
    computer_row, computer_col = random.choice(available_cells)

    # Update the cell with the computer's symbol
    board[computer_row][computer_col] = Computer
    buttons[computer_row][computer_col].config(text=Computer)

    # Check winner
    if check_winner(Computer):
        result_label.config(text=f"{Computer} wins!")
        return

    # Check Tie after both player and computer moves
    check_Tie()


# Function to check winner
def check_winner(player):
    # Check rows
    for row in range(3):
        if board[row][0] == board[row][1] == board[row][2] == player:
            highlight_winner([(row, 0), (row, 1), (row, 2)],player)
            return True

    # Check columns
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] == player:
            highlight_winner([(0, col), (1, col), (2, col)],player)
            return True

    # Check diagonals
    if board[0][0] == board[1][1] == board[2][2] == player:
        highlight_winner([(0, 0), (1, 1), (2, 2)],player)
        return True
    elif board[0][2] == board[1][1] == board[2][0] == player:
        highlight_winner([(0, 2), (1, 1), (2, 0)],player)
        return True

    return False

# Function to check tie
def check_Tie():
    if not any(' ' in row for row in board):
        for row in range(3):
            for col in range(3):
                buttons[row][col].config(bg='red', state='disabled')
        result_label.config(text="It's a draw!")
        disable_buttons()


def highlight_winner(winning_combination, player):
    if winning_combination:
        # Highlight only the winning cells
        for row, col in winning_combination:
            buttons[row][col].config(bg='light green')

        # Update the score and disable buttons
        update_score(player)
        disable_buttons()

        return None



def update_score(player):
    # Update the score label for the corresponding player
    if player == 'X':
        score_label_player.config(text=f"Player: {int(score_label_player.cget('text').split(':')[1].strip()) + 1}")
    else:
        score_label_computer.config(text=f"Computer: {int(score_label_computer.cget('text').split(':')[1].strip()) + 1}")

def disable_buttons():
    # Disable all buttons after a game ends
    for row in range(3):
        for col in range(3):
            buttons[row][col].config(state='disabled')

def restart():
    # Reset the game board and buttons
    for row in range(3):
        for col in range(3):
            board[row][col] = ' '
            buttons[row][col].config(text=' ', bg='SystemButtonFace', state='normal')

    # Reset the result label and switch to player X's turn
    result_label.config(text="No one wins yet!")


# Start the game
root.mainloop()









