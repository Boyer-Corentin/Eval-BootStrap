var img = [
    "/Annexes/background.jpg",
    "/Annexes/agence.jpg"
]

var node = document.getElementsByClassName(".background")

var i = 0;
setInterval(function(){
    node.backgroundImage = "url("+img[i] +")";
    i = i+1;
    if (i== img.length) {
        i=0;
        }
}, 1000)