// Sidebar toggle functionality
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
let open = false;

hamburger.addEventListener("click", () => {
  if (!open) {
    sidebar.style.right = "0";
    // Animate hamburger into "X"
    hamburger.classList.add("open");
    open = true;
  } else {
    sidebar.style.right = "-250px";
    hamburger.classList.remove("open");
    open = false;
  }
});
