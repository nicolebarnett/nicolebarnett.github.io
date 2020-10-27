el = document.getElementById("simple-ss");
el.onclick = links;

function links() {
  left = parseInt(getComputedStyle(el).getPropertyValue("background-position").split(" ", 1));
  /* DEFINE POSITIONS FOR CLICK EVENTS */
  if (left >= -400) {
  
    // First until about half way scrolled over
    alert("first");
    //window.open("https://www.google.com");
  
  } else if (left >= -1200) {
  
    // Second when half way scrolled either side
    alert("second");
    //window.open("https://www.google.com");
    
  } else if (left >= -1600) {
    
    // Third when over half way into banner
    alert("third");
    //window.open("https://www.google.com");
    
  } 
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
