/*
Напиши скрипт управления личным кабинетом интернет банка. 
Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
*/

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const newTransaction = {
      idTransaction: this.transactions.length + 1,
      amountTransaction: amount,
      typeTransaction: type,
    };

    return newTransaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;

    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));

    return this.transactions;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводит сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      return `снятие такой суммы не возможно, недостаточно средств!\n${this.getBalance()}`;
    }

    this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW),
    );

    return this.transactions;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `текущий баланс: ${this.balance}`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    let transactionDetails = ``;

    for (const [key, value] of Object.entries(this.transactions[id - 1])) {
      transactionDetails += `${key}: ${value}\n`;
    }

    return transactionDetails;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let transactionTotal = 0;

    for (const transaction of this.transactions) {
      if (transaction.typeTransaction === type) {
        transactionTotal += transaction.amountTransaction;
      }
    }

    return transactionTotal;
  },
};

console.log(account.deposit(500));
console.log(account.getBalance());
console.log(account.deposit(700));
console.log(account.getBalance());
console.log(account.deposit(900));
console.log(account.getBalance());
console.log(account.withdraw(100));
console.log(account.getBalance());
console.log(account.withdraw(10000));
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionDetails(4));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
