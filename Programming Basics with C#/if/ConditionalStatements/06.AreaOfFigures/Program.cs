using System;

namespace _06.AreaOfFigures
{
    class Program
    {
        static void Main(string[] args)
        {
            string figure = Console.ReadLine();
           
            if (figure== "square")
            {
                double a = double.Parse(Console.ReadLine());
                double s = a * a;
                Console.WriteLine($"{s:f3}");
            }
            else if (figure== "rectangle")
            {
                double a = double.Parse(Console.ReadLine());
                double b = double.Parse(Console.ReadLine());
                double s = a * b;
                Console.WriteLine($"{s:f3}");

            }
            else if (figure== "circle")
            {
                double a = double.Parse(Console.ReadLine());
                double s = Math.PI * Math.Pow(a,2);
                Console.WriteLine($"{s:f3}");
            }
            else if (figure== "triangle")
            {
                double a = double.Parse(Console.ReadLine());
                double b = double.Parse(Console.ReadLine());
                double s = (a * b) / (2);
                Console.WriteLine($"{s:f3}");
            }
        }
        
    }
}
