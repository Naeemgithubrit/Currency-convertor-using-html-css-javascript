const currency = {
    USD:1,
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280,
}

document.getElementById(`convertor-form`).addEventListener(`submit`,function(e){
    e.preventDefault();

    let fromCurrrency = document.getElementById("from").value
    let toCurrrency = document.getElementById("to").value
    let amount = document.getElementById("amount").value

    let fromAmount = currency[fromCurrrency]
    let toAmount = currency[toCurrrency]
    let baseAmount = amount / fromAmount
    let convertedAmount = baseAmount * toAmount

    document.getElementById(`result`).textContent = `convertedAmount:${Math.round(convertedAmount)}`;
})