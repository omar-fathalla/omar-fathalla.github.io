// Toggle Switch Functionality
document.getElementById('toggleSwitch').addEventListener('change', function() {
    var statusText = document.getElementById('status');
    if (this.checked) {
        statusText.textContent = 'Status: ON';
    } else {
        statusText.textContent = 'Status: OFF';
    }
});

// Date Form Validation
document.getElementById("dateForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Get start and end date values
    let startDate = new Date(document.getElementById("startDate").value);
    let endDate = new Date(document.getElementById("endDate").value);
    let output = document.getElementById("output");

    // Check if the end date is after the start date
    if (endDate > startDate) {
        output.textContent = "Start Date: " + startDate.toISOString().split('T')[0] + 
                            " | End Date: " + endDate.toISOString().split('T')[0];
        output.classList.remove("text-danger");
        output.classList.add("text-dark");
    } else {
        output.textContent = "End date must be after the start date.";
        output.classList.add("text-danger");
    }
});

// Search Filter for Events
function filterEvents() {
    // Get the search input value
    const searchValue = document.getElementById('searchInput').value.toLowerCase();

    // Get all the event cards
    const eventCards = document.querySelectorAll('#eventList .card');

    // Loop through all event cards and filter based on the text inside the <a> element with .btn.btn-primary
    eventCards.forEach(function(card) {
        const buttonText = card.querySelector('.btn-primary').textContent.toLowerCase();
        
        // Show the card if the button text matches the search value, otherwise hide it
        if (buttonText.includes(searchValue)) {
            card.parentElement.style.display = '';
        } else {
            card.parentElement.style.display = 'none';
        }
    });
}

// Select All/Deselect All Checkboxes
document.getElementById('selectAllBtn').addEventListener('click', function() {
    var checkboxes = document.querySelectorAll('#branchForm .form-check-input');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = true;
    });
});

document.getElementById('deselectAllBtn').addEventListener('click', function() {
    var checkboxes = document.querySelectorAll('#branchForm .form-check-input');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
});

// Login Form Validation
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Both fields are required!");
        return false;
    }

    alert("Login successful!");

    // Redirect to index.html after successful login
    window.location.href = "Construction.html";
    
    return false; // Prevent form submission (useful if you're handling everything with JS)
}

// Dark Mode/Light Mode Toggle
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

// DateTime Picker Initialization
$(function () {
    $('#datetimepicker1').datetimepicker({
        format: 'L LT'
    });
});
