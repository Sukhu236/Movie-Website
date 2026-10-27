document.querySelectorAll('.movie-list-wrapper').forEach(wrapper => {
    const list = wrapper.querySelector('.movie-list');
    const arrow = wrapper.querySelector('.arrow');

    if (list && arrow) {
        // Force horizontal scroll layout
        list.style.display = 'flex';
        list.style.overflowX = 'auto';
        list.style.scrollBehavior = 'smooth';
        list.style.gap = '15px';
        list.style.scrollbarWidth = 'none';
        list.style.msOverflowStyle = 'none';

        // Prevent items from shrinking (this is the key fix)
        list.querySelectorAll('.movie-list-items').forEach(item => {
            item.style.flexShrink = '0';
            item.style.minWidth = '200px'; // adjust to your card width
        });

        arrow.addEventListener('click', () => {
            const atEnd = list.scrollLeft + list.clientWidth >= list.scrollWidth - 5;
            if (atEnd) {
                list.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                list.scrollBy({ left: list.clientWidth * 0.8, behavior: 'smooth' });
            }
        });

        list.addEventListener('scroll', () => {
            const atEnd = list.scrollLeft + list.clientWidth >= list.scrollWidth - 5;
            arrow.style.opacity = atEnd ? '0.3' : '1';
        });
    }
});   