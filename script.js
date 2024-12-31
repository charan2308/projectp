let currentIndex = 0;
const pages = document.querySelectorAll('.page');

function showPage(index) {
  pages.forEach((page, i) => {
    page.style.display = i === index ? 'flex' : 'none';
  });
}

function navigatePages() {
  currentIndex++;
  if (currentIndex >= pages.length) {
    currentIndex = 0; // Reset to the first page after the last page
  }
  showPage(currentIndex);
}

// Auto-progress through the pages every 5 seconds
setInterval(navigatePages, 5000);

// Initial page load
showPage(currentIndex);
