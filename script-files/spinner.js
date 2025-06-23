
function onAllImagesLoaded(callback) {
     const images = document.querySelectorAll('img');
     let loadedCount = 0;
     let total = images.length;

     if (total === 0) {
          callback(); // No images, call immediately
          return;
     }

     images.forEach(img => {
          if (img.complete && img.naturalWidth !== 0) {
               loadedCount++;
          } else {
               img.addEventListener('load', check);
               img.addEventListener('error', check);
          }
     });

     function check() {
          loadedCount++;
          if (loadedCount === total) {
               callback();
          }
     }

     // In case all images were already loaded
     if (loadedCount === total) {
          callback();
     }
}

function loadSpinner() {
     onAllImagesLoaded(() => {
          document.getElementById('image-loader').style.display = 'none'
     });
};


document.fonts.load('1em "Font Awesome 6 Free"').then(() => {
     console.log('Font Awesome has loaded');
     loadSpinner()
     document.body.style.visibility = 'visible'; // or trigger your UI now
});


