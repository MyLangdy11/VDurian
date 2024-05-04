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
