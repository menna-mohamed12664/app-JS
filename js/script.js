let allProducts = document.querySelector(".products")
let product = [
    {
        id: 1,
        title: "Eyeglasses",
        color: "Transparent",
        Brand: "Ray-Ban",
        price:"1000$",
        imgUrl:"photo/fd634058-3e71-4490-9a94-f25b168babfd.jpeg",
    },
    {
        id: 2,
        title: "Eyeglasses",
        color: "Hazel",
        Brand: "Prada",
        price:"2000$",
        imgUrl:"photo/♡.jpeg",
    },
    {
        id: 3,
        title: "Eyeglasses",
        color: "gold",
        Brand: "Gucci",
        price:"4000$",
        imgUrl:"photo/Decoração geométrica Moldura Óculos anti-luz azul.jpeg",
    },
    {
        id: 4,
        title: "Eyeglasses",
        color: "Brown",
        Brand: "Dolce & Gabbana",
        price:"3000$",
        imgUrl:"photo/download (9).jpeg",
    },
    {
        id: 5,
        title: "Eyeglasses",
        color: "Brown",
        Brand: "Tom Ford",
        price:"7000$",
        imgUrl:"photo/download (10).jpeg",
    },
    {
        id: 6,
        title: "Eyeglasses",
        color: "Transparent",
        Brand: "Fendi",
        price:"10000$",
        imgUrl:"photo/eba5ac7e-978e-4403-9934-b499fa9451b8.jpeg",
    },
    {
        id: 7,
        title: "Eyeglasses",
        color: "Black",
        Brand: "Burberry",
        price:"2000$",
        imgUrl:"photo/Emory Scott.jpeg",
    },
    {
        id: 8,
        title: "Eyeglasses",
        color: "Pink",
        Brand: "Armani",
        price:"5000$",
        imgUrl:"photo/fd634058-3e71-4490-9a94-f25b168babfd.jpeg",
    },
    {
        id: 9,
        title: "Eyeglasses",
        color: "Bage",
        Brand: "Dior",
        price:"5000$",
        imgUrl:"photo/ꨄ︎Glassesꨄ︎.jpeg",
    },
    {
        id: 10,
        title: "Eyeglasses",
        color: "Tiger",
        Brand: "Cartier",
        price:"6000$",
        imgUrl:"photo/Warby Parker _ We’ve Got Your Eyes Covered.jpeg",
    },
    {
        id: 11,
        title: "Eyeglasses",
        color: "White",
        Brand: "Maui Jim",
        price:"3000$",
        imgUrl:"photo/download (8).jpeg",
    },
    {
        id: 12,
        title: "Eyeglasses",
        color: "Bage",
        Brand: "Off-White",
        price:"9000$",
        imgUrl:"photo/ꨄ︎Glassesꨄ︎.jpeg",
    },
    {
        id: 13,
        title: "Eyeglasses",
        color: "Gold",
        Brand: "Miu Miu",
        price:"3000$",
        imgUrl:"photo/glass22.jpeg",
    },
    {
        id: 14,
        title: "Eyeglasses",
        color: "Black",
        Brand: "Celine",
        price:"2300$",
        imgUrl:"photo/Anti-blue Light Eyeglasses.jpeg",
    },
    {
        id: 15,
        title: "Eyeglasses",
        color: "Black",
        Brand: "Balmain",
        price:"6700$",
        imgUrl:"photo/Timeless style for all 🛍️ Unisex Everyday….jpeg",
    },
    {
        id: 16,
        title: "ًWristwatch",
        color: "Brown",
        Brand: "Rolex",
        price:"3200$",
        imgUrl:"photo/5993eb88-eefc-4a30-99ff-7d09a46a0048.jpeg",
    },
    {
        id: 17,
        title: "ًWristwatch",
        color: "Black",
        Brand: "Patek Philippe",
        price:"1700$",
        imgUrl:"photo/Chic Round_Square Face Wristwatch for Women.jpeg",
    },
    {
        id: 18,
        title: "ًWristwatch",
        color: "Brown",
        Brand: "chanel",
        price:"5549$",
        imgUrl:"photo/Classic Brown Oval Genuine Leather Wristwatch - WatchwithSun-Dainty & Chic Watches for Women.jpeg",
    },
    {
        id: 19,
        title: "ًWristwatch",
        color: "Bage",
        Brand: "Audemars Piguet",
        price:"6543$",
        imgUrl:"photo/White Face Leather Square Face Watch _ WatchwithSun.jpeg",
    },
    {
        id: 20,
        title: "ًWristwatch",
        color: "Black",
        Brand: "Omega",
        price:"9000$",
        imgUrl:"photo/シ︎.jpeg",
    },
    {
        id: 21,
        title: "ًWristwatch",
        color: "Gold",
        Brand: "Cartier",
        price:"8000$",
        imgUrl:"photo/Timeless style for all 🛍️ Unisex Everyday….jpeg",
    },
    {
        id: 22,
        title: "ًWristwatch",
        color: "Gold",
        Brand: "TAG Heuer",
        price:"6000$",
        imgUrl:"photo/glass5.jpeg",
    },
    {
        id: 23,
        title: "ًWristwatch",
        color: "Brown",
        Brand: "IWC",
        price:"5000$",
        imgUrl:"photo/Introducing the BellaTime Elegant Essence Women's….jpeg",
    },
    {
        id: 24,
        title: "ًWristwatch",
        color: "Green",
        Brand: "Fossil",
        price:"7000$",
        imgUrl:"photo/itrm1.jpeg",
    },
    {
        id: 25,
        title: "ًWristwatch",
        color: "Pink",
        Brand: "Casio",
        price:"6500$",
        imgUrl:"photo/glass4.jpeg",
    },
    {
        id: 26,
        title: "ًWristwatch",
        color: "Black",
        Brand: "Seiko",
        price:"4300$",
        imgUrl:"photo/glass3.jpeg",
    },
    {
        id: 27,
        title: "ًWristwatch",
        color: "Orange",
        Brand: "Swatch",
        price:"2200$",
        imgUrl:"photo/Chic Watches for Women.jpeg",
    },
        {
        id: 18,
        title: "ًWristwatch",
        color: "Brown",
        Brand: "chanel",
        price:"9800$",
        imgUrl:"photo/Classic Brown Oval Genuine Leather Wristwatch - WatchwithSun-Dainty & Chic Watches for Women.jpeg",
    },
    {
        id: 19,
        title: "ًWristwatch",
        color: "Bage",
        Brand: "Audemars Piguet",
        price:"3200$",
        imgUrl:"photo/White Face Leather Square Face Watch _ WatchwithSun.jpeg",
    },
    {
        id: 20,
        title: "ًWristwatch",
        color: "Black",
        Brand: "Omega",
        price:"9800$",
        imgUrl:"photo/シ︎.jpeg",
    },
]
function drowProducts(){
   let y =  product.map((item)=>{
        return `
                <div class="product-item  price="${item.price}"">
                    <img src="${item.imgUrl}" alt="">
                    <div class="product-desc">
                        <h2>${item.title}</h2>
                        <p>${item.Brand}</p>
                        <p>${item.price}</p>
                        <span>Color: ${item.color}</span>
                    </div><!--  product-desc -->
                    <div class="product-action">
                        <button class="Add_To_Card" onclick= "addToCard(${item.id})">Add To Card</button>
                        <i class="fa-solid fa-heart"></i>
                    </div><!--product-action -->
                </div><!-- product-item -->
        `
   })
allProducts.innerHTML = y.join(" ");
}
 drowProducts()
 
/////////////////////////////////////////////

let totailPrice = document.querySelector("#totailPrice p")
let showPrice = document.getElementById("showPrice")
let badge = document.querySelector(".badge")
let viewProductsDive = document.querySelector(".veiwProduct div")
let addedItem = localStorage.getItem("productInCard")? JSON.parse(  localStorage.getItem("productInCard")) : [];
let searchInput = document.getElementById("search");

function productSearch(productList){
   let y =  productList.map((item)=>{
        return `
                <div class="product-item  price="${item.price}"">
                    <img src="${item.imgUrl}" alt="">
                    <div class="product-desc">
                        <h2>${item.title}</h2>
                        <p>${item.Brand}</p>
                        <p>${item.price}</p>
                        <span>Color: ${item.color}</span>
                    </div><!--  product-desc -->
                    <div class="product-action">
                        <button class="Add_To_Card" onclick= "addToCard(${item.id})">Add To Card</button>
                        <i class="fa-solid fa-heart"></i>
                    </div><!--product-action -->
                </div><!-- product-item -->
        `
   })
allProducts.innerHTML = y.join(" ");
}
productSearch(product);
searchInput.addEventListener("input", function () {
  let keyword = searchInput.value.trim().toLowerCase();
  let filtered = product.filter(item =>
    item.title.toLowerCase().includes(keyword) ||
    item.Brand.toLowerCase().includes(keyword) ||
    item.color.toLowerCase().includes(keyword)
  );
  productSearch(filtered);
});


if(addedItem){
    addedItem.map((item)=>{
        viewProductsDive.innerHTML += `<p>${item.Brand}</p>`
    })
    badge.style.display="block"
    badge.innerHTML += addedItem.length
}

function addToCard(id){
    let chooseItem = product.find((item)=> item.id === id)
    viewProductsDive.innerHTML += `<p>${chooseItem.Brand}</p>`

    addedItem = [...addedItem , chooseItem]
    localStorage.setItem("productInCard" , JSON.stringify(addedItem))

    let viewProductsDiveP = document.querySelectorAll(".veiwProduct div p")
    badge.innerHTML = viewProductsDiveP.length
    veiwProduct.style.display="block"
    badge.style.display="block"
}


let veiwProduct = document.querySelector(".veiwProduct")
document.querySelector(".cart i").addEventListener("click",()=>{
    if
    (veiwProduct.innerHTML !== ""){
        if(veiwProduct.style.display == "block"){
            veiwProduct.style.display="none"
        }else{
            veiwProduct.style.display="block"
        }
    }
 

})
