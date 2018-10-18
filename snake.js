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
    relocat();
}

function relocat()
{
    var cols=floor(width/slength);
    var rows=floor(height/slength);
    food=createVector(floor(random(cols)),floor(random(rows)));
    food.mult(slength);
}

function draw()
{
    background(0, 0, 0);
    snk.update();
    snk.show();
    if(snk.eatfood(food))
    {
        relocat();
    }
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
    this.total=0;
    this.tail=[];
    this.direc=function(x,y)
    {
        this.xSpeed=x;
        this.ySpeed=y;
    };
    this.eatfood=function(pos)
    {
        var d=dist(this.x,this.y,pos.x,pos.y);
        if(d<1)
        {
            this.total++;
            return true;
        }
        else
        {
            return false;
        }
    };
    this.update=function()
    {
        if(this.total===this.tail.length)
        {
            for(var i=0;i<this.tail.length-1;i++)
            {
                this.tail[i]=this.tail[i+1];
            }
        }
        this.tail[this.total-1]=createVector(this.x,this.y);
        this.x+=this.xSpeed*slength;
        this.y+=this.ySpeed*slength;

        this.x=constrain(this.x,0,width-slength);
        this.y=constrain(this.y,0,height-slength);

    };
    this.show=function()
    {
        fill(255,255,255);
        for(var i=0;i<this.total;i++)
        {
            rect(this.tail[i].x,this.tail[i].y,slength,slength);
        }
        rect(this.x,this.y,slength,slength);
    };
}