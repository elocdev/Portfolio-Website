var styleSwitchToggler = document.querySelector(".style-switcher-toggler");
styleSwitchToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    })
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

var typed = new Typed(".typing",{
    strings:["", "Aspiring Web Developer", "Electrical Engineer"],
    typeSpeed:100,
    BackSpeed:100,
    loop:true
})

const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;

        for(let i=0; i<totalNavList; i++){
            const a = navList[i].querySelector("a");
            a.addEventListener("click", function(){
                for(let i=0; i<totalSection; i++){
                    allSection[i].classList.remove("back-section")
                }
                for(let j=0; j<totalNavList; j++){
                    if(navList[j].querySelector("a").classList.contains("active")){
                        allSection[j].classList.add(".back-section");
                    }
                    navList[j].querySelector("a").classList.remove("active")
                }
                this.classList.add("active")
                showSection(this);
            })
        }
        function showSection(element) {
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("active")
            }
            const target = element.getAttribute("href").split("#")[1];
            document.querySelector("#" + target).classList.add("active")
        }

