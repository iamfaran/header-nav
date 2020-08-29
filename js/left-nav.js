const sideNav = document.querySelector(".side-nav-overlay");
// document.querySelector(".sm-links").style.display = "none";
document.querySelector(".navbtn").addEventListener("click", () => {
  document.querySelector(".side-nav-overlay").classList.add("push-nav");
  // document.querySelector(".main").classList.add("push-content");

  setTimeout(() => {
    document.body.style.overflowY = "hidden";
  }, 500);

  setTimeout(() => {
    document.querySelector(".sm-links").style.display = "block";
  }, 300);
  document.querySelector(".header").classList.add("header-away-animate");
});

document.querySelector(".closebtn").addEventListener("click", () => {
  document.querySelector(".side-nav-overlay").classList.remove("push-nav");

  // document.querySelector(".main").classList.remove("push-content");
  document.querySelector(".sm-links").style.display = "none";
  // setTimeout(() => {
  //   document.body.style.overflowY = "scroll";
  // }, 500);

  document.querySelector(".header").classList.remove("header-away-animate");
});
