document.getElementById("checkout-form").addEventListener("submit",(event)=>{
    event.preventDefault();
    alert("Payment successful! Thank you for your order.");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
});