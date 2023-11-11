gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
});
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 200
    },
},)