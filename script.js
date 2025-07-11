// js/script.js

// Utility to simulate search results
function showResults(containerId, message) {
  const container = document.getElementById(containerId);
  container.innerHTML = `<p>${message}</p>`;
  setTimeout(() => container.innerHTML = '', 5000); // Auto clear after 5 seconds
}

// Handle Flight Form Submission
document.getElementById('flight-form').addEventListener('submit', function (e) {
  e.preventDefault();
  showResults('flight-results', 'Showing flight results based on your search...');
});

// Handle Hotel Form Submission
document.getElementById('hotel-form').addEventListener('submit', function (e) {
  e.preventDefault();
  showResults('hotel-results', 'Showing hotel options for your selected location...');
});

// Handle Tour Form Submission
document.getElementById('tour-form').addEventListener('submit', function (e) {
  e.preventDefault();
  showResults('tour-results', 'Here are some exciting tours based on your interests...');
});

// Handle Payment Form Submission
document.getElementById('payment-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Payment successful! Thank you for booking with us.');
  this.reset();
});

// Optional: Smooth scroll to sections
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });

  });
});
