const mobNav = document.getElementsByClassName("mob_nav");

function navFunction() {
        
  if( mobNav.style.display === 'block'){
      mobNav.style.display = 'none';
  } else {
      mobNav.style.display = "block";
  }

}

navFunction();