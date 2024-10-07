const toggleButton = document.getElementById('dark_mode');
const body = document.body;

toggleButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
});