document.querySelectorAll(".hidden-txt").forEach(button => {
  button.addEventListener("click", () => {
    alert("Product added to cart👍");
 
  });
});
document.querySelectorAll(".view_btn").forEach(button => {
  button.addEventListener("click", () => {
    window.open("view-product.html", "_blank");
  });
});
document.querySelectorAll(".box").forEach(button => {
  button.addEventListener("click", () => {
    window.open("view-product.html", "_blank");
  });
});
document.querySelectorAll(".icons i").forEach(icon => {
  icon.addEventListener("click", () => {
      if (icon.classList.contains("fa-heart")) {
        icon.classList.add("active");   
       icon.classList.toggle("fa-solid");
       alert("product added to favourite ❤️ ")
      }
  });
});
/////////////////View More
// Sport Section
const viewSport = document.getElementById("view");
const sport2 = document.getElementById("sport2");

viewSport.addEventListener("click", () => {
create_style(sport2,viewSport,viewButtons)
});

// Baby Section
const viewBaby = document.getElementById("view1");
const baby2 = document.getElementById("baby2");

viewBaby.addEventListener("click", () => {
create_style(baby2,viewBaby,viewButtons)
});

// Accessories Section
const viewAccessories = document.getElementById("view2");
const Accessories2 = document.getElementById("Accessories2");

viewAccessories.addEventListener("click", () => {
create_style(Accessories2,viewAccessories,viewButtons)
});

// Men Section
const viewMen = document.getElementById("view3");
const men2 = document.getElementById("men2");

viewMen.addEventListener("click", () => {
create_style(men2,viewMen,viewButtons)
});

// Women Section
const viewWomen = document.getElementById("view4");
const woman2 = document.getElementById("woman2");

viewWomen.addEventListener("click", () => {
create_style(woman2,viewWomen,viewButtons)
});

// Airbuds Section
const viewAirbuds = document.getElementById("view5");
const airbuds = document.getElementById("airbuds");

viewAirbuds.addEventListener("click", () => {
create_style(airbuds,viewAirbuds,viewButtons)
});

// Phones Section
const viewPhones = document.getElementById("view6");
const phones = document.getElementById("phones");

viewPhones.addEventListener("click", () => {
create_style(phones,viewPhones,viewButtons)
});
// view less
const viewButtons = document.querySelectorAll(".view-less"); 
viewButtons.forEach(button => {
  button.addEventListener("click", () => {
    hide_content(phones, button, viewPhones);
     hide_content(airbuds, button,viewAirbuds );
       hide_content(woman2,button,viewWomen);
         hide_content(men2,button,viewMen);
           hide_content(Accessories2,button,viewAccessories);
             hide_content(baby2,button,viewBaby);
               hide_content(sport2,button,viewSport);
  });
});


////////////// styling 
 function create_style( hidden_section,view_more_btn,view_less_btn){
      hidden_section.style.display="grid";
    view_more_btn.style.display = "none";
    view_less_btn.style.display="flex";
 }
 function hide_content(hidden_section,view_less_btn,view_more_btn){
hidden_section.style.display = "none";
view_less_btn.style.display = "none";
view_more_btn.style.display="flex";
 }




