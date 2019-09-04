let popupForm = document.getElementById("popup-form"),
  popupGetButton = document.querySelectorAll(".popup-get-button"),
  popupCloseCross = document.getElementById("x-cross"),
  popup = document.querySelector(".popup-container");

for (let i = 0; i < popupGetButton.length; i++) {
  popupGetButton.item(i).addEventListener("click", PopupToggleClass);
}
popupCloseCross.addEventListener("click", PopupToggleClass);

popup.addEventListener("click", function() {
  let popupChecked = document.querySelector("input:checked"),
    popupChecked1 = document.getElementById("popup-list-1"),
    popupChecked2 = document.getElementById("popup-list-2"),
    popupList1Item = document.getElementById("popup-list1-item"),
    popupList2Item = document.getElementById("popup-list2-item");

  setTimeout(function() {
    if (popupChecked == popupChecked1) {
      popupList1Item.className = "popup";
      popupList2Item.className = "visually-hidden";
    }

    if (popupChecked == popupChecked2) {
      popupList1Item.className = "visually-hidden";
      popupList2Item.className = "mail-container";
    }
  }, 100);
});

function PopupToggleClass() {
  if (popupForm.className == "popup-form") {
    popupForm.className = "visually-hidden";
  } else {
    popupForm.className = "popup-form";
  }
}
