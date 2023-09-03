const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer();
  layer1.mode( SWIRL(5) );
  layer1.set_boundary(0,1000);

  var fourthBackground = new PLayer(fourthBackgroundLayer);
  fourthBackground.set_boundary();

  var thirdBackground = new PLayer(thirdBackgroundLayer);
  thirdBackground.set_boundary();

  var starBackground = new PLayer(secondBackgroundLayer);
  starBackground.set_boundary();

  var sunLayerB = new PLayer(sunBackground);
  sunLayerB.mode( RING );
  sunLayerB.set_boundary();

  var sunLayerA = new PLayer(sun);
  sunLayerA.set_boundary();
}

function sunBackground(x,y){
  let angleOffset = (360 / SLICE_COUNT)
  let backgroundArcStart = 284.5 - angleOffset;
  let backgroundArcEnd = 255 + angleOffset;

  fill(50, 57, 77);
  arc(x,y,500,500,backgroundArcStart,backgroundArcEnd);
}
function sun(x,y,animation,pScope){

(360 / SLICE_COUNT) / 1
  rotate(animation.wave());
  fill(244, 128, 55);
  noStroke();
  beginShape();
  vertex(0,0);
  vertex(-56,-195);
  vertex(-35,-170);
  vertex(-15,-180);
  vertex(0,-190);
  vertex(15,-180);
  vertex(35,-175);
  vertex(52,-195);
  endShape();

  fill(244,223,55);
  noStroke();
  beginShape();
  vertex(-1,9);
  vertex(-50,-170);
  vertex(-30,-160);
  vertex(-10,-170);
  vertex(0,-160);
  vertex(10,-165);
  vertex(30,-160);
  vertex(46,-170);
  endShape();
}
rgb(30, 34, 46)
rgb(50, 57, 77)
rgb(90, 103, 139)
rgb(116, 128, 165)

function secondBackgroundLayer(x,y){
  let angleOffset = (360 / SLICE_COUNT)
  let backgroundArcStart = 284.5 - angleOffset;
  let backgroundArcEnd = 255 + angleOffset;

  fill(70, 80, 108);
  arc(x,y,900,900,backgroundArcStart,backgroundArcEnd);
}

function thirdBackgroundLayer(x,y){
  let angleOffset = (360 / SLICE_COUNT)
  let backgroundArcStart = 284.5 - angleOffset;
  let backgroundArcEnd = 255 + angleOffset;

  fill(90, 103, 139);
  arc(x,y,1400,1400,backgroundArcStart,backgroundArcEnd);
}

function fourthBackgroundLayer(x,y){
  let angleOffset = (360 / SLICE_COUNT)
  let backgroundArcStart = 284.5 - angleOffset;
  let backgroundArcEnd = 255 + angleOffset;

  fill(116, 128, 165);
  arc(x,y,2000,2000,backgroundArcStart,backgroundArcEnd);
}









function faces(x, y, animation, pScope){
  
  scale(animation.frame*2);

  ellipse(0,0,50,50); // draw head
  fill(30);
  ellipse(-10,-10,10,10); //draw eye
  ellipse(10,-10,10,10); // draw eye
  arc(0,10,20,10,0,180); // draw mouth

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

}
function planet1(){
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(37,42,54)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd);
}
