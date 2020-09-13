const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    window.navigator.vibrate(200);
});