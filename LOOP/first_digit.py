number=int(input("enter the)number"))
first_digit = number

while (first_digit >= 10):
    first_digit = first_digit // 10

print("The First Digit from a Given Number {0} = {1}".format(number, first_digit))
last=(number%10)
print(last)
