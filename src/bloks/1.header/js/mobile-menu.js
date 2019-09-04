let headerMobileButton = document.getElementsByClassName(
    "mobile-nav-button-container"
  )[0],
  mainLogo = document.getElementsByClassName("main-logo")[0],
  mainNavList = document.getElementsByClassName("main-nav__list")[0];

headerMobileButton.addEventListener("click", function() {
  if (mainLogo.className == "main-logo") {
    mainLogo.className = "visually-hidden";
    mainNavList.style.visibility = "visible";
  } else {
    mainLogo.className = "main-logo";
    mainNavList.style.visibility = "hidden";
  }
});
