import os

def showMenu():
    print("[1] Give a lecture")
    print("[2] Hush the class")
    print("[0] Say Goodbye")
    return input("Enter choice: ")

def main():
    while True:
        choice = showMenu()
        if choice == "1":
            os.system("clear||cls")
            print("In Computer Science ...")
        elif choice == "2":
            os.system("clear||cls")
            print("Alright. Settle down, settle down.")
        elif choice == "0":
            os.system("clear||cls")
            print("That ends our lesson. See you all next week.")
            break
        else:
            os.system("clear||cls")
            print("Please schedule a consultation.")

def getNumbers(a, b):
    if type(a) == int and type(b) == int:
        return a+b
    else:
        return

main()