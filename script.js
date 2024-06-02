document.getElementById('credit-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const Name = document.getElementById('Name').value;
    const currentAmount = parseInt(document.getElementById('currentAmount').value);
    const loanAmount = parseInt(document.getElementById('loanAmount').value);
    const creditHistory = parseInt(document.getElementById('creditHistory').value);
    const lastDepositDate = new Date(document.getElementById('lastDeposit').value);
    const lastLoanCollectionDate = new Date(document.getElementById('lastLoanCollection').value);
    const loanRepaymentPeriod = parseInt(document.getElementById('loanRepaymentPeriod').value);
    const accountType = document.getElementById('accountType').value;

    let points = 0;
    // check current account balance
    if (currentAmount > loanAmount) { 
        points += 10;
    } else {
        points -= 10;
    }

    // Check 6 months credit history
    if (creditHistory >= 6) {
        points += 10;
    }
    // Check last deposit date
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    if (new Date(lastDepositDate) > oneMonthAgo) {
        points += 5;
    }


   // Check last loan collection date
   if (new Date(lastLoanCollectionDate) < new Date(new Date().setMonth(new Date().getMonth() - 6))) {
    points += 10;
}

    // Check loan repayment period
    if (loanRepaymentPeriod < 6) {
        points += 5;
    }

    // Check account type
    if (accountType === 'Current') {
        points += 10;
    } else if (accountType === 'Savings') {
        points += 5;
    }

    const resultDiv = document.getElementById('result');
    if (points > 30) {
        resultDiv.textContent =`Congratulations!!! ${Name} Your Loan can be awarded, Total points: ${points}`;
    } else {
        resultDiv.textContent =`Sorry!!! ${Name} Loan cannot be awarded, Total points: ${points}`;
    }
});

function isWithinMonth(date) {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    return date > oneMonthAgo;
}

function isGreaterThanSixMonths(date) {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    return date > sixMonthsAgo;
}