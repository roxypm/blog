// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Runner = Matter.Runner,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Constraint = Matter.Constraint

// create an engine
var engine, world
var circles = []
var mConstraint

let t = [
  'HTML',
  'CSS',
  'JS',
  'Threejs',
  '3S',
  'Webgl',
  'Embeded',
  'Design',
  'Axure',
  'PM',
  'ID',
  'MD',
  'Data',
  'AI',
  'C4D'
]
let r = [6, 7, 7, 6, 6, 3, 2, 3, 3, 4, 1, 1, 2, 4, 3]

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight)
  engine = Engine.create()
  world = engine.world
  Engine.run(engine)
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(width / 2, height, width * 3, 2, options)
  groundL = Bodies.rectangle(0, height / 2, 2, height * 3, options)
  groundR = Bodies.rectangle(width, height / 2, 2, height * 3, options)
  groundT = Bodies.rectangle(width / 2, -3000, width * 3, 100, options)
  World.add(world, [ground, groundL, groundR, groundT])
  for (var i = 0; i < t.length; i++) {
    var radius = map(r[i], 0, 10, 20, 70)
    var n = map(windowWidth, 400, 2000, 1, 2.5)
    circles.push(
      new Circle(random(width), random(-200, -2000), radius * n, t[i])
    )
  }

  var canvasmouse = Mouse.create(canvas.elt)
  canvasmouse.pixelRatio = 2
  var options = {
    mouse: canvasmouse
  }

  mConstraint = MouseConstraint.create(engine, options)
  World.add(world, mConstraint)
}

function draw() {
  pixelDensity(2)
  background('#445FAC')
  var percent = norm(sin(PI / 2 + frameCount / 100), -1, 1)
  var between = lerpColor(color('#eedacf'), color('#f3f3f3'), percent)
  fill(between)
  noStroke()
  rect(0, 0, width, height)

  fill('#ea7689')
  noStroke()
  var size = map(windowWidth, 375, 2000, 14, 22)
  textSize(size)
  textAlign(CENTER)
  textSize(size * 2.5)

  text('HI,我是ROXY', width / 2, height * 0.3)
  textSize(size)
  textAlign(CENTER)
  text('我是一名智能硬件产品经理', width / 2, height * 0.40)
  text('喜欢捣鼓各种新奇的智能硬件产品以及通信协议', width / 2, height * 0.43)
  text('也是一名IT前端开发者', width / 2, height * 0.46)
  text('喜欢用编程和设计去创造优雅并美观的作品', width / 2, height * 0.49)
  text('会在工作中借助编程手段千方百计地“偷懒”', width / 2, height * 0.52)
  text('90后，坐标深圳，喜欢旅游、网球，疯狂学习中…', width / 2, height * 0.55)

  for (var i = 0; i < t.length; i++) {
    circles[i].show()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
window.addEventListener('resize',()=>{
  console.log('resize')
  
})