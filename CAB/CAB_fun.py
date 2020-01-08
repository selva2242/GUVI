from datetime import datetime
from datetime import timedelta

credentials = {}
cab_categories = {'Mini':{'Mini1':['',''], 'Mini2':['',''], 'Mini3':['','']}, 'Prime':{'Prime1':['',''], 'Prime2':['',''], 'Prime3':['','']}, 'Micro':{'Micro1':['',''], 'Micro2':['',''], 'Micro3':['','']}, 'Premium':{'Premimum1':['',''], 'Premium2':['',''], 'Premium3':['','']}}
cab_pricing = {"Mini":[10,15], "Prime":[20,25], "Micro":[15,20], "Premium":[25,30]}
allowed_email = ['yahoo.com', 'gmail.com']
allowed_special_characters=['@','_','!','#','$','%','^','&','*','(',')','<','>','?','/','|','{','}','~',':']
def check_username_in_credentials(username):
    with open("credentials.txt",'r') as f:
        for each_combination in f:
            if(each_combination.split(' ')[0]==username):
                f.close()
                return True
        else:
            f.close()
            return False

def check_valid_username(username):
    if((len(username.split('@'))==2 and username.split('@')[1] in allowed_email)  or (len(username)==10 and username.isdigit())):
        return True
    return False

def check_valid_password(password):
    if(len(password)>=9 and len(password)<=15):
        HasNum = False
        HasLowerCase = False
        HasSpecialCharacter = False
        HasUpperCase = False
        for iter in range(0, len(password)):
            if(password[iter]>='0' and password[iter]<='9'):
                HasNum = True
            elif(password[iter]>='a' and password[iter]<='z'):
                HasLowerCase = True
            elif(password[iter]>='A' and password[iter]<='Z'):
                HasUpperCase = True
            elif(password[iter] in allowed_special_characters):
                HasSpecialCharacter = True
            if(HasNum and HasLowerCase and HasUpperCase and HasSpecialCharacter):
                return True
    return False

def get_validate_credentials(username):
    password_retry = 2
    while(True):
        password = input("Enter Your Password ")
        with open("credentials.txt",'r') as credential:
            for eachline in credential:
                if(eachline.split(' ')[0]==username and eachline.split(' ')[1].strip()==password):
                    return True
            if(password_retry>0):
                password_retry = password_retry - 1
                print("Entered password is incorrect ")
                retry = input("do You want to retry? yes or no ")
                if(retry == "yes"):
                    continue
                else:
                    return False
            else:
                print("You have exhausted the password retry attempts ")
                return False


def signin():
    print(" \nEnter Your Login Credentials ")
    while(True):
        username = input("Enter Your username ")
        if not check_username_in_credentials(username):
            print("ENTERED USERNAME IS NOT REGISTERED")
            return False, ""
        else:
            if get_validate_credentials(username):
                print("LOGIN SUCCESSFULL \n")
                print("********* Welcome", username.split('@')[0],"***********")
                return True,username
            else:
                return False, ""
                   
def signup():
    print("Enter the below details to sign up \n")
    while(True):
        username = input(r"Enter your email or phone number ")
        if not check_valid_username(username):
            print("Mentioned username is not an valid email or phone number \n")
            username_select = input(("Do you want to enter username again yes or no\n"))
            if(username_select == "yes"):
                continue
            else:
                break
        elif check_username_in_credentials(username):
            print("username already taken ")
            username_select = input(("Do you want to enter username again yes or no \n"))
            if(username_select == "yes"):
                continue
            else:
                break
        else:
            while(True):
                password = input("""
Rules for Password:
1. Should have one upper case letter
2. Should have one lower case letter
3. Should have one digit
4. Should have one special Character
5. password should be beween 9 to 15 length
Enter a password  \n""")
                if not check_valid_password(password):
                    print("Your password does not abide our password rules\n")
                    password_set = input(("Do you want to try setting password again yes/no\n"))
                    if(password_set == "yes"):
                        continue
                    else:
                        break
                else:
                    re_password = input("reenter a password \n ")
                    if(password!=re_password):
                        print("password does not match")
                        password_set = input(("Do you want to try setting password again yes/no "))
                        if(password_set == "yes"):
                            continue
                        else:
                            break
                    else:
                        with open('credentials.txt', 'a') as f:
                            f.write(username+" "+password+'\n')
                        print("Successfully created an account")
                        signin_now = input("Do You want to signin now yes/no \n")
                        if(signin_now=="yes"):
                            signin()
                            break
                        else:
                            break
            break 
   
def isAvailable(endTime):
    if(endTime=='' or (endTime.date()<=datetime.now().date() and endTime.time()<datetime.now().time())):
        return "AVAILABLE","NOW"
    else:
        return "NOT AVAIALBLE",endTime+timedelta(minutes=1)

def searchcabs(is_signedin):
    while(True):
        source = int(input("Enter the source: "))
        if(source<0):
            print(" Enter correct values for source")
            try_again = input("Do you want to try again yes/no")
            if(try_again == "yes"):
                continue
            else:
                 return is_signedin, False 
        else:
            break
    while(True):
        dest = int(input("Enter destination: "))
        if(dest<=0):
            print("Enter correct values for destination")
            try_again = input("         Do you want to try again yes/no")
            if(try_again == "yes"):
                continue
            else:
                return is_signedin, False 
        if(dest-source<0):
            print("destination is less than source")
            try_again = input("         Do you want to try again yes/no")
            if(try_again == "yes"):
                continue
            else:
                return is_signedin, False 
        else:
            break
    while(True):
        print("-------------------CAB CATEGORIES----------------------------")
        print("      CATEGORY                    AMOUNT(per km)             ")
        print("------------------------------First 5 kms----After 5 kms-----")
        print("      Mini                       {}             {}           ".format(cab_pricing['Mini'][0],cab_pricing['Mini'][1]))
        print("      Micro                      {}             {}           ".format(cab_pricing['Micro'][0],cab_pricing['Micro'][1]))
        print("      Prime                      {}             {}           ".format(cab_pricing['Prime'][0],cab_pricing['Prime'][1]))
        print("      Premium                    {}             {}           ".format(cab_pricing['Premium'][0],cab_pricing['Premium'][1]))

        cab_category= input("select any of the above cab categories ")
        if cab_category in cab_categories:
            current_cab_list = []
            print("Availability of  cabs your cab category ")
            for iter in cab_categories:
                if(iter==cab_category):
                    print("----------CAB AVAILABILITY--------------------------------")
                    print("   CAB_NAME        AVAILABILITY    EXPECTED AVAILABLE TIME")
                    print("----------------------------------------------------------")
                    for cabs in cab_categories[iter]:
                        current_cab_list.append(cabs)
                        end   = cab_categories[iter][cabs][1]
                        availableOrNot , ExpectedAvailableTime = isAvailable(end)
                        print("   {}               {}                   {}            ".format(cabs,availableOrNot, ExpectedAvailableTime))
                    print("To go to categories section enter back")
            cab_model = input("\n select your option ")
            if cab_model == "back":
                continue
            if cab_model not in current_cab_list:
                print("You have entered the wrong cab model")
                try_again = input("Do you want to try again yes/no")
                if(try_again == "yes"):
                    continue
                else:
                    return is_signedin, False    
            break

        else:
            print("You have entered the wrong cab type")
            try_again = input("         Do you want to try again yes/no ")
            if(try_again == "yes"):
                continue
            else:
                return is_signedin, False 

    while(True):
        confirm_journey = input("confirm your journey yes/no? ")
        if(confirm_journey == "yes"):
            if(is_signedin == False):
                print("please sign in to continue")
                signin_now = input("Do you want to sign in now yes/no ")
                if(signin_now=="yes"):
                    signin()
                    is_signedin = True
                else:
                    return is_signedin, False
            else:
                print("          Your Journey is confirmed. Happy travelling          ")
                if(dest-source>5):
                    Amount = (dest-source-5)*cab_pricing[cab_category][1]+ 5*cab_pricing[cab_category][0]
                else:
                    Amount = (dest-source)*cab_pricing[cab_category][0]
                cab_categories[cab_category][cab_model][0] = datetime.now()
                Estimated_Reaching_time = datetime.now() + timedelta(seconds=120*(dest-source))
                cab_categories[cab_category][cab_model][1] = Estimated_Reaching_time
                print("-------------------------------------------------------------------------------------")
                print("                   Here is your invoice!!!!!     ")
                print("     Source                             :",       source)
                print("     Destination                        :",       dest)
                print("     Journey distance                   :",      dest-source,"kms")
                print("     Cab type                           :",      cab_category)
                print("     Cab Model                          :",      cab_model)
                print("     Total Cost of the Journey          :",      Amount, "rupees")
                print("     Estimated Reaching time  and date  :",      Estimated_Reaching_time.hour,":",Estimated_Reaching_time.minute," ",Estimated_Reaching_time.date())
                print("         Thankyou for selecting us. We would love to serve you again! ")
                print("--------------------------------------------------------------------------------------")
                continue_travel = input("Do you want to travel again? yes/no ") 
                if(continue_travel == "yes"):
                    searchcabs(is_signedin)
                else:
                    print ("coming")
                    return is_signedin, False
        else:
            return is_signedin,False
        
def deactivate(current_user):
    password = input("please enter your password to deactivate your account")
    with open('credentials.txt','r') as f:
        for eachline in f:
            if(eachline.split(' ')[0]==current_user and eachline.split(' ')[1].strip()==password):
                f.close()
                with open('credentials.txt','r') as f:
                    lines = f.readlines()
                    f.close()
                with open('credentials.txt','w') as f:
                    for line in lines:
                        if(line.split(' ')[0]!=current_user):
                            f.write(line)
                    f.close
                return True
print("WELCOME TO CHENNAI CAB SERVICE")
print("------------------------------")
is_signedin = False
current_user =""
while(True):
    if is_signedin == False:
        Operation = input("""Enter your operation 
        1. signin
        2. signup
        3. searchcabs
        4. exit \n""")
    else:
        Operation = input("""Enter your operation 
        1. searchcabs
        2. signout
        3. Deactivate account
        3. exit \n""")
    if(Operation=="signin"):
        is_signedin, current_user = signin()
    elif(Operation=="signup"):
        signup()
    elif(Operation=="signout"):
        is_signedin = False
        print("YOU HAVE SUCCESSFULLY SIGNED OUT \n")
    elif(Operation=="searchcabs"):
        is_signedin, status= searchcabs(is_signedin)
    elif(Operation=="Deactivate account"):
        if deactivate(current_user):
            print("SUCCESSFULLY DEACTIVATED ACCOUNT")
            is_signedin = False
    elif(Operation=="exit"):
        print("YOU HAVE CLOSED THE APPLICATION")
        break
    else:
        print("YOU HAVE ENTERED A WRONG OPTION PLEASE TRY AGAIN \n")