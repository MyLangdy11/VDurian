document.addEventListener('DOMContentLoaded', () => {
  let scrollingContainer = document.querySelector('.scrolling-container');
  let isMouseDown = false;
  let startX = 0;
  let scrollLeft = 0;

  scrollingContainer.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.clientX - scrollingContainer.offsetLeft;
    scrollLeft = scrollingContainer.scrollLeft;
  });

  scrollingContainer.addEventListener('mouseleave', () => {
    isMouseDown = false;
  });

  scrollingContainer.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  scrollingContainer.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.clientX - scrollingContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scroll speed
    scrollingContainer.scrollLeft = scrollLeft - walk;
  });

  // Bottom menu

  // Add an active class to the clicked menu item
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      menuItems.forEach(item => {
        item.classList.remove('active');
        item.querySelector('i').classList.remove('active');
      });
      item.classList.add('active');
      item.querySelector('i').classList.add('active');
    });
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
    menu.style.bottom = '-60px';
  }

  prevScrollPos = currentScrollPos;
});