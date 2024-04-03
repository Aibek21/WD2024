import random

listOfRandomNumbers = [] # создаем пустой список (array of numbers or list of numbers) чисел

for i in range(100): # делаев 100 итераций кода ниже (цикл), repeat 2 rows of code below 100 times
    n = random.randint(1, 100) # генерируем рандомное целое число от 1 до 100, generate random integer between 1 and 100
    listOfRandomNumbers.append(n) # добавляем сгенерированное число в наш список чисел, add generated number to our array

print(listOfRandomNumbers) # выводим наш список в консоли, print our array in console