using System;

namespace _02.GreaterNumber
{
    class Program
    {
        static void Main(string[] args)
        {
            double firstNumber = double.Parse(Console.ReadLine());
            double secondNumber = double.Parse(Console.ReadLine());
            if (firstNumber > secondNumber)
            {
                Console.WriteLine(firstNumber);
            }
            else if (firstNumber < secondNumber)
            {
                Console.WriteLine(secondNumber);
            }
            else if (firstNumber==secondNumber)
            {
                Console.WriteLine(firstNumber);
            }
           
        }
    }
}
