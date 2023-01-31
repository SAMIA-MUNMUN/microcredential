"""
Samia Munmun
day 17 - intro to Python
Monday, Jan 30
"""
#Example using the print() function
print('Samia Munmun')

print('---------- example 1 ---------')

name = 'peter pan'
number = 2.5
print ('my name is: ',name,'and my lucky number is:',number)

# example using input() function

print('---------- example 2 ---------')

lastName = input('Enter a last name:')
num1 = int(input('Enter a number: '))
print('Last name = ',lastName,'\nEnter number = ',num1, '\nThe double of the number is = ',num1*2)

print('---------- example 3 ---------')

h = float(input('Enter a height: '))
w = float(input('Enter a weight: '))
hyp = (h**2 + w**2)**0.5
print('Hypotenuse = ',hyp)

print('---------- CLASS ACTIVITY ---------')

"""Write A Python Code That Will Ask The User to enter a radius and a height from the keyboard --> input()
Once the value are collected, calculate the are of a circle, the circuference, and the volume of sphere.
To calculate area = 3.1416*radius**2
To calculate the Circuference = 2*3.1416*radius
To calculate the Volume = area*height

print as:
Area = _________

Circumference = __________

Volume = ___________

"""

height = float(input('Enter a number for height: '))
radius = float(input('Enter a number for radius: '))
Area = 3.1416*radius**2
Circumference = 2*3.1416*radius
Volume = Area*height

print('Area = ',Area,'\nCircumference = ',Circumference,'\nVolume = ',Volume)


print('---------- Example 4---------')


# assign a value
number1 = 8
print('Number = ',number1)
# self add +=
number1 +=3
print('Self add = ', number1)
# self substraction -=
number1 -=5
print('Self subtract = ', number1)
number1 %=4
print('Remainder after the division with 4 = ', number1)
# using %s market on print()
print('The height =  %s and width = %s. The calculation for the hypotenuse is %s ' %(h,w,h))

print('---------- Example 5: string---------')

# find a character in a string using index
msg = 'Queensborough'
# print the 3rd and 7th character in string msg
print('The 3rd character is = ', msg[2])
print('The 7th character is = ', msg[6])
# slice in a string
print('From the 5th to the 10th character: ',msg[4:10])
lenMsg = len(msg)
print('The length is = ',lenMsg)
#upper() method
msgUpper = msg.upper()
print(msgUpper)
#Replace() method
msgReplace = msg.replace('e','$')
print(msgReplace)
# in operator
msgIn = 'm' in msg
print('Is m in the message?',msgIn)

print('---------- Example 6: list---------')

#create list of animals
animals = ['cat','dog','parrot','fish','rat']
print('2nd animal = ',animals[1])
#delete the 3rd item in the list
del animals[2]
print(animals)
#asks the user to input an animal will be added to the existing list
a = input('Enter an animal: ')
animals.append(a)
print(animals)











               
               
