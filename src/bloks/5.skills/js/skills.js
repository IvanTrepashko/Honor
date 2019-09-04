let block = document.getElementById("box-block"),
 skillsPhotoBlock = document.getElementById("skills-photo-block"),
 boxButton = document.getElementById("box-block-button");
boxButton.addEventListener("click", function(){
    block.className = "visually-hidden";
    skillsPhotoBlock.style.marginBottom = '0px';
    skillsPhotoBlock.style.marginRight = '170px';
});
