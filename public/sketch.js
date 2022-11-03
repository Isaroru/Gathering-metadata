let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')

let data = {};

let button = document.getElementById('sendData');

let startTime = performance.now();

let date = []
    date [0] = new Date().toLocaleString(),
    date = date[0].split(', ')

const getDeviceType = () => {
    const nav = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(nav)) {
        return 'tablet'
    } else if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        nav)) {
        return 'mobile'
    } else {
        return 'desktop';
    }
}

function setup () {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
}

function draw () {
    background(255);
}

function calculateTime () {
    let endTime = performance.now();
    let timeRest = endTime - startTime;
    let scds = Math.floor(timeRest / 1000);
    let mins = Math.floor(scds / 60);
    let time = 0;

    if (mins > 0) {
        time = `${mins} mins, ${scds} seconds`;
        console.log(time)
    } else{
        time = `${scds} seconds`;
    }

    return time
}

button.addEventListener('click', () => {
    data = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        location: 'Estación: Universidad ICESI',
        date: date[0],
        timeStarted: date[1],
        timeStamp: calculateTime(),
        device: getDeviceType(),
    }
    sendData(data);
})

async function sendData(data) {
    const request = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    }
    await fetch('/data', request);
    console.log(data);
}


