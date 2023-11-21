const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
gsap.from(".nlink", {
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
})

Shery.textAnimate("#heading h1", {
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

gsap.from(".anim2",{
    y: 50,
    stagger: .3,
    opacity: 0,
    ease: Expo,
    duration: 1
})  



document.querySelector("#ptext button")
.addEventListener("mouseover", function(){
    gsap.to("#pirateking video", {
        opacity: 1,
        duration: 1,
        ease: Power4
    })
})

document.querySelector("#ptext button")
.addEventListener("mouseleave", function(){
    gsap.to("#pirateking video", {
        opacity: 0,
        duration: 1,
        ease: Power4
    })
})