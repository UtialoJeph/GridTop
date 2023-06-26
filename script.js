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
}
function openForm_inq() {
  document.getElementById("myForm-inquiry").style.display = "block";
}
function openForm_hello() {
  document.getElementById("myForm-hello").style.display = "block";
}

function closeForm() {
  document.body.style.overflow = "visible";
  document.getElementById("myForm").style.display = "none";
  document.body.style.opacity='1';

 }
 function closeForm_inq() {
  document.body.style.overflow = "visible";
  document.getElementById("myForm-inquiry").style.display = "none";
  document.body.style.opacity='1';

 }
 function closeForm_hello() {
  document.body.style.overflow = "visible";
  document.getElementById("myForm-hello").style.display = "none";
  document.body.style.opacity='1';

 }

    
function halt_bodyscroll(){
document.body.style.overflow = "hidden";
document.body.style.opacity='1';
}
function opacity_interchange(){ 
 document.getElementById('myForm').style.opacity='1';
  }
  
