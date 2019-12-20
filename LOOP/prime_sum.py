
list=[]
print("enter n")

a= int(input())
sum=0

for i in range(2,a):
 
 if i > 1:  
  for j in range(2,i):
    
    if (i % j) == 0: 
      sum+=i 
      print("sum : ",sum)  
              
       
print(sum)    