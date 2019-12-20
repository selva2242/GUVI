print("enter N")
a=int(input())
 
sum=0 
i = 1
while i<a:
   if (a%i) == 0:
    sum+=i  
   i = i + 1
if(a==sum):
 print("Number is a perfect number")

else:
 print("Number is not a perfect number")   