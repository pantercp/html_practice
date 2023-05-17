const timeline = document.querySelector(".timeline");
const sectionOne = document.querySelector(".timeline");
const timelineHeight = timeline.clientHeight;

console.log(timelineHeight);



var flight = 0;
var pixelJourney = timelineHeight;


// Main Timeline Option


const appearOptionsOne = {
    threshold: 0,
    // rootMargin: "0px 0px -100px 0px"
};

const InitiateOnScroll = new IntersectionObserver
    (function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("take-off");
                InitiateOnScroll.unobserve(entry.target);
                window.onscroll = function (e) {
                    console.log(window.scrollY); // Value of scroll Y in px
                    flight = window.scrollY;
                };
            }
        })
    },
        appearOptionsOne);

InitiateOnScroll.observe(timeline)

// Individual Container Options

const faders = document.querySelectorAll(".container");

const appearOptions = {
    threshold: 0.3,
    // rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver
    (function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
        appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})