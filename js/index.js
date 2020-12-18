console.log("Your index.js file is loaded correctly!");
// load the entire document
$(document).ready();
// create event listener when Contact is clicked 
$("#contactMe").on("click",function(){
    $("#contactInfo").slideToggle("slow");
});

/* maybe an email popup instead of same information sliding up in the footer. Both options did not work as I thought it would
$("#contactMeUp").on("click",function(){   //option A
    console.log("You clicked on Contact in Navigation");
    alert("contact info display slide up");
    $("#contactInfo").slideUp("slow");
});
$("#contactMeUp").click(function(){  // option B
    $("#contactMeUp").css("color", "white").slideUp(2000).slideDown(2000);
});*/
// trying to display a modal with about me information when I click the About in Nav bar
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var aboutlink = document.getElementById("about");
var modalBackground1 = document.getElementsByClassName("modalBackground")[0];
var openBoolean = false;

window.onclick = function(event) // does not work tried jQuery as well
{ 
    if(event.target == modal && openBoolean)  //close if not modal
    { modal.style.display="none";
        openBoolean = false;
 //   event.target.style.display = "none";
 console.log("looks like I made it too click anywhere modal");
    }
    else {
        console.log("am i firing?");
    }
} 
aboutlink.onclick = function(){
    openBoolean = true;
    //  modalBackground1.style.display = "block";
      modal.style.display = "block";
     // alert("looks like I made it to the modal"); // works
  }
  
  
  span.onclick = function(){
      modal.style.display="none"; //works
      openBoolean = false;
   //   modalBackground1.style.display = "none";
  }
  /*
  modalBackground1.onclick = function(){
      modal.style.display="none"; //works
      modalBackground1.style.display = "none";
  }*/ 

/*$("#skills").onclick(function(){

});*/

//hover state using mouse enter and mouse leave   -- option 1
/*$(".resumeButton").mouseenter(function()
{
    console.log("You are mouseover this butoon"); // works
    $(this).css("background-color","blue");
});

$(".resumeButton").mouseleave(function(){
    console.log("You moused away from this button"); //works
    $(this).css("background-color","black");
});
// on click
$(".resumeButton").on("click",function(){
    $(this).css("background-color","green"); //color is not changing
    alert('I just clicked on resume download');
});
*/
//hover state using condensed hover function  -- option 2
/*
$(".resumeButton").hover(function(){
        $(this).css("background-color","blue");
        $(".resumeButton").on("click",function(){
            $(this).css("background-color","green"); //color is not changing
            alert('I just clicked on resume download'); // have to click 3 times to close this alert
        });
},
    function(){
        $(this).css("background-color","black");
});
*/

// Option 3 - final version. This works the way I want the button to
$(".resumeButton").hover(function(){
    $(this).css("background-color","blue");
},
function(){
    $(this).css("background-color","black");
});

$(".resumeButton").on("click",function(){
   /* $(this).css("background-color","green"); //color is not changing*/
    alert('I just clicked on resume download');
});