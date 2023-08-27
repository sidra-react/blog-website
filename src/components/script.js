document.addEventListener('DOMContentLoaded', function() {
    const showNewPageButton = document.getElementById('showNewPageButton');
    const previousPage = document.getElementById('previousPage');
  
    showNewPageButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the link from navigating immediately
  
      // Clear the content of the previous page
      previousPage.innerHTML = '';
  
      // Redirect to /op
      window.location.href = '/op';
    });
  });