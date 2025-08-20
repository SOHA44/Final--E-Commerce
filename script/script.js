
let storedName = localStorage.getItem("username");
let UserName = storedName ? storedName + "🎀" : "Sign Up";
let signUP = document.querySelectorAll(".links .signUP");
signUP[0].innerHTML = UserName;
signUP[1].innerHTML = UserName;

// ---------------variables -------------------
let Cart_counter = 0;
var n=document.querySelector(".header .icons .shopping mark");
var cart=document.querySelector(".cart")
var cart_parent=document.querySelector(".cart_parent")

var Flash_Sales = document.querySelector(".Flash_Sales"); 
var ViewButton = document.querySelector("#viewMore");



var products_detail = [
  {
    discount: "-20% ",
    img: "images/pic1.jpg",
    price: "80",
    D_price: "100",
    title: "Men's Running Shoes"
  },
  {
    discount: "-15% ",
    img: "images/pic2.jpg",
    price: "170",
    D_price: "200",
    title: "Wireless Headphones"
  },
  {
    discount: "-30% ",
    img: "images/pic3.jpg",
    price: "140",
    D_price: "200",
    title: "Smart Watch Series 5"
  },
  {
    discount: "-10% ",
    img: "images/pic4.jpg",
    price: "45",
    D_price: "50",
    title: "Leather Backpack"
  }
];
var products_detail2 = [
  {
    discount: "-25% ",
    img: "images/pic5.jpg",
    price: "750",
    D_price: "1000",
    title: "15.6'' Gaming Laptop"
  },
  {
    discount: "-40% ",
    img: "images/pic6.jpg",
    price: "30",
    D_price: "50",
    title: "Polarized Sunglasses"
  },
  {
    discount: "-35% ",
    img: "images/pic7.jpg",
    price: "65",
    D_price: "100",
    title: "Winter Denim Jacket"
  },
  {
    discount: "-50% ",
    img: "images/pic8.jpg",
    price: "499",
    D_price: "999",
    title: "Smartphone Pro Max"
  }
  ,
  {
    discount:"-40%",
    img:"images/pic9.png",
    price:"120",
    D_price:"160",
    title:"HAVIT HV-G92 Gamepad"
  },{
    discount:"-35%",
    img:"images/pic10.png",
    price:"960",
    D_price:"1160",
    title:"AK-900 Wired Keyboard"
  },{
    discount:"-30%",
    img:"images/pic11.png",
    price:"370",
    D_price:"400",
    title:"IPS LCD Gaming Monitor"
  },{
    discount:"-25%",
    img:"images/pic12.png",
    price:"375",
    D_price:"400",
    title:"S-Series Comfort Chair"
  }
]
function renderProducts(products , Append=false) {
   let p = products
    .map((item) => {
      return `
        <div class="Flash_Sales_parent">
          <div class="Flash_Sales_child" >
              <img src=${item.img}  alt="#">
              <div class="Flash_Sales_overlay">
                  <p>${item.discount}</p>
                  <div>
                      <i class="fa-regular fa-heart"></i> <br>
                      <i class="fa-regular fa-eye"></i>
                  </div>
                  <button class="addToCart"  >Add To Cart</button>
              </div>
          </div>
          <div class="Flash_Sales_child2">
              <h3 class="product_title">${item.title}</h3>
              $<span class="product_price">${item.price}</span>&nbsp; <span><s>$${item.D_price}</s></span>
              <div>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                  <span>(90)</span>
              </div>
          </div>
        </div>
      `;
    })
    .join(""); 

  if(Append==true)
    Flash_Sales.innerHTML += p;
  else 
    Flash_Sales.innerHTML = p;

  //Updated addToCart buttons after clicked on
  UpdatedAddToCart();
  HEART();
}

function draw(){
   renderProducts(products_detail,false);
   ViewButton.onclick=function(){
      if(ViewButton.textContent=== "View All Products"){  
        ViewButton.innerHTML = "View Less"
        renderProducts(products_detail2,true);
      }
      else{
        ViewButton.innerHTML = "View All Products"
        renderProducts(products_detail,false);
      }
   }
}
draw();
function HEART()
{document.querySelectorAll(".fa-heart").forEach(icon => {
  icon.addEventListener("click", () => {
    
        icon.classList.add("active");   
       icon.classList.toggle("fa-solid");
       icon.style.color="red";
       window.setTimeout(()=>{

         alert("product added to favourite ❤️ ")
       },500)
      
      
  });
});}



function UpdatedAddToCart(){
  var addButton=document.querySelectorAll(".addToCart")
  addButton.forEach((item)=>{
    item.addEventListener("click",e=>{
      let product_parent=e.target.closest(".Flash_Sales_parent")
      addToCart(product_parent);
    })
  })
}
UpdatedAddToCart(); 

// ////////////////////////////shopping icon////////////////////////////////
let shopping_icon=document.querySelector("#shopping_icon"); 
shopping_icon.onclick=function(){
  cart.style.display="block";
}

var deleted_cart=document.querySelector("#DCart"); 
deleted_cart.onclick=function(){
  cart.style.display="none";
}

function addToCart(item){
  let imgURL=item.querySelector("img").src;
  let title=item.querySelector(".product_title").textContent;
  let price=item.querySelector(".product_price").textContent;
   const cartItems = cart_parent.querySelectorAll(".cart_info p")
   for(let i of cartItems){
    if(title === i.textContent)
    {
     
      return ;
    }
   }
   n.innerHTML=++Cart_counter;
  cart_parent.innerHTML +=`
    <div class="cart_child">
      <img src=${imgURL} alt="">
      <div class="cart_info">
        <p>${title}</p>
        $<span class="cart_price">${price}</span>
        <div>
          <span class="minus">-</span>
          <span class="counter">1</span>
          <span class="bonus">+</span>
        </div>
      </div>
      <i class="fa-solid fa-trash"></i>
    </div><br>  
   `  ;
   updatePrice();
}
cart_parent.addEventListener("click", (e) => {
  // DELETE
  if (e.target.tagName === "I") {
    n.innerHTML= --Cart_counter;
    e.target.closest(".cart_child").remove();
    updatePrice();
  }

  // PLUS
  if (e.target.classList.contains("bonus")) {
    n.innerHTML= ++Cart_counter;
    let counter = e.target.parentElement.querySelector(".counter");
    let i = +(counter.textContent);
    counter.textContent = i + 1;
    updatePrice();
  }

  if (e.target.classList.contains("minus")) {
  
    let counter = e.target.parentElement.querySelector(".counter");
    let i = +(counter.textContent);
    if (i > 1) {
      counter.textContent = i - 1; 
       n.innerHTML= --Cart_counter; 
    }
    updatePrice();
  }
});

function updatePrice(){
  let total=0;
  let All_children = document.querySelectorAll(".cart_parent .cart_child")
  let total_price = document.querySelector(".Total_price .total_number")
  All_children.forEach((item)=>{
    let quantity=item.querySelector(".counter")
    let price =item.querySelector(".cart_price")
    total += (+quantity.textContent * +price.textContent)
  })
  total_price.textContent = `${total}`;
  console.log(total);
}
updatePrice();
