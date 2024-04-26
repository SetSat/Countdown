function countdown(value, callback) {
    const countdownElement = document.querySelector('.countdown');
    countdownElement.textContent = value;
  
    setTimeout(function() {
      if (value === 1) {
        callback();
      } else {
        countdown(value - 1, callback);
      }
    }, 1000);
  }
  
  function displayIndependenceDay() {
    const countdownElement = document.querySelector('.countdown');
    countdownElement.textContent = 'Happy Independence Day';
  }
  
  countdown(10, displayIndependenceDay);