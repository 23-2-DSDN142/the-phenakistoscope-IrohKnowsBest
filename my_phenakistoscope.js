const SLICE_COUNT = 12;

function setup_pScope(pScope) {
  pScope.output_mode(STATIC_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope) {

  new PLayer(null, 220); //lets us draw the whole circle background, ignoring the boundaries

  let layer1 = new PLayer();
  layer1.mode(SWIRL(5));
  layer1.set_boundary(0, 1000);

  let fourthBackground = new PLayer(fourthBackgroundLayer);
  fourthBackground.set_boundary();

  let thirdBackground = new PLayer(thirdBackgroundLayer);
  thirdBackground.set_boundary();

  let secondBackground = new PLayer(secondBackgroundLayer);
  secondBackground.set_boundary();


  let sunLayerB = new PLayer(sunBackground);
  sunLayerB.mode(RING);

  let = new PLayer(sun);

  let = new PLayer(mercury);

  let = new PLayer(venus);

  let = new PLayer(earth);
  let = new PLayer(moon);

  let = new PLayer(mars);

  let = new PLayer(jupiter);

  let = new PLayer(saturn);

  let = new PLayer(uranus);

  let = new PLayer(neptune);

  let = new PLayer(pluto);
}

function mercury(x, y, animation) {
  if ((animation.frame * SLICE_COUNT) == 10) {
    fill(130, 116, 143);
    noStroke();
    ellipse(-100, -260, 120);
    fill(98, 63, 112);
    noStroke();
    beginShape();
    vertex(-70,-315);
    vertex(-65,-310);
    vertex(-60,-290);
    vertex(-70,-280);
    vertex(-65,-270);
    vertex(-70,-260);
    vertex(-65,-250);
    vertex(-60,-240);
    vertex(-65,-230);
    vertex(-70,-220);
    vertex(-75,-210);
    vertex(-70,-205);
    vertex(-90,-200);
    vertex(-95,-205);
    vertex(-90,-210);
    vertex(-85,-220);
    vertex(-80,-230);
    vertex(-75,-240);
    vertex(-80,-250);
    vertex(-85,-260);
    vertex(-80,-270);
    vertex(-85,-280);
    vertex(-80,-290);
    vertex(-80,-310);
    vertex(-85,-320);
    endShape();

    beginShape();
    vertex(-95,-320);
    vertex(-95,-310);
    vertex(-90,-290);
    vertex(-100,-280);
    vertex(-95,-270);
    vertex(-100,-260);
    vertex(-95,-250);
    vertex(-90,-240);
    vertex(-95,-230);
    vertex(-100,-220);
    vertex(-105,-210);
    vertex(-100,-200);
    vertex(-120,-200);
    vertex(-125,-210);
    vertex(-120,-215);
    vertex(-115,-220);
    vertex(-110,-230);
    vertex(-105,-240);
    vertex(-110,-250);
    vertex(-115,-260);
    vertex(-110,-270);
    vertex(-115,-280);
    vertex(-110,-290);
    vertex(-110,-310);
    vertex(-115,-320);
    endShape();
  }
}

function venus(x, y, animation) {
  if ((animation.frame * SLICE_COUNT) == 11) {
    fill(196, 137, 49);
    noStroke();
    ellipse(-160, 300, 160);

    fill(173, 100, 16);
    beginShape();
    vertex(-80, 300);
    vertex(-240, 320);
    vertex(-240, 320);
    vertex(-80, 320);
    endShape();

    beginShape();
    vertex(-105, 340);
    vertex(-215, 360);
    vertex(-230, 340);
    vertex(-90, 340);
    endShape();

    beginShape();
    vertex(-100, 280);
    vertex(-230, 260);
    vertex(-240, 280);
    vertex(-100, 280);
    endShape();

    beginShape();
    vertex(-140, 220);
    vertex(-210, 250);
    vertex(-210, 250);
    vertex(-105, 240);
    endShape();
  }
}

function earth(x, y, animation) {
  if ((animation.frame * SLICE_COUNT) == 7) {
    fill(13, 82, 219);
    noStroke();
    ellipse(-300, 200, 200);
    fill(23, 153, 42);
    noStroke();
    beginShape();
    vertex(-200, 200);
    vertex(-210, 240);
    vertex(-230, 270);
    vertex(-270, 270);
    vertex(-290, 250);
    vertex(-270, 230);
    vertex(-270, 220);
    vertex(-250, 200);
    vertex(-230, 190);
    endShape();

    beginShape();
    vertex(-320, 200);
    vertex(-320, 240);
    vertex(-350, 270);
    vertex(-360, 270);
    vertex(-380, 250);
    vertex(-390, 230);
    vertex(-400, 220);
    vertex(-400, 200);
    vertex(-360, 190);
    endShape();

    beginShape();
    vertex(-300, 115);
    vertex(-270, 125);
    vertex(-270, 145);
    vertex(-260, 175);
    vertex(-260, 175);
    vertex(-280, 185);
    vertex(-290, 195);
    vertex(-320, 175);
    vertex(-330, 145);
    endShape();
  }
}

function moon(x, y, animation) {
  if ((animation.frame * SLICE_COUNT) == 7) {
    fill(152, 153, 156);
    noStroke();
    ellipse(-400, 90, 70);
    fill(95, 99, 95);
    strokeWeight(2);
    stroke(99, 97, 95);
    ellipse(-395, 115, 10);
    ellipse(-380, 100, 13);
    ellipse(-400, 70, 15);
    ellipse(-420, 100, 15);
    ellipse(-400, 92, 10);
    ellipse(-380, 80, 11);
    ellipse(-420, 80, 8);
    ellipse(-411, 113, 6);
  }
}

function mars(x, y, animation) {
  if ((animation.frame * SLICE_COUNT) == 5) {
    fill(145, 32, 32);
    noStroke();
    ellipse(550, -100, 120);

    fill(189, 72, 72);
    beginShape();
    vertex();
    bezierVertex(607, -110, 560, -140, 500, -70);
    endShape();

    beginShape();
    vertex();
    bezierVertex(606, -80, 580, -105, 515, -50);
    endShape();

    beginShape();
    vertex();
    bezierVertex(590, -145, 540, -170, 490, -100);
    endShape();
  }
}

function jupiter(x, y, animation) {
  if ((animation.frame * SLICE_COUNT) == 1) {
    fill(50, 159, 237);
    noStroke();
    ellipse(-200, -550, 300);

    fill(103, 206, 224);
    noStroke();
    beginShape();
    vertex(-290,-500);
    vertex(-60,-600);
    vertex(-200,-500);
    vertex(-330,-470);
    endShape();

    fill(103, 206, 224);
    noStroke();
    beginShape();
    vertex(-340,-550);
    vertex(-90,-650);
    vertex(-150,-600);
    vertex(-290,-550);
    endShape();

    fill(103, 206, 224);
    noStroke();
    beginShape();
    vertex(-260,-650);
    vertex(-140,-680);
    vertex(-150,-660);
    vertex(-340,-590);
    endShape();

    fill(103, 206, 224);
    noStroke();
    beginShape();
    vertex(-160,-490);
    vertex(-60,-560);
    vertex(-150,-480);
    vertex(-310,-450);
    endShape();

    fill(103, 206, 224);
    noStroke();
    beginShape();
    vertex(-130,-430);
    vertex(-70,-490);
    vertex(-120,-480);
    vertex(-280,-430);
    endShape();

    // fill(133, 80, 27);
    // noStroke();
    // beginShape();
    // curveVertex(-0, -900);
    // curveVertex(-350, -550);
    // curveVertex(-40, -550);
    // curveVertex(-0,-900);
    // endShape();

    // fill(230, 220, 117);
    // noStroke();
    // beginShape();
    // curveVertex(-0, -700);
    // curveVertex(-350, -550);
    // curveVertex(-50, -550);
    // curveVertex(-0,-700);
    // endShape();

    // fill(133, 80, 27);
    // noStroke();
    // beginShape();
    // curveVertex(-0, -900);
    // curveVertex(-380, -500);
    // curveVertex(-80, -460);
    // curveVertex(-0,-900);
    // endShape();

    // fill(230, 220, 117);
    // noStroke();
    // beginShape();
    // curveVertex(-0, -700);
    // curveVertex(-310, -450);
    // curveVertex(-80, -460);
    // curveVertex(-0,-700);
    // endShape();

    // ellipse(-200,-500,290,20);

    // fill(230, 220, 117);
    // ellipse(-200,-510,290,20);

    // fill(133, 80, 27);
    // ellipse(-200,-520,300,20);
  }
}

function saturn(x, y, animation) {
  if ((animation.frame * SLICE_COUNT) == 5) {
    fill(188, 125, 189);
    noStroke();
    ellipse(230, 660, 210);
  }
}

function uranus(x, y, animation) {
  if ((animation.frame * SLICE_COUNT) == 3) {
    fill(121, 158, 209);
    noStroke();
    ellipse(-500, -700, 200);
  }
}

function neptune(x, y, animation) {
  if ((animation.frame * SLICE_COUNT) == 3) {
    fill(27, 27, 69);
    noStroke();
    ellipse(500, -670, 240);
  }
}

function pluto(x, y, animation) {
  if ((animation.frame * SLICE_COUNT) == 9) {
    fill(8, 0, 255);
    noStroke();
    ellipse(-970, 0, 40);
  }
}


function sunBackground(x, y) {
  let angleOffset = (360 / SLICE_COUNT)
  let backgroundArcStart = 284.5 - angleOffset;
  let backgroundArcEnd = 255 + angleOffset;

  fill(50, 57, 77);
  noStroke();
  arc(x, y, 500, 500, backgroundArcStart, backgroundArcEnd);
}

function sun(x, y, animation, pScope) {

  (360 / SLICE_COUNT) / 1
  rotate(animation.wave());
  fill(244, 128, 55);
  noStroke();
  beginShape();
  vertex(0, 0);
  vertex(-56, -195);
  vertex(-35, -170);
  vertex(-15, -180);
  vertex(0, -190);
  vertex(15, -180);
  vertex(35, -175);
  vertex(52, -195);
  endShape();

  fill(244, 223, 55);
  noStroke();
  beginShape();
  vertex(-1, 9);
  vertex(-50, -170);
  vertex(-30, -160);
  vertex(-10, -170);
  vertex(0, -160);
  vertex(10, -165);
  vertex(30, -160);
  vertex(46, -170);
  endShape();
}

function secondBackgroundLayer(x, y, animation) {
  let angleOffset = (360 / SLICE_COUNT)
  let backgroundArcStart = 284.5 - angleOffset;
  let backgroundArcEnd = 255 + angleOffset;

  fill(70, 80, 108);
  noStroke();
  arc(x, y, 900, 900, backgroundArcStart, backgroundArcEnd);


  fill(255, 255, 255); //Star
  noStroke();
  translate(-50, -400);
  beginShape();
  vertex(-5, 5);
  vertex(0, 20);
  vertex(5, 5);
  vertex(20, 0);
  vertex(5, -5);
  vertex(0, -20);
  vertex(-5, -5);
  vertex(-20, 0);
  endShape();

  fill(255, 255, 255); //Star
  noStroke();
  translate(100, -470);
  beginShape();
  vertex(-5, 5);
  vertex(0, 20);
  vertex(5, 5);
  vertex(20, 0);
  vertex(5, -5);
  vertex(0, -20);
  vertex(-5, -5);
  vertex(-20, 0);
  endShape();

  fill(255, 255, 255); //Star
  noStroke();
  translate(40, 250);
  beginShape();
  vertex(-5, 5);
  vertex(0, 20);
  vertex(5, 5);
  vertex(20, 0);
  vertex(5, -5);
  vertex(0, -20);
  vertex(-5, -5);
  vertex(-20, 0);
  endShape();
}

function thirdBackgroundLayer(x, y) {
  let angleOffset = (360 / SLICE_COUNT)
  let backgroundArcStart = 284.5 - angleOffset;
  let backgroundArcEnd = 255 + angleOffset;

  fill(90, 103, 139);
  noStroke();
  arc(x, y, 1400, 1400, backgroundArcStart, backgroundArcEnd);
}

function fourthBackgroundLayer(x, y) {
  let angleOffset = (360 / SLICE_COUNT)
  let backgroundArcStart = 284.5 - angleOffset;
  let backgroundArcEnd = 255 + angleOffset;

  fill(116, 128, 165);
  noStroke();
  arc(x, y, 2000, 2000, backgroundArcStart, backgroundArcEnd);
}