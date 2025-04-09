// ------------------------------------------
// CODE FOR IMAGE SLIDER

// Get all images in the slider
const images = document.querySelectorAll('.slider-image');
let currentImageIndex = 0;

// Function to display the next image
function showNextImage() {
  // Remove the active class from the current image
  images[currentImageIndex].classList.remove('active');
  
  // Increment the index to show the next image
  currentImageIndex = (currentImageIndex + 1) % images.length;
  
  // Add the active class to the new current image
  images[currentImageIndex].classList.add('active');
}

// Initialize the slider: show the first image
images[currentImageIndex].classList.add('active');

// Set an interval to change the image every 3 seconds
setInterval(showNextImage, 3000);
    
    
    
// ------------------------------------------
// CODE FOR WINDOWS+ANDROID GAME DOWNLOAD (AFTER 1st JAN)

document.getElementById('windows-button').addEventListener('click', () => {
  window.location.href = 'Game/Jet Striker v1.0.zip';
});
document.getElementById('windows-button2').addEventListener('click', () => {
  window.location.href = 'Game/Jet Striker v1.0.zip';
});

document.getElementById('android-button').addEventListener('click', () => {
  window.location.href = 'Game/Jet Striker.apk';
});
document.getElementById('android-button2').addEventListener('click', () => {
  window.location.href = 'Game/Jet Striker.apk';
});
      
      
      
// ------------------------------------------
// CODE FOR ANDROID GAME POPUP (AFTER 1st JAN)

// document.getElementById('android-button').addEventListener('click', () => {
//   document.getElementById('popup').style.display = 'block';
// });

// document.getElementById('close-popup').addEventListener('click', () => {
//   document.getElementById('popup').style.display = 'none';
// });


// document.getElementById('android-button2').addEventListener('click', () => {
//   document.getElementById('popup2').style.display = 'block';
// });

// document.getElementById('close-popup2').addEventListener('click', () => {
//   document.getElementById('popup2').style.display = 'none';
// });



// ------------------------------------------
// CODE FOR HIDDEN CONTAINER (AFTER 1st JAN)

document.getElementById('js-nav-download-btn').addEventListener('click', () => {
  document.getElementById('js-hidden-container').style.display = 'block';
});

document.getElementById('js-cancel-btn').addEventListener('click', () => {
  document.getElementById('js-hidden-container').style.display = 'none';
});


document.getElementById('js-main-download-btn').addEventListener('click', () => {
  document.getElementById('js-hidden-container').style.display = 'block';
});

document.getElementById('js-cancel-btn').addEventListener('click', () => {
  document.getElementById('js-hidden-container').style.display = 'none';
});


document.getElementById('js-jet-icon').addEventListener('click', () => {
  document.getElementById('js-hidden-container').style.display = 'block';
});

document.getElementById('js-cancel-btn').addEventListener('click', () => {
  document.getElementById('js-hidden-container').style.display = 'none';
});


document.getElementById('js-jet-text').addEventListener('click', () => {
  document.getElementById('js-hidden-container').style.display = 'block';
});

document.getElementById('js-cancel-btn').addEventListener('click', () => {
    document.getElementById('js-hidden-container').style.display = 'none';
});



// Hidden Container 2

document.getElementById('js-nav-download-btn2').addEventListener('click', () => {
  document.getElementById('js-hidden-container2').style.display = 'block';
});

document.getElementById('js-hidden-cont-cancel').addEventListener('click', () => {
  document.getElementById('js-hidden-container2').style.display = 'none';
});


document.getElementById('js-main-download-btn2').addEventListener('click', () => {
  document.getElementById('js-hidden-container2').style.display = 'block';
});

document.getElementById('js-hidden-cont-cancel').addEventListener('click', () => {
  document.getElementById('js-hidden-container2').style.display = 'none';
});


document.getElementById('js-jet-icon2').addEventListener('click', () => {
  document.getElementById('js-hidden-container2').style.display = 'block';
});

document.getElementById('js-hidden-cont-cancel').addEventListener('click', () => {
  document.getElementById('js-hidden-container2').style.display = 'none';
});


document.getElementById('js-jet-text2').addEventListener('click', () => {
  document.getElementById('js-hidden-container2').style.display = 'block';
});

document.getElementById('js-hidden-cont-cancel').addEventListener('click', () => {
    document.getElementById('js-hidden-container2').style.display = 'none';
});
                          
                          
                          
// ------------------------------------------
// CODE FOR TEAM CONTAINER

document.getElementById('js-footer-image').addEventListener('click', () => {
  document.getElementById('js-footer-team').style.display = 'block';
});

document.getElementById('js-footer-team-cancel').addEventListener('click', () => {
  document.getElementById('js-footer-team').style.display = 'none';
});
