document.querySelectorAll('.werk__pin').forEach(function (pin) {
    pin.addEventListener('click', function () {
        pin.closest('.werk__medien').classList.toggle('is-pinned');
    });
});