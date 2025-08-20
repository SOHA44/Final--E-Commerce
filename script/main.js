document.querySelectorAll(".has-submenu").forEach(item => {
  item.addEventListener("click", function() {
    let submenu = this.querySelector(".submenu");
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
  });
});
document.querySelector(".banner a").addEventListener("click", (e) => {
  e.preventDefault();
  window.open("view-product.html", "_blank");
});
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    window.open("view-product.html", "_blank");
  });
});