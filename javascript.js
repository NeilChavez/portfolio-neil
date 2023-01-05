const d = document;
const $header = d.querySelector(".header")
const $btnHamgurger = d.querySelector('.hamburger')
const $navList = d.querySelector('.nav-list');
const $heroSection = d.querySelector(".hero");
const $projectSection = d.querySelector(".projects-section")

const handleMousemove = e => {
    if (e.target.matches('[data-perspective]')) {
        const centerX = e.target.offsetWidth / 2;
        const centerY = e.target.offsetHeight / 2;
        const tiltPosY = ((e.offsetX - centerX) / centerX) * 10;
        const tiltPosX = ((e.offsetY - centerY) / centerY) * 10;
        e.target.style.transition = `transform 0.1s linear`
        e.target.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${tiltPosY - (tiltPosY * 2)}deg)`;
    }
}

const handleMouseout = e => {
    if (e.target.matches('[data-perspective]')) {
        e.target.style.transition = `transform 0.1s linear`
        e.target.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    }
}
$header.addEventListener('click', e => {
    if (e.target.matches(".hamburger-wrapper") || e.target.matches(".hamburger-wrapper *")) {
        $btnHamgurger.classList.toggle('is-active')
        $navList.classList.toggle("is-active");
    }
    if (e.target.matches(".list-item") || e.target.matches(".list-item *")) {
        $btnHamgurger.classList.remove('is-active')
        $navList.classList.remove("is-active");
    }
})

$heroSection.addEventListener("mousemove", handleMousemove)
$heroSection.addEventListener("mouseout", handleMouseout)
$projectSection.addEventListener("mousemove", handleMousemove)
$projectSection.addEventListener("mouseout", handleMouseout)