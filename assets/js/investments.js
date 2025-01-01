document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.invest-btn');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Investment details are being prepared. Stay tuned!');
      });
    });
  });
  