using System;

namespace upperNumber
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = int.Parse(Console.ReadLine());
            double num = -1000000000000;
        
            for (int i = 1; i <= a; i++)
            {
                int b = int.Parse(Console.ReadLine());
                if (b>num)
                {
                    num = b;
                }
            
            }
            Console.WriteLine("max= "+ num);
            
        }
    }
}
