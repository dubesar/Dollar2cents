function getval() {
    text_val = parseInt(document.getElementById("input1").value)

    let currencyValue = (text_val*100).toFixed(1);

    console.log(currencyValue)

    document.getElementById("new_text").innerHTML = `The value in cents is: ${currencyValue}`;
}