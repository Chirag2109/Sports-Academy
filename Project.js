window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) 
  {
    navbar.classList.add("sticky")
    document.getElementById("navbar").style.zIndex=1;
    document.getElementById('actual-popup').style.zIndex=0;
  }
  else 
  {
    navbar.classList.remove("sticky");
    document.getElementById("navbar").style.zIndex=0;
  }
}

window.onbeforeunload = function() 
{
  var text = "";
  return text;
}

function vf()
{
  document.getElementById('popup1').style.display='inline-block';
  window.location.href='#top';
}

function show()
{
  document.getElementById('actual-popup').style.display='grid';
  window.location.href='#top';
}