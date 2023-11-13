function dropDownMenuToggle(clickedBtnID, menuToDisplayClass) {
  /* 
    When user clicks btn -> display the contents of the menu item
    */
  const btn = document.getElementById(clickedBtnID);
  btn.addEventListener("click", () => {
    const menu = document.querySelector("." + menuToDisplayClass);
    menu.classList.toggle("visible");
  });
}
dropDownMenuToggle("drop-down-btn", "menu-container");