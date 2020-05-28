function openr(){
var mySidebar = document.getElementById("mySidebar");
mySidebar.classList.add("show");
document.getElementById("myOverlay").style.display = "block";

}

function closer(){
	var emySidebar = document.getElementById("emySidebar");
mySidebar.classList.remove("show");

emySidebar.classList.remove("show");
document.getElementById("myOverlay").style.display = "none";

}


function closer1(){
	emySidebar.classList.remove("show");
	mySidebar.classList.add("show");
	document.getElementById("myOverlay").style.display = "block";





}

function ecOpen(){
	
emySidebar.classList.add("show");
document.getElementById("myOverlay").style.display = "block";
}


function sach(){
	document.getElementById("eSach").style.display="block";
	
}

function closeButton(){
	document.getElementById("eSach").style.display="none";
	
}

function mydrip(){
	document.getElementById("drp-content").style.display="block";
	
}



 
        $(function(){
           

            $('.e-grid').slick({
                dots: false,
                  infinite:false,
                  arrows: false,
                  variableWidth:true,
                  slidesToShow: 3.8,
                  slidesToScroll: 2,
				  
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                          arrows: false,
						  variableWidth:true,
                        slidesToShow: 3.8,
                        slidesToScroll: 2,
                        
                        dots: false
						
						
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                          arrows: false,
                        slidesToShow: 2.1,
                        slidesToScroll: 1.5,
						variableWidth:false
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                          arrows: false,
                        slidesToShow: 1.1,
                        slidesToScroll: 1,
						variableWidth:false
						
                      }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                  ]
            }); 

           		
        });
        
		
   
