const maskEl = document.querySelector(".mask");
const spinner = document.querySelectorAll(".inner");

export function openLoading() {
    maskEl.classList.remove('hide');
    spinner.forEach(spin => {
        spin.classList.remove('hide');
    });
}
export function closeLoading() {
    setInterval(() => {
        maskEl.classList.add('hide');
        spinner.forEach(spin => {
            spin.classList.add('hide');
        });
    }, 1000);
}