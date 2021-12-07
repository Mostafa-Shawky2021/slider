let images, imagesCount, imageIndex, nextImage, prevImage, playSlide, stopSlide, slideInterval, time;


images       = Array.from( document.getElementsByClassName("images"));
imagesCount  = images.length - 1;
imageIndex   = 0;
nextImage    = document.getElementById("next");
prevImage    = document.getElementById("prev");
playSlide    = document.getElementById("play");
stopSlide    = document.getElementById("stop");
time         = 3000;


//User click next
nextImage.addEventListener('click',next);

// User click prev
prevImage.addEventListener("click",prev);

//Automatic play
playSlide.addEventListener("click",autoPlay);

// Stop play
stopSlide.addEventListener("click",stopPlay);

// Function
function next()
{   
    
    // Check if image index greater than image count
    imageIndex = ( imageIndex < imagesCount  ) ? ++imageIndex : 0 ;

    // Remove Class active from all images 
    removeActive(); 
      
    //Add class Active to Active image
    addActive();

}

function prev()
{
    
    imageIndex = ( imageIndex > 0  ) ? --imageIndex : imagesCount  ;
 
    // Remove Class active from all images 
    removeActive(); 
      
    //Add class Active to Active image 
    addActive(); 
      
    console.log(images[imageIndex ])
}


function addActive()
{
    //Get Current Index image 

    images[imageIndex].classList.add("active");

}
function removeActive()
{
 
    
    images.forEach(element => {
        
        element.classList.remove("active");
    });
    
}


function autoPlay()
{
    slideInterval = setInterval( next, time );
}

function stopPlay()
{
    clearInterval( slideInterval );
}