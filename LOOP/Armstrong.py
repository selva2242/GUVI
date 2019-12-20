print("Enter Input")
a=int(input())
temp=a
list=[]
sum=0
i=1
while (a>0):
 b=a%10
 a=a//10
 list.append(b)
c=len(list)
#calculation
for i in range (0,c):
 x=list[i] ** c
 sum=sum+(x)
print("output")
print(sum) 
if(temp==sum):
 print("number is armstrong")
else:
 print("number is not armstrong")	