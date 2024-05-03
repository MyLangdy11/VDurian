// Active menu item when click menu top
 // Get all the menu items
 const menuItems = document.querySelectorAll('header nav ul li a');
    
 // Add click event listeners to each menu item
 menuItems.forEach(item => {
     item.addEventListener('click', function() {
         // Remove the active class from all menu items
         menuItems.forEach(item => {
             item.classList.remove('active');
         });

         // Add the active class to the clicked menu item
         this.classList.add('active');
     });
 });
//  End of menu item when click show color on buttom
