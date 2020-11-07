using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            int lengthCm = int.Parse(Console.ReadLine());
            int widthCm = int.Parse(Console.ReadLine());
            int heightCm = int.Parse(Console.ReadLine());
            double percentage = double.Parse(Console.ReadLine());
            double volumeAkvarium = lengthCm * widthCm * heightCm;
            double obshto = volumeAkvarium * 0.001;
            double percentage2 = percentage * 0.01;
            double litri = obshto * (1 - percentage2);
            Console.WriteLine(litri);
        }
    }
}
