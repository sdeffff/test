const burgerMenu = document.querySelector('.mobile-menu'),
      burgerMenuBtn = document.querySelector('.burger-menu-btn'),
      closeBurger = document.querySelector('.close');

burgerMenuBtn.addEventListener("click", () => {
    burgerMenu.style.right = 0;
})

closeBurger.addEventListener("click", () => {
    burgerMenu.style.right = "-100%";
});

//
document.addEventListener("DOMContentLoaded", function () {
    gsap.from("header .logo-img", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from("header nav a", {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        stagger: 0.1
    });

    gsap.from(".hero-main article:first-child", {
        x: -50,
        opacity: 0,
        duration: 1.2,
        delay: 1.2,
        ease: "power3.out"
    });

    gsap.from(".hero-main article:last-child", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        delay: 1.4,
        ease: "power3.out"
    });
});
