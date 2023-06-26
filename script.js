function cutTopheader(){
    document.getElementById("upperheader").style.display="none";
}

window.addEventListener('scroll', reveal);

function reveal(){
     var reveals=document.querySelectorAll('.reveal');
     for(var i=0;i < reveals.length;i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
     }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.body.style.overflow = "hidden";
}
function openForm_inq() {
  document.getElementById("myForm-inquiry").style.display = "block";
  document.body.style.overflow = "hidden";
}
function openForm_hello() {
  document.getElementById("myForm-hello").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeForm() {
  document.body.style.overflow = "visible";
  document.getElementById("myForm").style.display = "none";
  }
 function closeForm_inq() {
  document.body.style.overflow = "visible";
  document.getElementById("myForm-inquiry").style.display = "none";
   }
 function closeForm_hello() {
  document.body.style.overflow = "visible";
  document.getElementById("myForm-hello").style.display = "none";
   }
