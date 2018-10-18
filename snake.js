var snk;

var slength=15;

var food;

function setup()
{
    var canvas=createCanvas(600, 600);
    background(0, 0, 0);
    canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
    frameRate(40);
    snk=new Snake();
    frameRate(10);
    food=createVector(random(width),random(height));
}

function draw()
{
    background(0, 0, 0);
    snk.update();
    snk.show();
    fill(230,30,230);
    rect(food.x,food.y,slength,slength);
}

function keyPressed()
{
    if(keyCode===UP_ARROW)
    {
        snk.direc(0,-1);
    }
    else if(keyCode===DOWN_ARROW)
    {
        snk.direc(0,1);
    }
    else if(keyCode===RIGHT_ARROW)
    {
        snk.direc(1,0);
    }
    else if(keyCode===LEFT_ARROW)
    {
        snk.direc(-1,0);
    }
}

function Snake()
{
    this.x=0;
    this.y=0;
    this.xSpeed=1;
    this.ySpeed=0;
    this.direc=function(x,y)
    {
        this.xSpeed=x;
        this.ySpeed=y;
    };
    this.update=function()
    {
        this.x+=this.xSpeed*slength;
        this.y+=this.ySpeed*slength;

        this.x=constrain(this.x,0,width-slength);
        this.y=constrain(this.y,0,height-slength);
    };
    this.show=function()
    {
        fill(255,255,255);
        rect(this.x,this.y,slength,slength);
    };
}