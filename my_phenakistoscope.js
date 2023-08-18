const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(faces,);
  layer1.mode( SWIRL(5) );
  layer1.set_boundary(0,1000);

  var layer2 = new PLayer();
  layer2.mode( RING );
  layer2.set_boundary(0,700);

  var layer3 = new PLayer();
  layer3.mode( RING );
  layer3.set_boundary(0,450);

  var layer4 = new PLayer(sun);
  layer4.mode( RING );
  layer4.set_boundary(0,200);
}

function sun(x,y,animation,pScope){
  rotate(animation.wave());
  fill(244, 128, 55);
  noStroke();
  beginShape();
  vertex(0,0);
  vertex(-53,-195);
  vertex(-35,-170);
  vertex(-15,-180);
  vertex(0,-190);
  vertex(15,-180);
  vertex(35,-170);
  vertex(53,-195);
  endShape();

  fill(244,223,55);
  noStroke();
  beginShape();
  vertex(0,0);
  vertex(-50,-170);
  vertex(-30,-160);
  vertex(-10,-170);
  vertex(0,-160);
  vertex(10,-165);
  vertex(30,-160);
  vertex(50,-163);
  endShape();
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
