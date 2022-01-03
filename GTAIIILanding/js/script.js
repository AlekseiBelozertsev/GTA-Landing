var modal = document.getElementById("staticBackdrop");

var img = document.getElementsByClassName("modal-img");

var modalImg = document.getElementById("img01");

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function(){
        modalImg.src = img[i].src
    })
}





