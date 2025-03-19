document.addEventListener("DOMContentLoaded",()=>{
    let cart =JSON.parse(localStorage.getItem("cart"))||[];

    document.querySelectorAll(".add-to-cart").forEach(button =>{
        button.addEventListener("click",()=>{
            let product={
                id: button.getAttribute("data-id"),
                name: button.getAttribute("data-name"),
                price: parseFloat(button.getAttribute("data-price"))
            };

            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Item added to cart!");
        });
    });

    let cartItems = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");

    if (cartItems){
        cartItems.innerHTML =cart.map(item =>`<div>${item.name}-$${item.price}</div>`).join("");

        let total = cart.reduce((sum, item)=> sum + item.price, 0);
        totalPrice.innerText = total.toFixed(10);
    }
});