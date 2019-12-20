print("Enter a")
a=int(input())
print("Enter b")
b=int(input())
greatr=0
lcm=0
if a > b:
       greatr = a
else:
       greatr = b
while(True):
  if((greatr % a == 0) and (greatr % b == 0)):
    lcm = greatr
    break
  greatr += 1
print(lcm)