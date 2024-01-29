let neg = document.getElementById("negatives")
let pos = document.getElementById("positives")

document.getElementById("submit").addEventListener("click", test)
function test(){
    if (neg.value === "" || pos.value === ""){
        alert('Please fill out all text areas')
    } else {
    document.write('Thank you for completing this form')
    alert('This form has been succesfully submitted')
    }
}