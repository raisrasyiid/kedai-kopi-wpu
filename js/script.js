// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger diklik
document.querySelector("#hamburger-menu");
onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan menunya
const humberger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
