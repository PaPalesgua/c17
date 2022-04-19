var box 

function setup() 
{
  createCanvas(400, 400);
 box = new Box(55,12,40,52,1,1)
}

function draw() 
{
  background(220);

   box.show()
    

  box.movedown ()
}

