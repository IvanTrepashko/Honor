var popupForm = document.getElementById("popup-form");
var popupGetButton = document.querySelectorAll(".popup-get-button");
var popupCloseCross = document.getElementById("x-cross");
var popup = document.querySelector(".popup-container");

for (let i = 0; i < popupGetButton.length; i++) {
  popupGetButton.item(i).addEventListener("click", PopupToggleClass);
}
popupCloseCross.addEventListener("click", PopupToggleClass);
popup.addEventListener("click", PopupChoiceCheck);

function PopupToggleClass() {

  if (popupForm.className == "popup-form") {
    popupForm.className = "visually-hidden";
  }
  else {
    popupForm.className = "popup-form";
  }
}

function PopupChoiceCheck() {
  let popupChecked = document.querySelector('input:checked');
  let popupChecked1 = document.getElementById("popup-list-1");
  let popupChecked2 = document.getElementById("popup-list-2");
  let popupList1Item = document.getElementById("popup-list1-item");
  let popupList2Item = document.getElementById("popup-list2-item");

  setTimeout(function () {
    if (popupChecked == popupChecked1) {
      popupList1Item.className = "popup";
      popupList2Item.className = "visually-hidden"
    }

    if (popupChecked == popupChecked2) {
      popupList1Item.className = "visually-hidden";
      popupList2Item.className = "mail-container"
    }

  }, 100);


}