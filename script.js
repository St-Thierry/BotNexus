document.querySelectorAll('.scrollable-sections .section').forEach((section, index) => {
    section.addEventListener('scroll', () => {
        updateIndicator(index);
    });
});

function updateIndicator(index) {
    const indicator = document.getElementById('indicator');
    indicator.style.background = index === 0 ? '#4A90E2' : (index === 1 ? '#4A90E2' : '#4A90E2');
}