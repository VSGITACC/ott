var slideIndex = 1;
showDivs(slideIndex);
var slidIndex = 1;
showDiv(slidIndex);
var sliIndex = 1;
showDi(sliIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
function plusDivs(n) {
    showDiv(slidIndex += n);
  }

  function plusDivs(n) {
    showDi(sliIndex += n);
  }

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function showDiv(n) {
    var i;
    var x = document.getElementsByClassName("mSlides");
    if (n > x.length) {slidIndex = 1}
    if (n < 1) {slidIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slidIndex-1].style.display = "block";  
  }

  function showDi(n) {
    var i;
    var x = document.getElementsByClassName("mylides");
    if (n > x.length) {sliIndex = 1}
    if (n < 1) {sliIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[sliIndex-1].style.display = "block";  
  }