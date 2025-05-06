const headers = document.querySelectorAll('.paper-head');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;

    if (body && body.classList.contains('paper-body')) {
      // Check if it's already expanded
      if (body.style.maxHeight) {
        // Collapse
        body.style.maxHeight = null;
      } else {
        // Expand: set maxHeight to the scrollHeight (actual height of content)
        body.style.maxHeight = body.scrollHeight + "px";
      }
    }
  });
});

window.addEventListener('resize', () => {
  document.querySelectorAll('.paper-body').forEach(body => {
    if (body.style.maxHeight) {
      // Still open — update to new content height
      body.style.maxHeight = body.scrollHeight + "px";
    }
  });
});