document.getElementById("start-certification").addEventListener("click", () => {
  const confirmStart = confirm(
    "The certification exam includes multiple-choice questions on investments, corporate finance, and other financial topics. Are you ready to begin?"
  );

  if (confirmStart) {
    alert("Redirecting to the certification exam...");
    window.location.href = "certificationexam.html"; // Updated to correct exam page
  } else {
    alert("Take your time and start when you feel ready.");
  }
});

// Log topics covered in the console
const topics = [
  "Basics of Investing",
  "Time Value of Money (TVM)",
  "Discounted Cash Flow (DCF)",
  "Corporate Finance Fundamentals",
  "Risk Management and Portfolio Theory",
];
console.log("Certification Topics:", topics);