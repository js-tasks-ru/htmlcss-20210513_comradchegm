const changer = document.querySelectorAll('.theme-toggler .toggler__native');
const html = document.documentElement;

for (let i = 0; i < changer.length; i++) {
    changer[i].addEventListener('change', function (event) {
        html.toggleAttribute('data-theme-dark');
    });
}
