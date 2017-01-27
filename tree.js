var angle;
var s;
function setup(){
	createCanvas(600,400);
	sliderAngle = createSlider(0,PI/4,PI/8,0.01);
	sliderLen = createSlider(0.02,0.8,0.67,0.01);
	sliderChild = createSlider(1,10,2);
}

function draw(){
	background(51);
	var len = 100;
	stroke(255);
	translate(width/2,height);
	totalChildren = sliderChild.value();
	branch(80,totalChildren);
}

function branch(len,children){
	line(0,0,0,0-len);
	translate(0,-len);
	angle = sliderAngle.value();
	s = sliderLen.value();
	if(children>0){
		push();
		rotate(angle);
		branch(len*s,children-1);
		pop();
		push();
		rotate(-angle);
		branch(len*s,children-1);
		pop();
	}
}