var width, height, ball;
function setup() 
{
    width=600;
    height=600;
    ball = new Ball();
    createCanvas(width, height);
}

function draw() 
{
    background(0);
    ball.show();
}

class Ball 
{
    constructor()
    {
        this.x=width / 2;
        this.y=height / 2;
        this.xspeed=0;
        this.yspeed=0;
    }

    show()
    {
        ellipseMode(CENTER);
        fill(255);
        ellipse(this.x, this.y, 20, 20);
    }
}



