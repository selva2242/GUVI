print("Input number")
a=int(input())

i = 2
    while i * i <= a:
        if a % i:
            i += 1
        else:
            a //= i
print(a)       