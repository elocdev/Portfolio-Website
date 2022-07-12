const styleSwitchToggler = document.querySelector(".style-switcher-toggler");

styleSwitchToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});
