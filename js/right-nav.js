const rightSideNav = document.querySelector(".right-side-nav");
const searchBtn = document.querySelector(".search-btn");
const closeBtn = document.querySelector(".closebtn2");
closeBtn.style.display = "none";
searchBtn.addEventListener("click", () => {
  rightSideNav.style.width = "100%";
  setTimeout(() => {
    closeBtn.style.display = "block";
  }, 500);
  document.querySelector(".header").classList.add("header-away-animate");
});

closeBtn.addEventListener("click", () => {
  rightSideNav.style.width = "0";
  closeBtn.style.display = "none";
  document.querySelector(".header").classList.remove("header-away-animate");
});
