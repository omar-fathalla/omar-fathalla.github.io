document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.querySelector('[data-bs-theme-value="Dark"]');
  const lightModeButton = document.querySelector('[data-bs-theme-value="Light"]');
  
  // Function to enable dark mode
  const enableDarkMode = () => {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
  };

  // Function to enable light mode
  const enableLightMode = () => {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
  };

  // Event listeners for buttons
  darkModeButton.addEventListener("click", enableDarkMode);
  lightModeButton.addEventListener("click", enableLightMode);
});
$(function () {
  $('#datetimepicker1').datetimepicker({
      format: 'L LT'
  });
});
