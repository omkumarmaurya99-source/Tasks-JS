class BankAccount {
    constructor(name, accountNumber, balance = 0) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`₹${amount} deposited successfully`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
        } else {
            this.balance -= amount;
            console.log(`₹${amount} withdrawn successfully`);
        }
    }

    checkBalance() {
        console.log(`Current Balance: ₹${this.balance}`);
    }
}

const account1 = new BankAccount("Om Maurya", 12345, 1000);

account1.deposit(500);
account1.withdraw(300);
account1.checkBalance();
