
let getCart = localStorage.getItem("productInCard");
let allProducts = document.querySelector(".products");
let celerALL = document.getElementById("celerALL");
let container = document.querySelector(".container");
let emptyMessage = document.getElementById("emptyMessage");
let purshase = document.getElementById("purshase");
let showPrice = document.getElementById("showPrice");
let totailPrice = document.getElementById("totailPrice");

if (getCart) {
    let item = JSON.parse(getCart);
    drowProduct(item);
} else {
    drowProduct([]);
}


function drowProduct(product) {
    if (product.length === 0) {
        allProducts.innerHTML = "";
        showEmptyMessage();
    } else {
        let y = product.map((item, index) => {
            return `
                <div class="product-item">
                    <img src="${item.imgUrl}">
                    <div class="product-desc">
                        <h2>${item.title}</h2>
                        <h2>${item.price}</h2>
                        <p>${item.Brand}</p>
                        <span>Color: ${item.color}</span>
                    </div>
                    <div class="product-action">
                        <button class="remov_To_Card" onclick="deleteBtn(${index})">Remove From Card</button>
                    </div>
                </div>
            `;
        });
        allProducts.innerHTML = y.join(" ");
        hideEmptyMessage();
    }
    updateClearAllVisibility(product);
    updatePurshaseVisibility(product)
    updateShowPriceVisibility(product)
}


function deleteBtn(index) {
    let get = localStorage.getItem("productInCard");
    let toJSON = JSON.parse(get);
    toJSON.splice(index, 1);
    localStorage.setItem("productInCard", JSON.stringify(toJSON));
    drowProduct(toJSON);
    showDeleteMessage();
}

function removeAll() {
    celerALL.addEventListener("click", () => {
        localStorage.removeItem("productInCard")
        totailPrice.style.display="none"
        drowProduct([]);
    });
}
removeAll();


function showEmptyMessage() {
    emptyMessage.style.display = "block";
    setTimeout(() => {
        emptyMessage.style.opacity = "1";
    }, 50);
}


function hideEmptyMessage() {
    emptyMessage.style.opacity = "0";
    setTimeout(() => {
        emptyMessage.style.display = "none";
    }, 1000);
}


function updateClearAllVisibility(productList) {
    if (productList.length === 0) {
        celerALL.style.display = "none";
    } else {
        celerALL.style.display = "block";
    }
}


function updatePurshaseVisibility(productList) {
    if (productList.length === 0) {
        purshase.style.display = "none";
    } else {
        purshase.style.display = "block";
    }
}


function updateShowPriceVisibility(productList) {
    if (productList.length === 0) {
        showPrice.style.display = "none";
    } else {
        showPrice.style.display = "block";
    }
}
 

showPrice.addEventListener("click",()=>{
    let get = localStorage.getItem("productInCard")
    let toJSON = JSON.parse(get) || [];

    let total = toJSON.reduce((acc , item)=>{
      let price = parseFloat(item.price) 
      return acc + (isNaN(price)? 0 : price)
    },0)
    totailPrice.innerHTML = `Total Price: ${total}$`
    if(total >= 4000 ){
    Swal.fire({
    title: "you got a 30% discount 💸",
    icon: "success",
    draggable: true
});           
}
})

showPrice.addEventListener("dblclick",()=>{
    totailPrice.innerHTML =  ""
})

purshase.addEventListener("click",()=>{
    Swal.fire({
    title: "The operation was completed successfully",
    icon: "success",
    draggable: true
});
})

function showDeleteMessage() {
    let msg = document.getElementById("deleteMessage");
    msg.style.display = "block";

    setTimeout(() => {
        msg.style.opacity = "1";
    }, 50);

    setTimeout(() => {
        msg.style.opacity = "0";
        setTimeout(() => {
            msg.style.display = "none";
        }, 400);
    }, 1500);
}