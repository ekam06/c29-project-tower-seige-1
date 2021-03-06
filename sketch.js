const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function setup(){

createCanvas(1000,700)

engine = Engine.create();
world = engine.world;

//first tower seige

fill("brown")
ground=new Ground(410,480,280,10)


fill("yellow")
box1=new Box(320,460,30,40)
box2=new Box(350,460,30,40)
box3=new Box(380,460,30,40)
box4=new Box(410,460,30,40)
box5=new Box(440,460,30,40)
box6=new Box(470,460,30,40)
box7=new Box(500,460,30,40)

box8=new Box(350,420,30,40)
box9=new Box(380,420,30,40)
box10=new Box(410,420,30,40)
box11=new Box(440,420,30,40)
box12=new Box(470,420,30,40)

box13=new Box(380,380,30,40)
box14=new Box(410,380,30,40)
box15=new Box(440,380,30,40)

box16=new Box(410,340,30,40)

//second tower seige
ground1=new Ground(785,300,250,10)


box17=new Box(720,280,30,40)
box18=new Box(750,280,30,40)
box19=new Box(780,280,30,40)
box20=new Box(810,280,30,40)
box21=new Box(840,280,30,40)

box22=new Box(750,240,30,40)
box23=new Box(780,240,30,40)
box24=new Box(810,240,30,40)

box25=new Box(780,200,30,40)


polygon=new Polygon(125,450)


slingshot=new Sling(polygon.body,{x:125,y:460})
}

function draw(){
 Engine.update(engine)
background("black")
rectMode(CENTER)
text (mouseX+ "," +mouseY,mouseX,mouseY)

ground.display()
ground1.display()
fill("lightBlue")
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
fill("pink")
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
fill(91,255,211)
box13.display()
box14.display()
box15.display()
fill(243,53,255)
box16.display()
fill("lightBlue")
box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
fill("pink")
box22.display()
box23.display()
box24.display()
fill(91,255,211)
box25.display()

polygon.display()
slingshot.display()
}

//making functions
function mouseDragged(){

Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){

slingshot.fly()

}