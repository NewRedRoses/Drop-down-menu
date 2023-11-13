function dropDownMenu(clickedBtnID, menuToDisplay) {
  /* 
    When user clicks btn -> display the contents of the menu item
    */
  // Eventually i want to use the argument instead
  const btn = document.getElementById("drop-down-btn");
  btn.addEventListener("click", () => {
    console.log("clicked btn");
  });
}
dropDownMenu();
