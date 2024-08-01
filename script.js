document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.links li');

    links.forEach(link => {
        link.style.opacity = 0;
        link.style.transform = 'translateY(20px)';
    });

    setTimeout(() => {
        links.forEach((link, index) => {
            setTimeout(() => {
                link.style.transition = 'opacity 0.5s, transform 0.5s';
                link.style.opacity = 1;
                link.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 500);
});
