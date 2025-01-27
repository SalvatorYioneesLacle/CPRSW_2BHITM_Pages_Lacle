let outp = document.getElementById('output');
let selection = [''];
let totalImages = 11;
let link = [
    'https://picsum.photos/1000?random=',
    'https://picsum.photos/1000/600?random=',
    'https://picsum.photos/1200/560?random='
];

function addPreload() {
    let preload = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < totalImages; j++) {
            preload += `<link rel="preload" href="${link[i]}${j}" as="image">`
        }
    }
    document.head.innerHTML += preload;
}
addPreload();

function initImages(num) {
    for (let i = 0; i < totalImages; i++) {
        selection[i] = link[num] + `${i}`;
    }
    console.log("Images inited");
}
initImages();

function outputHeadline() {
    let header = `<div id="headline"><h2>Bildercollage</h2></div>`;
    outp.innerHTML += header;
}
outputHeadline();

function createCollageBoxes() {
    let box = '<div id="collage-box">';
    for (let i = 1; i <= 3; i++) {
        box += `<div id="collage-${i}"></div>`
    }
    box += '</div>'
    outp.innerHTML += box;
}

function outputImages(num) {
    if (num == null) {
        num = 1;
    } else {
        initImages(num - 1);
    }

    let img = `<div id="collage-${num}">`;
    for (let i = 0; i < totalImages; i++) {
        img += `<div><img src="${selection[i]}" alt="img${i}"></div>`;
    }
    img += '</div>';
    document.getElementById('collage-box').innerHTML = img;
    drawButton(num);
}

function drawButton(num) {
    let btnBox = `<div id="btn"></div>`;
    let btns = ``;

    switch (num) {
        case 1:
            btns = `
                <input class="normal" id="highlight" type="button" value="Collage 1" onclick="outputImages(1)">
                <input class="normal" type="button" value="Collage 2" onclick="outputImages(2)">
                <input class="normal" type="button" value="Collage 3" onclick="outputImages(3)">
            `;
            break;

        case 2:
            btns = `
                <input class="normal" type="button" value="Collage 1" onclick="outputImages(1)">
                <input class="normal" id="highlight" type="button" value="Collage 2" onclick="outputImages(2)">
                <input class="normal" type="button" value="Collage 3" onclick="outputImages(3)">
            `;
            break;

        case 3:
            btns = `
                <input class="normal" type="button" value="Collage 1" onclick="outputImages(1)">
                <input class="normal" type="button" value="Collage 2" onclick="outputImages(2)">
                <input class="normal" id="highlight" type="button" value="Collage 3" onclick="outputImages(3)">
            `;
            break;

        default:
            btns = `
                <input class="normal" type="button" value="Collage 1" onclick="outputImages(1)">
                <input class="normal" type="button" value="Collage 2" onclick="outputImages(2)">
                <input class="normal" type="button" value="Collage 3" onclick="outputImages(3)">
            `;
            outp.innerHTML += btnBox;
            break;
    }

    document.getElementById('btn').innerHTML = btns;
}
// Output:
drawButton(); // Buttons
createCollageBoxes(); // collage-box div
// outputImages(0); // collage-{num} div + imgs, no output for text
