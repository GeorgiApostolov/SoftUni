using System;

namespace _07.ToyShop
{
    class Program
    {
        static void Main(string[] args)
        {
            double priceOfTrip = double.Parse(Console.ReadLine());
            int puzzles = int.Parse(Console.ReadLine());
            int talkingDolls= int.Parse(Console.ReadLine());
            int teddyBears = int.Parse(Console.ReadLine());
            int minions = int.Parse(Console.ReadLine());
            int trucks = int.Parse(Console.ReadLine());
            double sum = puzzles * 2.60 + talkingDolls * 3 + teddyBears * 4.10 + minions * 8.20 + trucks * 2;
            double numberОfТoys = puzzles + talkingDolls + teddyBears + minions + trucks;

            if (numberОfТoys>=50)
            {
                sum -= sum * 0.25;
            }

            sum -= sum * 0.10;
            if (sum>=priceOfTrip)
            {
                Console.WriteLine($"Yes! {sum-priceOfTrip:f2} lv left.");
            }
            else
            {
                Console.WriteLine($"Not enough money! {priceOfTrip-sum:f2} lv needed.");
            }
        }
    }
}
