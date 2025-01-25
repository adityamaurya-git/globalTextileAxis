// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
});


// MOVING CURSOR STARTS

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
    })
})

document.querySelector(".menuBtn").addEventListener("mouseenter", () => {
    cursor.style.display = "none"
})
document.querySelector(".menuBtn").addEventListener("mouseleave", () => {
    cursor.style.display = "block"
})

document.querySelector("footer").addEventListener("mouseenter",()=>{
    cursor.style.backgroundColor = "white"
})
document.querySelector("footer").addEventListener("mouseleave",()=>{
    cursor.style.backgroundColor = "#014c2d"
})

// MOVING CURSOR ENDS



// ASIDE BAR SECTION STARTS

// ASIDE BAR STARTS

const menuBtn = document.querySelector(".menuBtn i");
const close = document.querySelector(".close");

function asideBar() {

    var tl = gsap.timeline()

    tl.to("aside", {
        right: 0,
        duration: .5,
        ease: Power4.out,
    })
    tl.from(".h1Text h1", {
        x: 70,
        stagger: .2,
        duration: .5,
        opacity: 0,
    })
    tl.from(".close", {
        opacity: 0,
    })

    tl.pause()
    menuBtn.addEventListener("click", () => {
        tl.play()
    })

    close.addEventListener("click", () => {
        tl.reverse()
    })


}

asideBar()

function h1text() {


    const h1Text = document.querySelectorAll(".h1Text")

    h1Text.forEach((dets) => {

        dets.addEventListener("mouseenter", (elem) => {
            console.log(elem)
            gsap.to(dets.children[0], {
                x: 70,
            })

        })
        dets.addEventListener("mouseleave", (elem) => {
            gsap.to(dets.children[0], {
                x: 0,
            })
        })
    })

}

h1text()


// ASIDE BAR ENDS

var tl = gsap.timeline();

tl.to(".imageback",{
    transform: "translateX(100%)",
    duration:1.2,
})

gsap.from(".aboutCard .card",{
    y:110,
    opacity:0,
    stagger:.25,
    scrollTrigger:{
        trigger:".aboutCard",
        scroller:"body",
        start:"top 70%",
    }
})

gsap.to(".revealingTextTop",{
    width: "100%",
  scrollTrigger: {
    trigger: ".history",
    scroller: "body",
    start: "top 80%",
    end: "20% 50%",
    scrub: 1,
    // markers:true,
  }
})

gsap.to(".imageback1",{
    transform:"translateX(100%)",
    duration:1,
    scrollTrigger:{
        trigger:".historyPage",
        scroller:"body",
        start:"top 70%",
    }
},"a")

gsap.from(".historyPageInfo p",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".historyPage",
        scroller:"body",
        start:"top 70%",
    }
},"a")

gsap.to(".imageback2",{
    transform:"translateX(100%)",
    duration:1,
    scrollTrigger:{
        trigger:".presentPage",
        scroller:"body",
        start:"top 70%",
    }
},"a")

gsap.from(".presentPageInfo p",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".presentPage",
        scroller:"body",
        start:"top 70%",
    }
},"a")

document.querySelectorAll(".infoSection").forEach(card=>{
    gsap.to(card,{
        scrollTrigger:{
            trigger:card,
            start:"top 1%",
            end:"bottom 1%",
            scrub:true,
        }
    })
    
})