function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// EMI
function calculateEMI() {
    let p = parseFloat(document.getElementById('emiLoan').value);
    let r = parseFloat(document.getElementById('emiRate').value) / 12 / 100;
    let n = parseFloat(document.getElementById('emiTime').value);
    let emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    document.getElementById('emiResult').innerText = "EMI: ₹" + emi.toFixed(2);
}

// FD
function calculateFD() {
    let p = parseFloat(document.getElementById('fdAmount').value);
    let r = parseFloat(document.getElementById('fdRate').value) / 100;
    let t = parseFloat(document.getElementById('fdTime').value);
    let maturity = p * Math.pow(1 + r, t);
    document.getElementById('fdResult').innerText = "Maturity Amount: ₹" + maturity.toFixed(2);
}

// SIP
function calculateSIP() {
    let amount = parseFloat(document.getElementById('sipAmount').value);
    let rate = parseFloat(document.getElementById('sipRate').value) / 100 / 12;
    let months = parseFloat(document.getElementById('sipTime').value) * 12;
    let maturity = amount * ((Math.pow(1 + rate, months) - 1) / rate) * (1 + rate);
    document.getElementById('sipResult').innerText = "Maturity Amount: ₹" + maturity.toFixed(2);
}

// RD
function calculateRD() {
    let amount = parseFloat(document.getElementById('rdAmount').value);
    let rate = parseFloat(document.getElementById('rdRate').value) / 100 / 12;
    let months = parseFloat(document.getElementById('rdTime').value);
    let maturity = amount * months + (amount * months * (months + 1) / 2) * rate;
    document.getElementById('rdResult').innerText = "Maturity Amount: ₹" + maturity.toFixed(2);
}

// PPF
function calculatePPF() {
    let amount = parseFloat(document.getElementById('ppfAmount').value);
    let rate = parseFloat(document.getElementById('ppfRate').value) / 100;
    let years = parseFloat(document.getElementById('ppfTime').value);
    let maturity = 0;
    for (let i = 0; i < years; i++) {
        maturity = (maturity + amount) * (1 + rate);
    }
    document.getElementById('ppfResult').innerText = "Maturity Amount: ₹" + maturity.toFixed(2);
}

// Currency Converter
async function convertCurrency() {
    let amount = parseFloat(document.getElementById('currencyAmount').value);
    let to = document.getElementById('currencyTo').value;
    let res = await fetch(`https://api.exchangerate-api.com/v4/latest/INR`);
    let data = await res.json();
    let rate = data.rates[to];
    document.getElementById('currencyResult').innerText = `${amount} INR = ${(amount * rate).toFixed(2)} ${to}`;
}

// Load Finance Companies
let companies = ["HDFC Bank", "ICICI Bank", "SBI", "Axis Bank", "Kotak Mahindra Bank", "Bajaj Finserv", "Muthoot Finance", "LIC", "PNB", "IDFC First Bank"];
let list = document.getElementById('companyList');
companies.forEach(c => {
    let li = document.createElement('li');
    li.innerText = c;
    list.appendChild(li);
});