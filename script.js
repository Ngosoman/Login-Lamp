function handleLogin(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      

      if (username && password) {
        alert(`Welcome, ${username}! Login successful.`);
        window.location.hash = '#turnoff';
        document.querySelector('form').reset();
      }
    }