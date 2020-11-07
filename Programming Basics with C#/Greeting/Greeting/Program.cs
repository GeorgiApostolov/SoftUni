using System;

namespace Greeting
{
    class Program
    {
        static void Main(string[] args)
        {
            double a = double.Parse(Console.ReadLine());
            double obshto = a * 7.61;
            double b = a * 6.2402;
            double otstupka = obshto* 0.18;
            Console.WriteLine($"{b:f2} lv.");
            Console.WriteLine($"{otstupka:f2} lv.");
        }
    }
}
