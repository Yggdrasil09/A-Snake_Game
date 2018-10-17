var x=0,y=0;

var dir=0;

function setup()
{
    var canvas=createCanvas(600, 600);
    background(0, 0, 0);
    canvas.position((windowWidth - width) / 2,(windowHeight - height) / 2);
}

function draw()
{
    rect(x,y,10,10);
    switch(dir)
    {
        case 0:
                y++;
                break;
        case 1:
                y--;
                break;
        case 2:
                x++;
                break;
        case 3:
                x--;
    }
}

function keyTyped()
{
    if(key=='s'||key=='S')
    {
        dir=0;
    }
    else if(key=='w'||key=='W')
    {
        dir=1;
    }
    else if(key=='d'||key=='D')
    {
        dir=2;
    }
    else if(key=='a'||key=='A')
    {
        dir=3;
    }
}