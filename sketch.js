// Script to draw a curve using the following _text. The P5
// library calls setup() and draw() below, and provides the
// functions and variables not defined here.

const _text = Array.from("KeelyAnneKuester")
let _vertices

function _map_character(ch) {
    // Map a character to its vertex properties
    
    let margin = 50

    return {
        character: ch,
        x: int(random(margin, windowWidth - margin)),
        y: int(random(margin, windowHeight - margin)),
    }
}

function _draw_characters() {
    textSize(40)
    textAlign(CENTER)
    fill(0)
    for (let vertex of _vertices) {
        text(vertex.character, vertex.x, vertex.y)
    }
}

function _draw_line() {
    stroke(100)
    noFill();
    beginShape();

    // The first and last points in a curveVertex() line are used to
    // guide the beginning and end of the curve.
    curveVertex(0, 0)

    for (let vertex of _vertices) {
        curveVertex(vertex.x, vertex.y)
    }

    curveVertex(windowWidth, windowHeight)

    endShape()
}

function setup() {
    // Called by P5 once

    createCanvas(windowWidth, windowHeight)
    background(255)
    _vertices = _text.map(_map_character)
}

function draw() {
    // Called by P5 for each frame
   
    _draw_characters()
    _draw_line()
}
