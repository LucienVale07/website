document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    this.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
});
