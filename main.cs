using System;

class TestClass
{
    //Pol estuvo aqui xd
    public static int sumar(int num1, int num2)
    {
        return num1 + num2;
    }

    public static int restar(int num1, int num2)
    {
        return num1 - num2;
    }

    private static string n1;
    private static string option;
    private static string n2;
    
    static void Main(string[] args)
    {
        Console.WriteLine("Elegir opción: \n 1: Sumar \n 2: Restar");
        option = Console.ReadLine();
        if (option == "1")
        {
            Console.WriteLine("Introduce el primer número");
            n1 = Console.ReadLine();
            Console.WriteLine("Introduce el segundo número");
            n2 = Console.ReadLine();

            
            int resultado = sumar(Convert.ToInt32(n1), Convert.ToInt32(n2));
            Console.WriteLine(Convert.ToString(resultado));
            Console.ReadKey();
        }
        if (option == "2")
        {
            Console.WriteLine("Introduce el primer número");
            n1 = Console.ReadLine();
            Console.WriteLine("Introduce el segundo número");
            n2 = Console.ReadLine();


            int resultado = restar(Convert.ToInt32(n1), Convert.ToInt32(n2));
            Console.WriteLine(Convert.ToString(resultado));
            Console.ReadKey();
        }

        else{
            Console.WriteLine("Has introducido un dígito incorrecto, abre el programa otra vez e inténtalo de nuevo wapo");
            Console.ReadKey();
        }




    }
}