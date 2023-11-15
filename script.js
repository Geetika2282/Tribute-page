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

// scroll to id
document.addEventListener("DOMContentLoaded", function () {
    var navOptions = document.querySelectorAll('.nav-option');
    var navbarHeight = document.getElementById('nav').offsetHeight; // Get the height of the navbar

    navOptions.forEach(function (option) {
        option.addEventListener('click', function () {
            var targetId = option.getAttribute('data-target');
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var offset = 100; // Adjust this value as needed
                var targetPosition = targetElement.offsetTop - navbarHeight - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});