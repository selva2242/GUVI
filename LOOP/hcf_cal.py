print("Enter a")
a=int(input())
print("Enter b")
b=int(input())
small=0
hcf=0
if a > b:
        small = b
else:
        small = a
for i in range(1, small+1):
    if((a % i == 0) and (b % i == 0)):
        hcf = i 
    
print(hcf)