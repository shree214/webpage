

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("add-member");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


    //when the user clicks on the button

    let sidebar = document.getElementById("mySidebar");
    let profilebtn = document.getElementById("img-sidebar");
    let main = document.getElementById("main");
    let cross = document.getElementsByClassName("closebtn")[0];

    profilebtn.onclick = function() {
      sidebar.style.width = "250px";
      main.style.marginRight = "250px";
      
    }
    
    cross.onclick = function() {
      sidebar.style.width = "0px";
      main.style.marginRight = "0px";
      
    }
        
   

  



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
 


function totalPara(){
    let x= document.getElementById("arrow-down");
    let y=document.getElementById("lorem-para");
    let z=document.getElementById("grad");


    if (x.classList.contains('rotate')){
        x.classList.remove('rotate');
        y.classList.remove('fit-content');
        z.style.zIndex="20";
    }
    else{
        x.classList.add('rotate');
        y.classList.add('fit-content');
        z.style.zIndex = "-1";

    }
}


let container = document.getElementById("grp-pack");
btns = container.getElementsByClassName("btns");
console.log(btns);
for (var i=0; i<btns.length; i++){
  
  btns[i].addEventListener("click", function(){
   let current = document.getElementsByClassName("active");

   let currentlink = this.querySelector('a');
   let currentbutton = this.querySelector('button');
   let otherlink = container.querySelector('a');
   let otherbutton = container.querySelector('button');

   //console.log(current);
   console.log(currentlink);
   console.log(otherlink);
  
   current[0].className = current[0].className.replace("active", "");
   this.className += " active";
   otherlink.classList.add("link-na");
   otherlink.classList.remove("link-active");
   otherbutton.classList.remove("button-active");
   otherbutton.classList.add("button-na");
   
   currentlink.classList.add("link-active");
   currentlink.classList.remove("link-na");
   currentbutton.classList.add("button-active");
   currentbutton.classList.remove("button-na");



   


  });  
}





function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  
    if (event.target == modal) {
      console.log("hell");
      modal.style.display = "none";
    }
  
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}