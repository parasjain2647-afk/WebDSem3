//Create a class BankAccount with accountHolderName and balance. Use a constructor to initialize the account. Provide instance methods deposit(), withdraw(amount), and displayBalance(). Withdrawals should not be allowed when the requested amount is greater than the available balance. Check if details updated is correct for standard accounts, perform transactions on them. Create few account objects and perform different transactions on them.Concepts Covered: Constr

class BankAccount {
    constructor(accountHolderName, balance) {
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount} deposited successfully.`);
        } else {
            console.log("Deposit amount must be greater than 0.");
        }
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than 0.");
        } else if (amount > this.balance) {
            console.log("Withdrawal failed: Insufficient balance.");
        } else {
            this.balance -= amount;
            console.log(`${amount} withdrawn successfully.`);
        }
    }

    displayBalance() {
        console.log(`Account Holder: ${this.accountHolderName}`);
        console.log(`Current Balance: ${this.balance}`);
        console.log("--------------------------");
    }
}

// Creating account objects
let account1 = new BankAccount("Rahul", 5000);
let account2 = new BankAccount("Priya", 10000);
let account3 = new BankAccount("Amit", 3000);

// Account 1 transactions
account1.displayBalance();
account1.deposit(2000);
account1.withdraw(1500);
account1.displayBalance();

// Account 2 transactions
account2.displayBalance();
account2.withdraw(4000);
account2.deposit(2500);
account2.displayBalance();

// Account 3 transactions
account3.displayBalance();
account3.withdraw(5000); // Insufficient balance
account3.deposit(1000);
account3.displayBalance();