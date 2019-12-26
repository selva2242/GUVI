import os
source , destination , mode = input().split(' ')
for filename in os.listdir(source):
    if mode == "-c":
        os.system('cp {} {}'.format(source+'/'+filename,destination))
    elif mode == "-r":
        os.system('mv {} {}'.format(source+'/'+filename,destination))

#val /home/pcuser/Desktop/Selva/GUVI/LOOP 
#new_val /home/pcuser/Desktop/