import inquirer from 'inquirer';

interface CurrencyRates {
    USD: number;
    EUR: number;
    GBP: number;
    INR: number;
    PKR: number;
}

const currency: CurrencyRates = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_answer = await inquirer.prompt(
    [
        {
            name: 'from',
            message: 'Enter From Currency',
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
        },
        {
            name: 'to',
            message: 'Enter To Currency',
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
        },
        {
            name: 'amount',
            message: "How much do you want to convert?",
            type: 'number'
        }
    ]
)

// declaring as "CurrencyRates" interface keys
const fromCurrency = user_answer.from as keyof CurrencyRates;
const toCurrency = user_answer.to as keyof CurrencyRates;

let fromAmount = currency[fromCurrency];
let toAmount = currency[toCurrency];
let baseAmount = user_answer.amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`Converted amount: ${convertedAmount.toFixed(2)} ${user_answer.to}`);
