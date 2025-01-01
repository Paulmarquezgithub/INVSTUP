// Registration form submission handler
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');
  
    registrationForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      // Collect form data
      const formData = {
        fullName: document.getElementById('fullName').value.trim(),
        email: document.getElementById('email').value.trim(),
        password: document.getElementById('password').value,
      };
  
      // Simple client-side validation
      if (!formData.fullName || !formData.email || !formData.password) {
        displayMessage('All fields are required.', 'error');
        return;
      }
  
      try {
        // Send data to the server (mock example)
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          displayMessage('Registration successful! Welcome!', 'success');
          registrationForm.reset();
        } else {
          displayMessage(result.message || 'Registration failed. Please try again.', 'error');
        }
      } catch (error) {
        console.error('Error:', error);
        displayMessage('An error occurred. Please try again.', 'error');
      }
    });
  
    // Helper function to display messages
    function displayMessage(message, type) {
      messageDiv.textContent = message;
      messageDiv.className = `message ${type}`;
    }
  });
  