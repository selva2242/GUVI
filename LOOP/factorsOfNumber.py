
n=int(input())
print("The factors of",n,"are:")
for i in range(1, n + 1):
       if n % i == 0:
           print(i)