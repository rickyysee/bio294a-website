// Select all elements with the class 'paper-head'
const headers = document.querySelectorAll('.paper-head');

// Loop through each header
headers.forEach(header => {
  // Add a click event listener to each one
  header.addEventListener('click', () => {
    // Get the next sibling element (which should be the .paper-body)
    const body = header.nextElementSibling;

    // Check if the next sibling has the class 'paper-body'
    if (body && body.classList.contains('paper-body')) {
      // Toggle display style between 'flex' and 'none'
      body.style.display = body.style.display === 'flex' ? 'none' : 'flex';
    }
  });
});