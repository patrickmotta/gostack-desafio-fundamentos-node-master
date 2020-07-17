import Transaction from '../models/Transaction';
// import CreateTransactionService from '../services/CreateTransactionService';

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const balance = this.transactions.reduce(
      (accumulator, transaction) => {
        if (transaction.type === 'income') {
          accumulator.income += transaction.value;
        }
        if (transaction.type === 'outcome') {
          accumulator.outcome += transaction.value;
        }

        accumulator.total = accumulator.income - accumulator.outcome;

        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );
    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
