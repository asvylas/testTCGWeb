
var canvas = document.querySelector('canvas'); // Selecting canvas.

canvas.width = window.innerWidth; // shorten
canvas.height = window.innerHeight; //shorten

var c = canvas.getContext('2d'); // shorten context
c.font = "10pt Goe";

/*Player Object*/

/*Static object*/
function Rocks(x, y, xx, yy){
	this.x = x;
	this.y = y;
	this.xx = xx;
	this.yy = yy;
	
/* Statics */	
this.animateRocks = function(){
    c.fillStyle = "#000000";
    c.fillRect( this.x, this.y, this.xx, this.yy);
	}
};

/*NPC Object*/
function Npc(x, y, xx, yy, xv, yv){
    this.x = x;
    this.y = y; 
    this.xx = xx;
    this.yy = yy;
    this.xv = xv;
    this.yv = yv;
    
this.animateNpc = function(){
    c.fillStyle = "#000000";
    c.fillRect( this.x, this.y, this.xx, this.yy);
    }

this.updateNpc = function(){

		/* coordinates of hit x vs x and y vs y and angle */	
        if (this.x + this.xx > window.innerWidth || this.x <= 0) {
           this.xv = -this.xv;
           }
			this.x += this.xv;
    
        if (this.y + this.yy > window.innerHeight || this.y <= 0) {
            this.yv = -this.yv;
        }
			this.y += this.yv;
    this.animateNpc();
    }
}

/*Current dynamic objects*/
const npc1 = new Npc(250, 150, 30, 30, 2, 2);
const npc2 = new Npc(250, 150, 30, 30, -2, 2);
const npc3 = new Npc(250, 150, 30, 30, 2, -2);
const npc4 = new Npc(250, 150, 30, 30, -2, 2);

/* Calling object function */

/*Animation render*/
function animate(){
    
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    npc1.updateNpc();
	npc2.updateNpc();
	npc3.updateNpc();
	npc4.updateNpc();
}
animate()


