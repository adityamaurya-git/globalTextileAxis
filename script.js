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


document.querySelector("footer").addEventListener("mouseenter", () => {
    cursor.style.backgroundColor = "white"
})
document.querySelector("footer").addEventListener("mouseleave", () => {
    cursor.style.backgroundColor = "#014c2d"
})

// MOVING CURSOR ENDS

let mm = gsap.matchMedia()

mm.add("screen and (min-width: 769px)", () => {
    const navbar = document.querySelector(".navbar");

    navbar.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()
        tl.to(".nav-bottom", {
            height: "22vh",
        }, "a")
        tl.to(".nav-elem h5", {
            display: "block",
        }, "a")
        tl.to(".nav-elem h5 span", {
            y: 0,
            stagger: {
                amount: 0.5
            }
        })
    })
    navbar.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-elem h5 span", {
            y: 25,
            stagger: {
                amount: 0.1
            }
        }, "b")
        tl.to(".nav-bottom", {
            height: "0vh",
            duration: .6
        }, "b")
        tl.to(".nav-elem h5", {
            display: "none",
            duration: .6
        }, "b")
    })


})

const navbar1 = document.querySelector(".navbar")
document.querySelector(".menuBtn").addEventListener("click", () => {
    if (navbar1.classList.contains("navbar-height")) {
        navbar1.classList.remove("navbar-height")
    }
    else{
       navbar1.classList.add("navbar-height")
    }
    gsap.to(".navbar",{
        duration:1,
    })
})

// ASIDE BAR ENDS

// ASIDE BAR SECTION ENDS


gsap.from(".descBottom .card", {
    opacity: 0,
    y: 100,
    stagger: .25,
    scrollTrigger: {
        trigger: ".descBottom",
        scroller: "body",
        // markers:true,
        start: "top 70%",
    }
})

