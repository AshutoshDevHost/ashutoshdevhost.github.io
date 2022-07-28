const redirectBtn = document.getElementById("chain-pay-redirect")

const redirectLink = "https://chainpay-poc.000webhostapp.com/"

redirectBtn.addEventListener("click", () => {

    window.location.href = redirectLink

})
