let rings = [];
let ringConfigs = [];
let fillColors = ['#FABC08','#4CAECD','#06978A','#D70E08'];
let baseSize = 520;
let canvas;



// set outer ellipses variables
let ellipses = [
    { x: 286.8, y: 73.4, angle: 0, fillColor: null},
    { x: 301.1, y: 40.6, angle: 0, fillColor: null},
    { x: 293.2, y: 11.8, angle: 0, fillColor: null},
    { x: 252.8, y: 115.8, angle: 0, fillColor: null},
    { x: 254.4, y: 135.9, angle: 0, fillColor: null},
    { x: 360.2, y: 251.2, angle: 0, fillColor: null},
    { x: 365.4, y: 268.9, angle: 0, fillColor: null},
    { x: 369.4, y: 291.9, angle: 0, fillColor: null},
    { x: 262.5, y: 188.7, angle: 0, fillColor: null},
    { x: 282.7, y: 208.4, angle: 0, fillColor: null},
    { x: 375.3, y: 204.6, angle: 0, fillColor: null},
    { x: 396.3, y: 187.6, angle: 0, fillColor: null},
    { x: 417.6, y: 160.2, angle: 0, fillColor: null},
    { x: 414.9, y: 143.6, angle: 0, fillColor: null},
    { x: 409.5, y: 126.6, angle: 0, fillColor: null},
    { x: 403.5, y: 96.6, angle: 0, fillColor: null},
    { x: 406.1, y: 68.3, angle: 0, fillColor: null},
    { x: 425.5, y: 48.0, angle: 0, fillColor: null},
    { x: 446.5, y: 32.0, angle: 0, fillColor: null},
    { x: 481.4, y: 9.7, angle: 0, fillColor: null},
    { x: 482.9, y: 21.4, angle: 0, fillColor: null},
    { x: 252.6, y: 216.3, angle: 0, fillColor: null},
    { x: 462.6, y: 326.3, angle: 0, fillColor: null},
    { x: 483.6, y: 308.3, angle: 0, fillColor: null},
    { x: 55.6, y: 398.3, angle: 0, fillColor: null},
    { x: 44.6, y: 407.3, angle: 0, fillColor: null},
    { x: 31.2, y: 419.0, angle: 0, fillColor: null},
    { x: 1.6, y: 460.4, angle: 0, fillColor: null},
    { x: 1.5, y: 483.6, angle: 0, fillColor: null},
    { x: 62.4, y: 367.7, angle: 0, fillColor: null},
    { x: 59.3, y: 351.0, angle: 0, fillColor: null},
    { x: 56.2, y: 334.1, angle: 0, fillColor: null},
    { x: 52.4, y: 320.0, angle: 0, fillColor: null},
    { x: 44.4, y: 306.4, angle: 0, fillColor: null},
    { x: 9.1, y: 436.1, angle: 0, fillColor: null},
    { x: 240.6, y: 228.3, angle: 0, fillColor: null},
    { x: 286.6, y: 484.3, angle: 0, fillColor: null},
    { x: 271.6, y: 499.3, angle: 0, fillColor: null},
    { x: 251.5, y: 515.7, angle: 0, fillColor: null},
    { x: 220.5, y: 516.7, angle: 0, fillColor: null},
    { x: 198.5, y: 515.7, angle: 0, fillColor: null},
    { x: 167.6, y: 505.2, angle: 0, fillColor: null},
    { x: 155.8, y: 480.3, angle: 0, fillColor: null},
    { x: 149.6, y: 461.6, angle: 0, fillColor: null},
    { x: 141.6, y: 440.6, angle: 0, fillColor: null},
    { x: 231.6, y: 240.3, angle: 0, fillColor: null},
    { x: 365.6, y: 325.3, angle: 0, fillColor: null},
    { x: 327.7, y: 353.7, angle: 0, fillColor: null},
    { x: 345.4, y: 342.2, angle: 0, fillColor: null},
    { x: 213.7, y: 263.9, angle: 0, fillColor: null},
    { x: 213.4, y: 295.0, angle: 0, fillColor: null},
    { x: 216.4, y: 309.8, angle: 0, fillColor: null},
    { x: 236.5, y: 357.0, angle: 0, fillColor: null},
    { x: 205.9, y: 362.2, angle: 0, fillColor: null},
    { x: 197.1, y: 264.6, angle: 0, fillColor: null},
    { x: 107.4, y: 201.8, angle: 0, fillColor: null},
    { x: 15.6, y: 129.6, angle: 0, fillColor: null},
    { x: 112.4, y: 217.8, angle: 0, fillColor: null},
    { x: 104.9, y: 245.2, angle: 0, fillColor: null},
    { x: 56.9, y: 305.3, angle: 0, fillColor: null},
    { x: 71.1, y: 286.7, angle: 0, fillColor: null},
    { x: 85.8, y: 270.4, angle: 0, fillColor: null},
    { x: 103.5, y: 185.4, angle: 0, fillColor: null},
    { x: 309.7, y: 213.9, angle: 0, fillColor: null},
    { x: 440.7, y: 171.9, angle: 0, fillColor: null},
    { x: 463.7, y: 177.9, angle: 0, fillColor: null},
    { x: 484.7, y: 186.9, angle: 0, fillColor: null},
    { x: 505.7, y: 195.9, angle: 0, fillColor: null},
    { x: 91.7, y: 158.9, angle: 0, fillColor: null},
    { x: 77.7, y: 152.9, angle: 0, fillColor: null},
    { x: 60.9, y: 147.0, angle: 0, fillColor: null},
    { x: 45.0, y: 142.7, angle: 0, fillColor: null},
    { x: 322.7, y: 217.9, angle: 0, fillColor: null},
    { x: 353.7, y: 226.9, angle: 0, fillColor: null},
    { x: 295.9, y: 403.7, angle: 0, fillColor: null},
    { x: 444.9, y: 371.7, angle: 0, fillColor: null},
    { x: 452.9, y: 393.7, angle: 0, fillColor: null},
    { x: 459.9, y: 414.7, angle: 0, fillColor: null},
    { x: 302.3, y: 439.9, angle: 0, fillColor: null},
    { x: 301.8, y: 439.8, angle: 0, fillColor: null},
    { x: 305.8, y: 472.6, angle: 0, fillColor: null},
    { x: 294.4, y: 378.8, angle: 0, fillColor: null},
    { x: 274.8, y: 88.4, angle: 0, fillColor: null},
    { x: 176.8, y: 100.4, angle: 0, fillColor: null},
    { x: 262.8, y: 371.4, angle: 0, fillColor: null},
    { x: 88.9, y: 394.4, angle: 0, fillColor: null},
    { x: 118.8, y: 409.4, angle: 0, fillColor: null},
    { x: 433.8, y: 342.4, angle: 0, fillColor: null},
    { x: 408.8, y: 328.4, angle: 0, fillColor: null},
    { x: 393.8, y: 323.4, angle: 0, fillColor: null},
    { x: 277.8, y: 377.4, angle: 0, fillColor: null},
    { x: 141.5, y: 32.6, angle: 0, fillColor: null},
    { x: 145.4, y: 51.8, angle: 0, fillColor: null},
    { x: 150.4, y: 67.8, angle: 0, fillColor: null},
    { x: 147.6, y: 97.8, angle: 0, fillColor: null},
    { x: 129.7, y: 122.8, angle: 0, fillColor: null},
    { x: 118.7, y: 134.8, angle: 0, fillColor: null},
    { x: 105.7, y: 150.8, angle: 0, fillColor: null},
    { x: 194.8, y: 106.4, angle: 0, fillColor: null},
    { x: 218.9, y: 111.4, angle: 0, fillColor: null},
    { x: 318.7, y: 476.5, angle: 0, fillColor: null},
    { x: 346.7, y: 477.5, angle: 0, fillColor: null},
    { x: 370.5, y: 486.6, angle: 0, fillColor: null},
    { x: 392.9, y: 487.3, angle: 0, fillColor: null},
    { x: 422.0, y: 476.5, angle: 0, fillColor: null},
    { x: 438.0, y: 461.5, angle: 0, fillColor: null},
    { x: 463.0, y: 439.5, angle: 0, fillColor: null},
    { x: 488.4, y: 444.6, angle: 0, fillColor: null},
    { x: 242.5, y: 111.4, angle: 0, fillColor: null}
];

// draw function for ellipse
function fillEllipse(ellipsesList) {
    let count = 0;
    for (let i = 0; i < ellipsesList.length; i++) {
        if (count > 3){
            count = 0;
        }
        ellipsesList[i].fillColor = fillColors[count];
        count++;
    }
}

// set outer small circle variables
let circles = [
    { x: 12.0, y: 9.0, r: 6.0},
    { x: 12.0, y: 9.0, r: 6.0},
    { x: 12.0, y: 9.0, r: 6.0},
    { x: 137.0, y: 9.0, r: 6.0},
    { x: 137.0, y: 9.0, r: 6.0},
    { x: 137.0, y: 9.0, r: 6.0},
    { x: 156.0, y: 82.0, r: 6.0},
    { x: 156.0, y: 82.0, r: 6.0},
    { x: 156.0, y: 82.0, r: 6.0},
    { x: 269.0, y: 206.0, r: 6.0},
    { x: 269.0, y: 206.0, r: 6.0},
    { x: 269.0, y: 206.0, r: 6.0},
    { x: 141.0, y: 110.0, r: 6.0},
    { x: 141.0, y: 110.0, r: 6.0},
    { x: 141.0, y: 110.0, r: 6.0},
    { x: 252.0, y: 105.0, r: 6.0},
    { x: 252.0, y: 105.0, r: 6.0},
    { x: 252.0, y: 105.0, r: 6.0},
    { x: 299.0, y: 63.0, r: 6.0},
    { x: 299.0, y: 63.0, r: 6.0},
    { x: 299.0, y: 63.0, r: 6.0},
    { x: 392.0, y: 78.0, r: 6.0},
    { x: 392.0, y: 78.0, r: 6.0},
    { x: 392.0, y: 78.0, r: 6.0},
    { x: 406.5, y: 113.5, r: 5.5},
    { x: 406.5, y: 113.5, r: 5.5},
    { x: 406.5, y: 113.5, r: 5.5},
    { x: 508.0, y: 24.0, r: 6.0},
    { x: 508.0, y: 24.0, r: 6.0},
    { x: 508.0, y: 24.0, r: 6.0},
    { x: 516.0, y: 205.0, r: 6.0},
    { x: 516.0, y: 205.0, r: 6.0},
    { x: 516.0, y: 205.0, r: 6.0},
    { x: 512.0, y: 289.0, r: 6.0},
    { x: 512.0, y: 289.0, r: 6.0},
    { x: 512.0, y: 289.0, r: 6.0},
    { x: 447.0, y: 350.0, r: 6.0},
    { x: 447.0, y: 350.0, r: 6.0},
    { x: 447.0, y: 350.0, r: 6.0},
    { x: 476.0, y: 432.0, r: 6.0},
    { x: 476.0, y: 432.0, r: 6.0},
    { x: 476.0, y: 432.0, r: 6.0},
    { x: 378.0, y: 316.0, r: 6.0},
    { x: 378.0, y: 316.0, r: 6.0},
    { x: 378.0, y: 316.0, r: 6.0},
    { x: 354.5, y: 239.5, r: 4.5},
    { x: 354.5, y: 239.5, r: 4.5},
    { x: 354.5, y: 239.5, r: 4.5},
    { x: 287.0, y: 392.0, r: 6.0},
    { x: 287.0, y: 392.0, r: 6.0},
    { x: 287.0, y: 392.0, r: 6.0},
    { x: 220.0, y: 342.0, r: 6.0},
    { x: 220.0, y: 342.0, r: 6.0},
    { x: 220.0, y: 342.0, r: 6.0},
    { x: 211.0, y: 284.0, r: 6.0},
    { x: 211.0, y: 284.0, r: 6.0},
    { x: 211.0, y: 284.0, r: 6.0},
    { x: 219.0, y: 249.0, r: 6.0},
    { x: 219.0, y: 249.0, r: 6.0},
    { x: 219.0, y: 249.0, r: 6.0},
    { x: 70.0, y: 388.0, r: 6.0},
    { x: 70.0, y: 388.0, r: 6.0},
    { x: 70.0, y: 388.0, r: 6.0},
    { x: 129.0, y: 415.0, r: 6.0},
    { x: 129.0, y: 415.0, r: 6.0},
    { x: 129.0, y: 415.0, r: 6.0},
    { x: 149.0, y: 403.0, r: 6.0},
    { x: 149.0, y: 403.0, r: 6.0},
    { x: 149.0, y: 403.0, r: 6.0},
    { x: 306.0, y: 456.0, r: 6.0},
    { x: 306.0, y: 456.0, r: 6.0},
    { x: 306.0, y: 456.0, r: 6.0},
    { x: 295.0, y: 473.0, r: 6.0},
    { x: 295.0, y: 473.0, r: 6.0},
    { x: 295.0, y: 473.0, r: 6.0},
    { x: 421.5, y: 335.5, r: 4.5},
    { x: 421.5, y: 335.5, r: 4.5},
    { x: 421.5, y: 335.5, r: 4.5},
    { x: 309.5, y: 366.5, r: 4.5},
    { x: 309.5, y: 366.5, r: 4.5},
    { x: 309.5, y: 366.5, r: 4.5},
    { x: 243.5, y: 363.5, r: 4.5},
    { x: 243.5, y: 363.5, r: 4.5},
    { x: 243.5, y: 363.5, r: 4.5},
    { x: 50.5, y: 295.5, r: 4.5},
    { x: 50.5, y: 295.5, r: 4.5},
    { x: 50.5, y: 295.5, r: 4.5},
    { x: 114.5, y: 226.5, r: 4.5},
    { x: 114.5, y: 226.5, r: 4.5},
    { x: 114.5, y: 226.5, r: 4.5},
    { x: 99.5, y: 255.5, r: 4.5},
    { x: 99.5, y: 255.5, r: 4.5},
    { x: 99.5, y: 255.5, r: 4.5},
    { x: 187.5, y: 258.5, r: 4.5},
    { x: 187.5, y: 258.5, r: 4.5},
    { x: 187.5, y: 258.5, r: 4.5},
    { x: 29.5, y: 138.5, r: 4.5},
    { x: 29.5, y: 138.5, r: 4.5},
    { x: 29.5, y: 138.5, r: 4.5},
    { x: 101.5, y: 167.5, r: 4.5},
    { x: 101.5, y: 167.5, r: 4.5},
    { x: 101.5, y: 167.5, r: 4.5},
    { x: 295.5, y: 209.5, r: 4.5},
    { x: 295.5, y: 209.5, r: 4.5},
    { x: 295.5, y: 209.5, r: 4.5},
    { x: 337.5, y: 223.5, r: 4.5},
    { x: 337.5, y: 223.5, r: 4.5},
    { x: 337.5, y: 223.5, r: 4.5},
    { x: 365.5, y: 214.5, r: 4.5},
    { x: 365.5, y: 214.5, r: 4.5},
    { x: 365.5, y: 214.5, r: 4.5},
    { x: 430.5, y: 165.5, r: 4.5},
    { x: 430.5, y: 165.5, r: 4.5},
    { x: 430.5, y: 165.5, r: 4.5},
    { x: 297.5, y: 25.5, r: 4.5},
    { x: 297.5, y: 25.5, r: 4.5},
    { x: 297.5, y: 25.5, r: 4.5},
    { x: 406.5, y: 177.5, r: 4.5},
    { x: 406.5, y: 177.5, r: 4.5},
    { x: 406.5, y: 177.5, r: 4.5},
    { x: 262.5, y: 175.5, r: 4.5},
    { x: 262.5, y: 175.5, r: 4.5},
    { x: 262.5, y: 175.5, r: 4.5},
    { x: 256.5, y: 160.5, r: 4.5},
    { x: 256.5, y: 160.5, r: 4.5},
    { x: 256.5, y: 160.5, r: 4.5},
    { x: 2.5, y: 112.5, r: 4.5},
    { x: 2.5, y: 112.5, r: 4.5},
    { x: 2.5, y: 112.5, r: 4.5},
    { x: 26.5, y: 297.5, r: 4.5},
    { x: 26.5, y: 297.5, r: 4.5},
    { x: 26.5, y: 297.5, r: 4.5},
    { x: 329.5, y: 474.5, r: 4.5},
    { x: 329.5, y: 474.5, r: 4.5},
    { x: 329.5, y: 474.5, r: 4.5},
    { x: 262.5, y: 512.5, r: 4.5},
    { x: 262.5, y: 512.5, r: 4.5},
    { x: 262.5, y: 512.5, r: 4.5},
    { x: 179.5, y: 514.5, r: 4.5},
    { x: 179.5, y: 514.5, r: 4.5},
    { x: 179.5, y: 514.5, r: 4.5},
    { x: 154.5, y: 495.5, r: 4.5},
    { x: 154.5, y: 495.5, r: 4.5},
    { x: 154.5, y: 495.5, r: 4.5},
    { x: 299.5, y: 423.5, r: 4.5},
    { x: 299.5, y: 423.5, r: 4.5},
    { x: 299.5, y: 423.5, r: 4.5},
    { x: 451.5, y: 449.5, r: 4.5},
    { x: 451.5, y: 449.5, r: 4.5},
    { x: 451.5, y: 449.5, r: 4.5},
    { x: 405.5, y: 490.5, r: 4.5},
    { x: 405.5, y: 490.5, r: 4.5},
    { x: 405.5, y: 490.5, r: 4.5},
    { x: 99.5, y: 398.5, r: 4.5},
    { x: 99.5, y: 398.5, r: 4.5},
    { x: 99.5, y: 398.5, r: 4.5},
    { x: 6.5, y: 449.5, r: 4.5},
    { x: 6.5, y: 449.5, r: 4.5},
    { x: 6.5, y: 449.5, r: 4.5},
    { x: 21.5, y: 427.5, r: 4.5},
    { x: 21.5, y: 427.5, r: 4.5},
    { x: 21.5, y: 427.5, r: 4.5},
    { x: 4.5, y: 507.5, r: 4.5},
    { x: 4.5, y: 507.5, r: 4.5},
    { x: 4.5, y: 507.5, r: 4.5},
    { x: 462.0, y: 17.0, r: 6.0},
    { x: 462.0, y: 17.0, r: 6.0},
    { x: 462.0, y: 17.0, r: 6.0},
    { x: 291.0, y: -1.0, r: 5.0},
    { x: 291.0, y: -1.0, r: 5.0},
    { x: 291.0, y: -1.0, r: 5.0},
    { x: 232.5, y: 519.5, r: 4.5},
    { x: 232.5, y: 519.5, r: 4.5},
    { x: 232.5, y: 519.5, r: 4.5},
];

// draw function for outer circle
function drawCircles(circleList) {
    stroke("#000000");
    strokeWeight(4);

    for (let c of circleList) {
        fill('#FFFFFF');
        ellipse(c.x, c.y, c.r * 2, c.r * 2);
    }
}

function setup() {
    canvas = createCanvas(baseSize, baseSize);
    canvas.parent("canvas-container");
    noLoop();
    fillEllipse(ellipses);
    angleMode(RADIANS)


    ringConfigs = [
        { //number 1
            x: 70, y: 70,
            fillStyles: ['layered', 'layered', 'dots'],
            bgColors: [color('#909F9C'), color('#C253A0'), color('#D4F0FC')],
            patternColors: [
                [color('#7E9199'), color('#000000'), color('#16973A')],
                [color('#DF4526'), color('#196138'), color('#AC4494')],
                color('#030F7B')
            ],
            hasCurve: true,
            curveFlipped: true,
            angle: PI / 2
        },{ //number 2
            x: 220,
            y: 35,
            fillStyles: ['layered', 'dots', 'zigzag'],
            bgColors: [color('#7E9199'), color('#E04B9F'), color('#FCB913')],
            patternColors: [
                [color('#7E9199'), color('#13894B'), color('#30412A')],
                color('#F55F1C'),
                color('#E81207')
            ],
            hasCurve: false,
            angle: PI / 3,
            hasDiagonal: true
        },{ //number 3
            x: 370,
            y: 0,
            fillStyles: ['layered', 'layered', 'dots'],
            bgColors: [color('#090200'), color('#D561B7'), color('#F9F8FE')],
            patternColors: [
                [color('#7E9199'), color('#000000'), color('#16973A')],
                [color('#DF4526'), color('#196138'), color('#971C19')],
                color('#F3352F')
            ],
            hasCurve: true,
            curveFlipped: true,
            angle: 2* PI / 3
        },{ //number 7
            x: 480,
            y: 100,
            fillStyles: ['layered', 'dots', 'dots'],
            bgColors: [color('#090200'), color('#D561B7'), color('#F8A529')],
            patternColors: [
                [color('#3A3E2A'), color('#E7373A'), color('#010005')],
                color('#FCD1F6'),
                color('#1E4271')
            ],
            hasCurve: false,
            angle: PI / 3
        },{ //number 4
            x: 30,
            y: 220,
            fillStyles: ['layered', 'dots', 'dots'],
            bgColors: [color('#758A73'), color('#D4429B'), color('#F7B437')],
            patternColors: [
                [color('#E34324'), color('#070300'), color('#565737')],
                color('#F64A2D'),
                color('#105093')
            ],
            hasCurve: false,
            angle: PI / 3
        },{ //number 5
            x: 180,
            y: 180,
            fillStyles: ['layered', 'layered', 'dots'],
            bgColors: [color('#464D2C'), color('#D143A3'), color('#DEFAFE')],
            patternColors: [
                [color('#040204'), color('#139126'), color('#CBD2CB')],
                [color('#F9472A'), color('#D249A7'), color('#D249A7')],
                color('#0E892F')
            ],
            hasCurve: true,
            angle: 5 * PI / 3
        },{ //number 6
            x: 335,
            y: 140,
            fillStyles: ['layered', 'layered', 'dots'],
            bgColors: [color('#A4AFB1'), color('#C8429C'), color('#FDB421')],
            patternColors: [
                [color('#030203'), color('#A1A4A1'), color('#474C3C')],
                [color('#70AAD6'), color('#C8429C'), color('#70AAD6')],
                color('#D299DE')
            ],
            hasCurve: false,
            angle: PI / 3
        },{ //number 8
            x: -20,
            y: 360,
            fillStyles: ['layered', 'layered', 'dots'],
            bgColors: [color('#304A3B'), color('#CC40A7'), color('#CCFCF8')],
            patternColors: [
                [color('#030203'), color('#A1A4A1'), color('#474C3C')],
                [color('#C8429C'), color('#C8429C'), color('#C73E9E')],
                color('#05938C')
            ],
            hasCurve: true,
            angle: 11 * PI / 6
        },{ //number 9
            x: 140,
            y: 320,
            fillStyles: ['layered', 'dots', 'zigzag'],
            bgColors: [color('#010103'), color('#FE5DB2'), color('#F6BB06')],
            patternColors: [
                [color('#E93C3E'), color('#A1A4A1'), color('#474C3C')],
                color('#F6090A'),
                color('#F6090A')
            ],
            hasCurve: false,
            angle: PI / 3
        },{ //number 10
            x: 290,
            y: 290,
            fillStyles: ['layered', 'zigzag', 'dots'],
            bgColors: [color('#F52241'), color('#ED58B9'), color('#F9FAFC')],
            patternColors: [
                [color('#2F9250'), color('#AC948E'), color('#F81D36'), color('#000000')],
                color('#F6090A'),
                color('#F6090A')
            ],
            hasCurve: true,
            angle: 0
        },{ //number 11
            x: 440,
            y: 250,
            fillStyles: ['layered', 'layered', 'dots'],
            bgColors: [color('#566140'), color('#BE5AA9'), color('#EDFDF9')],
            patternColors: [
                [color('#02851B'), color('#606148'), color('#001802')],
                [color('#BE5AA9'), color('#02851B')],
                color('#F47B1A')
            ],
            hasCurve: false,
            angle: PI / 3
        },{ //number 12
            x: 77,
            y: 480,
            fillStyles: ['layered', 'layered', 'dots'],
            bgColors: [color('#369D44'), color('#D455BC'), color('#FBFEF7')],
            patternColors: [
                [color('#6C9680'), color('#000000'), color('#2DA24E')],
                [color('#CF68C4'), color('#A5BAF9')],
                color('#F7190C')
            ],
            hasCurve: true,
            curveFlipped: true,
            angle: PI / 1.1
        },{ //number 13
            x: 220,
            y: 440,
            fillStyles: ['layered', '606257', 'dots'],
            bgColors: [color('#010206'), color('#F66FD4'), color('#FDCB49')],
            patternColors: [
                [color('#DBC958'), color('#020202'), color('#2DA24E'),color('#F6635D')],
                [color('#F66CD1')],
                color('#F66CD1')
            ],
            hasCurve: false,
            angle: PI / 6,
            hasDiagonal: true

        },{ //number 14
            x: 375,
            y: 410,
            fillStyles: ['layered', '606257', 'dots'],
            bgColors: [color('#EF090B'), color('#FE63AD'), color('#FDCB49')],
            patternColors: [
                [color('#DBC958'), color('#020202'), color('#2DA24E'),color('#F6635D')],
                [color('#FD5E38'), color('#FE63AD')],
                color('#0E3280')
            ],
            hasCurve: false,
            angle: PI / 3
        },{ //number 15
            x: 525,
            y: 370,
            fillStyles: ['none', 'layered', 'zigzag'],
            bgColors: [color('#000000'), color('#000000'), color('#FCC121')],
            patternColors: [color('#000000'),
                [color('#1C8543'),color('#DB58B2'),color('#E66A31')],
                color('#E21F01')],
            hasCurve: false,
            angle: PI / 3
        },{ //number 16
            x: 330,
            y: 550,
            fillStyles: ['none', 'dots', 'dots'],
            bgColors: [color('#000000'), color('#F9B8F5'), color('#FEFCFC')],
            patternColors: [color('#000000'), color('#53BF6C'), color('#F52121')],
            hasCurve: false,
            angle: PI / 3
        },{ //number 17
            x: 480,
            y: 530,
            fillStyles: ['layered', 'none', 'dots'],
            bgColors: [color('#60C77A'), color('#EF84DC'), color('#F3FFF8')],
            patternColors: [[color('#041419'), color('#E35D47')],
                color('#000000'),
                color('#60C77A')],
            hasCurve: false,
            angle: PI / 3
        }
    ];

    for (let config of ringConfigs) {
        rings.push(new RingPattern(config));
    }

    windowResized()

}

function windowResized() {
    let scaleFactor = min(windowWidth, windowHeight) / baseSize;
    canvas.style('transform', `scale(${scaleFactor})`);
    canvas.style('transform-origin', 'top left');
    canvas.position((windowWidth - baseSize * scaleFactor) / 2, (windowHeight - baseSize * scaleFactor) / 2);
}

function draw() {
    background(1, 89, 125);

    // Scale and center the artpiece
    /*translate((width - baseWidth * scaling) / 2, (height - baseHeight * scaling) / 2);
    scale(scaling);*/

    for (let r of rings) {
        r.display();
    }
    fillEllipse(ellipses);
    for (let i = 0; i < ellipses.length; i++) {
        let e = ellipses[i];
        stroke("#F28633");
        strokeWeight(1);
        fill(e.fillColor || "white");        // Default white fill

        push();
        translate(e.x, e.y);
        rotate(radians(e.angle));
        ellipse(0, 0, 5, 11);
        pop();
    }
    drawCircles(circles);

}

class RingPattern {
    constructor(config) {
        this.x = config.x;
        this.y = config.y;

        this.r0 = 6;
        this.r1 = 20;
        this.r2 = 35;
        this.r3 = 70;

        this.fillStyles = config.fillStyles; // [center, inner, outer]
        this.bgColors = config.bgColors;
        this.patternColors = config.patternColors;

        this.hasCurve = config.hasCurve ?? false;
        this.angle = config.angle ?? 0;
        this.curveFlipped = config.curveFlipped ?? false;
        this.hasDiagonal = config.hasDiagonal ?? false;
    }

    display() {
        // border circle
        noStroke();
        noFill();
        ellipse(this.x, this.y, this.r1 * 2);
        ellipse(this.x, this.y, this.r2 * 2);
        ellipse(this.x, this.y, this.r3 * 2);

        // Each Area：Center，Inner Circle，Outer Circle
        this.drawRegion(this.r0, this.r1, this.fillStyles[0], this.bgColors[0], this.patternColors[0]);
        this.drawRegion(this.r1, this.r2, this.fillStyles[1], this.bgColors[1], this.patternColors[1]);
        this.drawRegion(this.r2, this.r3, this.fillStyles[2], this.bgColors[2], this.patternColors[2]);

        // arc
        this.drawPinkCurve();
        // Center white circle
        noStroke();
        fill(230);
        ellipse(this.x, this.y, this.r0 * 2);  // control size using r0
        this.drawDiagonalLine();

    }

    drawRegion(innerR, outerR, style, bgColor, patternColor) {
        noStroke();
        // stroke(this.bgColors[0]);
        fill(bgColor);
        this.drawDonut(innerR, outerR);

        if (style === 'zigzag') {
            this.drawZigzagRing(innerR, outerR, 72, patternColor);
        } else if (style === 'dots') {
            this.drawDotsRing(innerR, outerR, 6, patternColor);
        } else if (style === 'layered') {
            this.drawLayeredRings(innerR, outerR, patternColor);
        }

    }

    drawDonut(innerR, outerR) {
        beginShape();
        for (let a = 0; a < TWO_PI; a += 0.05) {
            vertex(this.x + outerR * cos(a), this.y + outerR * sin(a));
        }
        beginContour();
        for (let a = TWO_PI; a > 0; a -= 0.05) {
            vertex(this.x + innerR * cos(a), this.y + innerR * sin(a));
        }
        endContour();
        endShape(CLOSE);
    }

    drawZigzagRing(innerR, outerR, steps, ringColor) {
        let offset = 5; // safe offset

        stroke(ringColor);
        strokeWeight(1.5);
        noFill();
        beginShape();
        for (let i = 0; i <= steps; i++) {
            let angle = TWO_PI * i / steps;
            let r = (i % 2 === 0) ? outerR - offset : innerR + offset;
            let x = this.x + r * cos(angle);
            let y = this.y + r * sin(angle);
            vertex(x, y);
        }
        endShape(CLOSE);
    }


    drawLayeredRings(innerR, outerR, baseColors) {
        let ringCount = 14;

        // Makes sure each colour appears once and uses 6 randomly
        let colorPool = [...baseColors];  // Three colours
        while (colorPool.length < ringCount) {
            colorPool.push(random(baseColors));
        }

        // shuffles the colour order
        shuffle(colorPool, true);

        // draw the rings
        noFill();
        strokeWeight(3);
        for (let i = 0; i < ringCount; i++) {
            let t = i / (ringCount - 1);
            let r = lerp(innerR, outerR, t);
            stroke(colorPool[i]);
            ellipse(this.x, this.y, r * 2);
        }
    }



    drawDotsRing(rMin, rMax, ringCount, dotColor) {
        fill(dotColor);
        noStroke();
        let margin = 3;

        for (let i = 0; i < ringCount; i++) {
            let r = lerp(rMin + margin, rMax - margin, i / (ringCount - 1));

            let baseCount = floor(r * 1);
            let count = baseCount + floor(random(-4, 4));

            for (let j = 0; j < count; j++) {
                let angle = TWO_PI * j / count + random(-0.05, 0.05);
                let radiusOffset = random(-1.2, 1.2);
                let effectiveR = r + radiusOffset;
                let x = this.x + effectiveR * cos(angle);
                let y = this.y + effectiveR * sin(angle);


                let sizeFactor = map(effectiveR, rMin, rMax, rMin * 0.03, rMax * 0.018); // Adjustable range
                let w = random(4, 6) * sizeFactor;
                let h = random(3, 5) * sizeFactor;

                let a = angle + random(-0.3, 0.3);

                push();
                translate(x, y);
                rotate(a);
                ellipse(0, 0, w, h);
                pop();
            }
        }
    }





    drawPinkCurve() {
        if (!this.hasCurve) return;

        push();
        translate(this.x, this.y);
        if (this.curveFlipped) {
            scale(-1, 1);
        }
        rotate(this.angle);
        stroke('#F35074');
        strokeWeight(4);
        noFill();
        let s = 0.5;
        bezier(
            0, 0,
            65 * s, -18 * s,
            193 * s, -10 * s,
            213 * s, 77 * s
        );
        pop();
    }


    drawDiagonalLine() {
        if (!this.hasDiagonal) return;

        push();
        translate(this.x, this.y);
        rotate(PI / 1.2);
        stroke('#FF0000');
        strokeWeight(2);
        line(-this.r3, 0, this.r3, 0);
        pop();
    }


}
