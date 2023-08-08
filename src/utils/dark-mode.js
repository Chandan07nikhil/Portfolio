
const darkMode = () => {
    const themeToggleBtn = document.querySelectorAll
        ('#theme-toggle');

    //state variable
    const theme = localStorage.getItem('theme');

    //on mount i.e some thing that happen when page finishes its initial load
    theme && document.body.classList.add(theme);

    //Handler
    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        }
        else {
            localStorage.removeItem('theme');
            document.body.removeAttribute('class');
        }
    };

    //Events
    themeToggleBtn.forEach((btn) => {
        btn.addEventListener('click', handleThemeToggle)
    });
};

export default darkMode;


