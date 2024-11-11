function applyTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode', 'default-mode');
  
    if (theme === 'light-mode') {
      document.body.classList.add('light-mode');
    }
    else if (theme === 'dark-mode') {
      document.body.classList.add('dark-mode')
    }
    else if (theme === 'default') {
      document.body.classList.add('default-mode');
    }
  
    localStorage.setItem('theme', theme);
  }
  
  const savedTheme = localStorage.getItem('theme');
  
  const themeToApply = savedTheme || 'default';
  applyTheme(themeToApply);
  
  document.getElementById(themeToApply).checked = true;
  
  document.querySelectorAll('input[name="theme"]').forEach((radio) => {
    radio.addEventListener('change', (event) => {
      applyTheme(event.target.value);
    });
  });