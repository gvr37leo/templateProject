/// <reference path="node_modules/utilsx/utils.ts" />
/// <reference path="node_modules/vectorx/vector.ts" />

var screensize = new Vector(document.documentElement.clientWidth,document.documentElement.clientHeight)
var crret = createCanvas(screensize.x,screensize.y)
var canvas = crret.canvas
var ctxt = crret.ctxt


loop((dt) => {
    dt /= 1000
    ctxt.clearRect(0,0,screensize.x,screensize.y)

    ctxt.fillRect(10,10,10,10)
})
