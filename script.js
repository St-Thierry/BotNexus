document.querySelectorAll('.scrollable-sections .section').forEach((section, index) => {
    section.addEventListener('scroll', () => {
        updateIndicator(index);
    });
});

function updateIndicator(index) {
    const indicator = document.getElementById('indicator');
    indicator.style.background = index === 0 ? '#4A90E2' : (index === 1 ? '#4A90E2' : '#4A90E2');
}

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        document.querySelectorAll('.case-study-item').forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});