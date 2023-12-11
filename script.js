
document.addEventListener('DOMContentLoaded', function() {
    // Language Button & Dropdown functionality
    document.addEventListener('DOMContentLoaded', function() {
        const languageButton = document.getElementById('languageButton');
        const languageDropdown = document.getElementById('languageDropdown');
    
        languageButton.addEventListener('click', function() {
            languageDropdown.style.display = languageDropdown.style.display === 'none' ? 'block' : 'none';
        });
    
        document.querySelectorAll('#languageDropdown a').forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const selectedLang = this.getAttribute('data-lang');
                languageButton.innerText = this.innerText.split(' ')[0];
                languageDropdown.style.display = 'none';
                // Implement changeLanguage function or other actions here
            });
        });
    });
    

    // Header blur on scroll functionality
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-blurred');
        } else {
            header.classList.remove('header-blurred');
        }
    });



    
    //testiiiiiiiiiiii header-topis

    window.onscroll = function() { 
      var headerTop = document.querySelector('.header-top');
    
      // Check if the page has been scrolled down
      if (window.pageYOffset > 0) {
        // If it has, add the 'hidden' class to header-top
        headerTop.classList.add('hidden');
      } else {
        // If it hasn't, remove the 'hidden' class
        headerTop.classList.remove('hidden');
      }
    };
    
    
    


 // Menu Button toggling
 const menuBtn = document.querySelector('.menu-btn');
 const dropdownContent = document.querySelector('.dropdown-content');

 menuBtn.addEventListener('click', () => {
     dropdownContent.style.display = (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') ? 'block' : 'none';
 });
});


// index1.html ------------------
function changeMainImage(imagePath) {
    const outgoingImage = document.querySelector('.main-concret-image.outgoing');
    const incomingImage = document.querySelector('.main-concret-image.incoming');

    // If there's no outgoing image (first load), set the first image as outgoing
    if (!outgoingImage) {
        const firstImage = document.querySelector('.main-concret-image');
        firstImage.classList.add('outgoing');
        return;
    }

    // Set the source for the incoming image and start the transition
    incomingImage.src = imagePath;

    setTimeout(() => {
        outgoingImage.style.transform = 'translateX(-100%)';
        incomingImage.style.transform = 'translateX(0)';
    }, 10);

    // Swap classes after the transition is complete
    outgoingImage.addEventListener('transitionend', () => {
        outgoingImage.classList.remove('outgoing');
        outgoingImage.classList.add('incoming');

        incomingImage.classList.remove('incoming');
        incomingImage.classList.add('outgoing');
    });

    // Update the active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.getAttribute('src') === imagePath) {
            thumb.classList.add('active');
        }
    });
}

function changeMainImage(imgSrc) {
    var mainImage = document.querySelector('.main-concret-image.active');
    if (mainImage) {
        mainImage.src = imgSrc;
    }
}










function toggleContent() {
    const content = document.getElementById('expandableContent');
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}






const storageElements = document.querySelectorAll('.storage');
const currentPriceElement = document.querySelector('.current-price');

storageElements.forEach(storage => {
    storage.addEventListener('click', function() {
        // Remove 'active' class from all storage options
        storageElements.forEach(el => el.classList.remove('active'));

        // Add 'active' class to the clicked storage option
        this.classList.add('active');

        // Update the current price based on the 'data-price' attribute of the clicked storage option
        currentPriceElement.textContent = this.getAttribute('data-price') + '₾';
    });
});


//view more
document.addEventListener("DOMContentLoaded", function() {
  var viewMoreBtn = document.querySelector('.view-more-btn');
  var additionalContent = document.querySelector('.additional-content');

  viewMoreBtn.addEventListener('click', function() {
    if (additionalContent.style.maxHeight) {
      additionalContent.style.maxHeight = null;
      viewMoreBtn.textContent = "მეტის ნახვა"; // Text when content is hidden
    } else {
      additionalContent.style.maxHeight = additionalContent.scrollHeight + "px";
      viewMoreBtn.textContent = "ნაკლების ნახვა"; // Text when content is shown
    }
  });
});
  




//სქროლლგვერდზე
function scroll(amount) {
    // Select the element with the id 'carousel'.
    var carousel = document.getElementById('carousel');
    
    // Check if the carousel element exists to avoid null reference errors.
    if(carousel) {
      // Get the current scroll position of the carousel element.
      var currentScroll = carousel.scrollTop;
    
      // Update the scroll position of the carousel element.
      // If you want to scroll up, the 'amount' should be negative,
      // and if you want to scroll down, the 'amount' should be positive.
      carousel.scrollTop = currentScroll + amount;
    } else {
      // If the element does not exist, log an error message to the console.
      console.error("The element with the id 'carousel' was not found.");
    }
  }



  //slideshow  in main 
  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


















window.addEventListener('resize', function() {
  var element = document.querySelector('.brends');
  if (window.innerWidth <= 900 && element) {
      element.par
      entNode.removeChild(element);
  }
});

























// This function is called when a menu item is hovered over.
function showInfo(event) {
  // 'event.target' is the hovered element.
  // 'info' is a hypothetical class you would add to the information you want to show.
  var info = event.target.querySelector('.info');
  if (info) {
    info.style.display = 'block';
  }
}

// This function is called when the mouse leaves a menu item.
function hideInfo(event) {
  var info = event.target.querySelector('.info');
  if (info) {
    info.style.display = 'none';
  }
}

// Attach the event listeners to each menu item.
var menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('mouseover', showInfo);
  menuItem.addEventListener('mouseout', hideInfo);
});
