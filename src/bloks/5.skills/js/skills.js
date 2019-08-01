var block = document.getElementById("box-block");
var skillsPhotoBlock = document.getElementById("skills-photo-block");
var boxButton = document.getElementById("box-block-button");
boxButton.addEventListener("click", CloseButton);


function CloseButton() {
    block.className = "visually-hidden";
    skillsPhotoBlock.style.marginBottom = '0px';
    skillsPhotoBlock.style.marginRight = '170px';
}
