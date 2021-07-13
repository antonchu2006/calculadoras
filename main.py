print("Linkmaster CALC.py")
print("1. sumar")
print("2. restar")

def suma(n1, n2):
    return n1 + n2

def resta(n1, n2):
    return n1 - n2

opcion = int(input("Elige lo que quieras hacer >> "))

if opcion == 1:
    num1 = int(input("Elige el primer numero >>"))
    num2 = int(input("Elige el segundo numero >>"))
    print(suma(num1, num2))

elif opcion == 2:
    num1 = int(input("Elige el primer numero >>"))
    num2 = int(input("Elige el segundo numero >>"))
    print(resta(num1, num2))
else:
    print("numero incorrecto")