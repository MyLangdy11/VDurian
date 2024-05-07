// scroll items
document.addEventListener('DOMContentLoaded', () => {
  let scrollingContainer = document.querySelector('.scrolling-container');
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  scrollingContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - scrollingContainer.offsetLeft;
    scrollLeft = scrollingContainer.scrollLeft;
  });

  scrollingContainer.addEventListener('mouseleave', () => {
    isDragging = false;
  });

  scrollingContainer.addEventListener('mouseup', () => {
    isDragging = false;
  });

  scrollingContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollingContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scroll speed
    scrollingContainer.scrollLeft = scrollLeft - walk;
  });

  scrollingContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - scrollingContainer.offsetLeft;
    scrollLeft = scrollingContainer.scrollLeft;
  });

  scrollingContainer.addEventListener('touchend', () => {
    isDragging = false;
  });

  scrollingContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollingContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scroll speed
    scrollingContainer.scrollLeft = scrollLeft - walk;
  });
});

// hide or show
let prevScrollPos = window.pageYOffset;
const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    menu.style.bottom = '0';
  } else {
    menu.style.bottom = '-65px';
  }

  prevScrollPos = currentScrollPos;
});
// Header show or hide
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").classList.add("show");
  } else {
    document.getElementById("header").classList.remove("show");
  }
  prevScrollpos = currentScrollPos;
};

// Image memory show pop
    // Get all item links
    var itemLinks = document.getElementsByClassName("item");
    // Get the popup container
    var popupContainer = document.getElementsByClassName("popup-container")[0];
    // Get the popup image
    var popupImage = popupContainer.getElementsByClassName("popup-image")[0];
    // Get the close button
    var closeButton = popupContainer.getElementsByClassName("close-button")[0];
    // Get the zoom buttons
    var zoomInButton = document.getElementById("zoom-in");
    var zoomOutButton = document.getElementById("zoom-out");

    // Attach click event listeners to each item
    for (var i = 0; i < itemLinks.length; i++) {
      itemLinks[i].addEventListener("click", function (e) {
        e.preventDefault();
        var imageUrl = this.getAttribute("href");
        popupImage.setAttribute("src", imageUrl);
        popupContainer.style.display = "flex";
      });
    }

    // Attach click event listener to the close button
    closeButton.addEventListener("click", function () {
      popupContainer.style.display = "none";
    });

    // Zoom functionality
    var zoomLevel = 1;

    zoomInButton.addEventListener("click", function () {
      zoomLevel += 0.1;
      applyZoom();
    });

    zoomOutButton.addEventListener("click", function () {
      zoomLevel -= 0.1;
      applyZoom();
    });

    function applyZoom() {
      popupImage.style.transform = "scale(" + zoomLevel + ")";
    }


    