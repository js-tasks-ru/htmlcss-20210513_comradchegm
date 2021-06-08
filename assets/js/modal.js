(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');
    const backdrop = document.getElementById('backdrop');

    if (!close || !modalOpen || !modal || !backdrop) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        backdrop.style.display = 'none';
        modal.style.display = 'none';
        document.body.style.overflow = 'initial';
    });
})();