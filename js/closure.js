const bank = owner => {
    balance = 0;
    // amount is a parameter
    return amount => {
        balance += amount;
        return balance;
    }
}

const nabilaBank = bank('nabila');
console.log(nabilaBank(100)); //call amount function