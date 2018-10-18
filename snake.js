var snk;
var size;

function setup()
{
    var canvas=createCanvas(600, 600);
    background(0, 0, 0);
    canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
    frameRate(40);
    snk=new Snake();
}

function draw()
{
    snk.update();
    snk.show();
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
    }
    this.update=function()
    {
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
    }
    this.show=function()
    {
        fill(255,255,255);
        rect(this.x,this.y,10,10);
    }
}