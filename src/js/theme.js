const changeBtn = document.getElementById('change-theme-btn');


function setDarkTheme() {
    document.body.classList.add('dark');
    changeBtn.textContent = '🌞';
    localStorage.setItem('theme', 'dark');
}


function setLightTheme() {
    document.body.classList.remove('dark');
    changeBtn.textContent = '🌜';
    localStorage.setItem('theme', 'light');
}


changeBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
});


if (localStorage.getItem('theme') === 'dark') {
    setDarkTheme();
}