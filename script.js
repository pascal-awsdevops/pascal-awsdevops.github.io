// Animate skill bars on page load
window.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });

  // Show badge title on hover
  const badges = document.querySelectorAll('.badge-grid img');
  badges.forEach(badge => {
    badge.addEventListener('mouseenter', () => {
      const title = badge.getAttribute('alt');
      badge.setAttribute('title', title);
    });
  });
});
