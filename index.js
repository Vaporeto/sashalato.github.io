// navbar button
let navBtn = $('#nav-button');
let menu = $('.menu-wrapper');
let menuImage = $('.menu-image-wrapper');

navBtn.click(function() {
    if(navBtn.hasClass('open')) {
        navBtn.toggleClass('open');
        navBtn.css("transform", "rotate(0deg)");
        menu.css("opacity", "0");
        menu.css("pointer-events", "none");
        menu.css("z-index", "50");
        menuImage.css("display", "none");
        //$('body').css("overflow", "auto");
        setTimeout(function() {
            menu.css("pointer-events", "none");
            menu.css("z-index", "50");
        }, 275);
    } else {
        navBtn.toggleClass('open');
        navBtn.css("transform", "rotate(180deg)");
        menu.css("opacity", "1");
        menuImage.css("display", "inline-block");
        //$('body').css("overflow", "hidden");
        setTimeout(function() {
            menu.css("pointer-events", "auto");
            menu.css("z-index", "auto");
        }, 275);
    }
});


// Cursor
const cursorInner = document.querySelector('.cursor');
const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor-circle');

const menuImage1 = document.querySelector('#m-img-1');
const menuImage2 = document.querySelector('#m-img-2');
const menuImage3 = document.querySelector('#m-img-3');
const menuImage4 = document.querySelector('#m-img-4');

const menuItem1 = document.querySelector("#m-item-1");
const menuItem2 = document.querySelector("#m-item-2");
const menuItem3 = document.querySelector("#m-item-3");
const menuItem4 = document.querySelector("#m-item-4");

menuItem1.addEventListener('mouseenter', e => {
    menuImage1.style.opacity = "1";
    menuItem2.style.opacity = ".12";
    menuItem3.style.opacity = ".12";
    menuItem4.style.opacity = ".12";
});
menuItem1.addEventListener('mouseleave', e => {
    menuImage1.style.opacity = "0";
    menuItem2.style.opacity = "1";
    menuItem3.style.opacity = "1";
    menuItem4.style.opacity = "1";
});
menuItem2.addEventListener('mouseenter', e => {
    menuImage2.style.opacity = "1";
    menuItem1.style.opacity = ".12";
    menuItem3.style.opacity = ".12";
    menuItem4.style.opacity = ".12";
});
menuItem2.addEventListener('mouseleave', e => {
    menuImage2.style.opacity = "0";
    menuItem1.style.opacity = "1";
    menuItem3.style.opacity = "1";
    menuItem4.style.opacity = "1";
});
menuItem3.addEventListener('mouseenter', e => {
    menuImage3.style.opacity = "1";
    menuItem1.style.opacity = ".12";
    menuItem2.style.opacity = ".12";
    menuItem4.style.opacity = ".12";
});
menuItem3.addEventListener('mouseleave', e => {
    menuImage3.style.opacity = "0";
    menuItem1.style.opacity = "1";
    menuItem2.style.opacity = "1";
    menuItem4.style.opacity = "1";
});
menuItem4.addEventListener('mouseenter', e => {
    menuImage4.style.opacity = "1";
    menuItem1.style.opacity = ".12";
    menuItem2.style.opacity = ".12";
    menuItem3.style.opacity = ".12";
});
menuItem4.addEventListener('mouseleave', e => {
    menuImage4.style.opacity = "0";
    menuItem1.style.opacity = "1";
    menuItem2.style.opacity = "1";
    menuItem3.style.opacity = "1";
});

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);


function getAngle(diffX, diffY) {
    return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
    const distance = Math.sqrt(
        Math.pow(diffX, 2) + Math.pow(diffY, 2)
    );
    const maxSqueeze = 0.15;
    const accelerator = 1500;
    return Math.min(distance / accelerator, maxSqueeze);
}


const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

    menuImage1.style.transform = translate;
    menuImage2.style.transform = translate;
    menuImage3.style.transform = translate;
    menuImage4.style.transform = translate;
};

function loop() {
    updateCursor();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);


//------------------------------
// Slider(all Slides in a container)
const slider = document.querySelector(".slider")
// All trails 
const trail = document.querySelector(".trail").querySelectorAll("div")

// Transform value
let value = 0
// trail index number
let trailValue = 0
// interval (Duration)
let interval = 4000

// Function to slide forward
const slide = (condition) => {
    // CLear interval
    clearInterval(start)
    // update value and trailValue
    condition === "increase" ? initiateINC() : initiateDEC()
    // move slide
    move(value, trailValue)
    // Restart Animation
    animate()
    // start interal for slides back 
    start = setInterval(() => slide("increase"), interval);
}

// function for increase(forward, next) configuration
const initiateINC = () => {
    // Remove active from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // increase transform value
    value === 80 ? value = 0 : value += 20
    // update trailValue based on value
    trailUpdate()
}

// function for decrease(backward, previous) configuration
const initiateDEC = () => {
     // Remove active from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // decrease transform value
    value === 0 ? value = 80 : value -= 20
     // update trailValue based on value
    trailUpdate()
}

// function to transform slide 
const move = (S, T) => {
    // transform slider
    slider.style.transform = `translateX(-${S}%)`
    //add active class to the current trail
    trail[T].classList.add("active")
}

const tl = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"}})
tl.from(".bg", {x: "-100%", opacity: 0})
  .from("p", {opacity: 0}, "-=0.3")
  .from("h1", {opacity: 0, y: "30px"}, "-=0.3")
  .from("button", {opacity: 0, y: "-40px"}, "-=0.8")

// function to restart animation
const animate = () => tl.restart()

// function to update trailValue based on slide value
const trailUpdate = () => {
    if (value === 0) {
        trailValue = 0
    } else if (value === 20) {
        trailValue = 1
    } else if (value === 40) {
        trailValue = 2
    } else if (value === 60) {
        trailValue = 3
    } else {
        trailValue = 4
    }
}   

// Start interval for slides
let start = setInterval(() => slide("increase"), interval)

// Next  and  Previous button function (SVG icon with different classes)
document.querySelectorAll("svg").forEach(cur => {
    // Assign function based on the class Name("next" and "prev")
    cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
})

// function to slide when trail is clicked
const clickCheck = (e) => {
    // CLear interval
    clearInterval(start)
    // remove active class from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // Get selected trail
    const check = e.target
    // add active class
    check.classList.add("active")

    // Update slide value based on the selected trail
    if(check.classList.contains("box1")) {
        value = 0
    } else if (check.classList.contains("box2")) {
        value = 20
    } else if (check.classList.contains("box3")) {
        value = 40
    } else if (check.classList.contains("box4")) {
        value = 60
    } else {
        value = 80
    }
    // update trail based on value
    trailUpdate()
    // transfrom slide
    move(value, trailValue)
    // start animation
    animate()
    // start interval
    start = setInterval(() => slide("increase"), interval)
}

// Add function to all trails
trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

// Mobile touch Slide Section
const touchSlide = (() => {
    let start, move, change, sliderWidth

    // Do this on initial touch on screen
    slider.addEventListener("touchstart", (e) => {
        // get the touche position of X on the screen
        start = e.touches[0].clientX
        // (each slide with) the width of the slider container divided by the number of slides
        sliderWidth = slider.clientWidth/trail.length
    })
    
    // Do this on touchDrag on screen
    slider.addEventListener("touchmove", (e) => {
        // prevent default function
        e.preventDefault()
        // get the touche position of X on the screen when dragging stops
        move = e.touches[0].clientX
        // Subtract initial position from end position and save to change variabla
        change = start - move
    })

    const mobile = (e) => {
        // if change is greater than a quarter of sliderWidth, next else Do NOTHING
        change > (sliderWidth/4)  ? slide("increase") : null;
        // if change * -1 is greater than a quarter of sliderWidth, prev else Do NOTHING
        (change * -1) > (sliderWidth/4) ? slide("decrease") : null;
        // reset all variable to 0
        [start, move, change, sliderWidth] = [0,0,0,0]
    }
    // call mobile on touch end
    slider.addEventListener("touchend", mobile)
})()