function toggleCard() {
    const card = document.getElementById('giftCard');
    const button = document.querySelector('.open-card-button');
  
    if (card.classList.contains('open')) {
      card.classList.remove('open');
      button.textContent = 'Open Card';
    } else {
      card.classList.add('open');
      button.textContent = 'Close Card';
    }
  }
  const correctPin = "2410"; // Set your PIN here

  function pressKey(num) {
    const pinInput = document.getElementById("pinInput");
    if (pinInput.value.length < 4) {
      pinInput.value += num;
    }
  }
  
  function clearPin() {
    document.getElementById("pinInput").value = "";
    document.getElementById("feedback").textContent = ""; // Clear feedback
  }
  
  function submitPin() {
    const pinInput = document.getElementById("pinInput").value;
    const feedback = document.getElementById("feedback");
  
    if (pinInput === correctPin) {
      feedback.textContent = "✅ Correct! Unlocking...";
      feedback.style.color = "#b6ffb6";
      setTimeout(() => {
        window.location.href = "list.html"; // Navigate to the options page
      }, 1000);
    } else {
      feedback.textContent = "❌ Incorrect PIN. Try again.";
      feedback.style.color = "#ffb6b6";
    }
  }
    
  document.addEventListener("DOMContentLoaded", () => {
    const startDate = new Date("2003-11-24T00:00:00");
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
  
    function updateCountdown() {
      const now = new Date();
      const diff = now - startDate;
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
  
      daysEl.textContent = days;
      hoursEl.textContent = hours;
      minutesEl.textContent = minutes;
    }
  
    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute
  });

  function showPhoto() {
    const photo = document.getElementById("hiddenPhoto");
    photo.style.display = "block";
  }