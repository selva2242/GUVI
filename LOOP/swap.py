print("Enter Input")
a=int(input())
list=[]
list2=[]
swap=0
i=1
while (a>0):
 b=a%10
 a=a//10
 list.append(b)
c=len(list)
d=c-1
for i in range (0,c):
 list2.append(list[d])
 d-=1
swap=list2[0]
list2[0]=list2[-1]
list2[-1]=swap
print("swap : ",list2)