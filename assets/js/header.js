document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("dynamic-nav");
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user) {
      // Navigation for logged-in users
      nav.innerHTML = `
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="investments.html" class="active">Investments</a></li>
          <li><a href="certification.html">Certifications</a></li>
          <li><a href="profile.html">Profile</a></li>
          <li><button id="logout-btn" class="logout-btn">Logout</button></li>
        </ul>
      `;
  
      document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "account.html";
      });
    } else {
      // Navigation for logged-out users
      nav.innerHTML = `
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="investments.html">Investments</a></li>
          <li><a href="certification.html">Certifications</a></li>
          <li><a href="account.html">Login</a></li>
        </ul>
      `;
    }
  });
  