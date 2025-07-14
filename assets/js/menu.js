document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.add('active');
});

document.getElementById('close-sidebar').addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('active');
});