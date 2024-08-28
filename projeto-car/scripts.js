let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".list .item");
let indicators = document.querySelector(".indicators");
let dots = indicators.querySelectorAll('ul li');
let list = container.querySelector('.list')

let active = 0;
let firstposition = 0;
let lastPosition = items.length - 1;

function updateNumber() {
    indicators.querySelector('.number').innerHTML = '0' + (active + 1);
}

prevButton.onclick = () => {

    list.style.setProperty('--calculation', -1)

    let itemOld = container.querySelector(".item.active");
    
    if (itemOld) {
        itemOld.classList.remove("active");
    }

    active = (active - 1 < firstposition) ? lastPosition : active - 1;
    items[active].classList.add('active');

    updateNumber();
    let dotsOld = indicators.querySelector('ul li.active');
    if (dotsOld) {
        dotsOld.classList.remove('active');
    }
    dots[active].classList.add('active');
};
nextButton.onclick = () => {

    list.style.setProperty('--calculation', 1)
    
    let itemOld = container.querySelector(".item.active")
    itemOld.classList.remove("active")

    active = active + 1 > lastPosition? 0 : active + 1
    items[active].classList.add('active')

    indicators.querySelector('.number').innerHTML = '0' + (active + 1)

    updateNumber();
    let dotsOld = indicators.querySelector('ul li.active');
    if (dotsOld) {
        dotsOld.classList.remove('active');
    }
    dots[active].classList.add('active');
}
