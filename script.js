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
    var navOptions = document.querySelectorAll('.links');
    var navbarHeight = document.getElementById('nav').offsetHeight; // Get the height of the navbar

    navOptions.forEach(function (option) {
        option.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default behavior of anchor tags

            var targetId = option.getAttribute('href').substring(1); // Get the target section ID
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var offset = navbarHeight + 10; // Adjust this value as needed
                var targetPosition = targetElement.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    var hamburgerBtn = document.getElementById('hamburger-btn');
    var navLinks = document.getElementById('nav-links');

    hamburgerBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
