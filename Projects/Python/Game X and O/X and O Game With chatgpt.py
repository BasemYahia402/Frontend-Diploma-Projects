import tkinter as tk
import random

# Constants
PLAYER = 'X'
COMPUTER = 'O'

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
buttons = [[tk.Button(board_frame, text=' ', width=10, height=5,
                      command=lambda r=row, c=col: on_button_click(r, c))
            for col in range(3)] for row in range(3)]

# Grid layout for buttons
for row, button_row in enumerate(buttons):
    for col, button in enumerate(button_row):
        button.grid(row=row, column=col, padx=5, pady=5)

def on_button_click(row, col):
    global PLAYER, COMPUTER

    if board[row][col] == ' ':
        board[row][col] = PLAYER
        buttons[row][col].config(text=PLAYER)

        if check_winner(PLAYER):
            result_label.config(text=f"{PLAYER} wins!")
            return
        else:
            check_Tie()
        computer_run(COMPUTER)

def computer_run(COMPUTER):
    available_cells = [(r, c) for r in range(3) for c in range(3) if board[r][c] == ' ']

    if not available_cells:
        return

    computer_row, computer_col = random.choice(available_cells)
    board[computer_row][computer_col] = COMPUTER
    buttons[computer_row][computer_col].config(text=COMPUTER)

    if check_winner(COMPUTER):
        result_label.config(text=f"{COMPUTER} wins!")
        return

    check_Tie()

def check_winner(player):
    for row in range(3):
        if all(board[row][col] == player for col in range(3)):
            highlight_winner([(row, col) for col in range(3)], player)
            return True

    for col in range(3):
        if all(board[row][col] == player for row in range(3)):
            highlight_winner([(row, col) for row in range(3)], player)
            return True

    if all(board[i][i] == player for i in range(3)):
        highlight_winner([(i, i) for i in range(3)], player)
        return True
    elif all(board[i][2 - i] == player for i in range(3)):
        highlight_winner([(i, 2 - i) for i in range(3)], player)
        return True

    return False

def check_Tie():
    if not any(' ' in row for row in board):
        for row, button_row in enumerate(buttons):
            for col, button in enumerate(button_row):
                button.config(bg='red', state='disabled')
        result_label.config(text="It's a draw!")
        disable_buttons()

def highlight_winner(winning_combination, player):
    for row, col in winning_combination:
        buttons[row][col].config(bg='light green')

    update_score(player)
    disable_buttons()

def update_score(player):
    score_label = score_label_player if player == PLAYER else score_label_computer
    current_score = int(score_label.cget('text').split(':')[1].strip())
    score_label.config(text=f"{player.capitalize()}: {current_score + 1}")

def disable_buttons():
    for row, button_row in enumerate(buttons):
        for col, button in enumerate(button_row):
            button.config(state='disabled')

def restart():
    for row in range(3):
        for col in range(3):
            board[row][col] = ' '
            buttons[row][col].config(text=' ', bg='SystemButtonFace', state='normal')

    result_label.config(text="No one wins yet!")

# Start the game
root.mainloop()
