const SLICE_COUNT = 16;

function setup_pScope(pScope) {
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers() {

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

  let = new PLayer(stars);

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
function stars(){
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
  translate(0, 250);
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
  translate(-200, -300);
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
  translate(0, 200);
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
  translate(260,200);
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

  fill(255, 255, 255); // Small Star
  noStroke();
  scale(.5);
  translate(-200,600);
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

  fill(255, 255, 255); // Small Star
  noStroke();
  translate(140,-300);
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

  fill(255, 255, 255); // Small Star
  noStroke();
  translate(-190,90);
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

  fill(255, 255, 255); // Small Star
  noStroke();
  translate(120,90);
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

  fill(255, 255, 255); // Small Star
  noStroke();
  translate(-120,-500);
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

  fill(255, 255, 255); // Small Star
  noStroke();
  translate(300,-500);
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

  fill(255, 255, 255); // Small Star
  noStroke();
  translate(-400,-100);
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

  
  fill(255, 255, 255); // Small Star
  noStroke();
  translate(170,240);
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

  fill(255, 255, 255); // Small Star
  noStroke();
  translate(-200,150);
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

  fill(255, 255, 255); // Small Star
  noStroke();
  translate(-80,150);
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

  
  fill(255, 255, 255); // Small Star
  noStroke();
  translate(600,-700);
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

function mercury(x, y, animation) {
  if ((animation.frame * SLICE_COUNT) == 13) {
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
  if ((animation.frame * SLICE_COUNT) == 14) {
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
  if ((animation.frame * SLICE_COUNT) == 8) {
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
  if ((animation.frame * SLICE_COUNT) == 8) {
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
  if ((animation.frame * SLICE_COUNT) == 7) {
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

    fill(103, 206, 224); //third line blue
    noStroke();
    beginShape();
    vertex(-290,-500);
    vertex(-60,-600);
    vertex(-200,-500);
    vertex(-330,-470);
    endShape();

    fill(230, 220, 117); //third line yellow
    noStroke();
    beginShape();
    vertex(-280,-500);
    vertex(-70,-590);
    vertex(-210,-500);
    vertex(-320,-480);
    endShape();

    fill(103, 206, 224); //second line
    noStroke();
    beginShape();
    vertex(-340,-550);
    vertex(-90,-650);
    vertex(-150,-600);
    vertex(-290,-550);
    endShape();

    fill(103, 206, 224); //first line blue
    noStroke();
    beginShape();
    vertex(-260,-650);
    vertex(-140,-680);
    vertex(-150,-660);
    vertex(-340,-580);
    endShape();

    fill(133,80,27); //first line brown
    noStroke();
    beginShape();
    vertex(-250,-650);
    vertex(-150,-675);
    vertex(-160,-660);
    vertex(-325,-590);
    endShape();

    fill(103, 206, 224); //fourth line
    noStroke();
    beginShape();
    vertex(-160,-490);
    vertex(-60,-560);
    vertex(-150,-480);
    vertex(-310,-450);
    endShape();

    fill(103, 206, 224); //fifth line blue
    noStroke();
    beginShape();
    vertex(-130,-430);
    vertex(-70,-490);
    vertex(-120,-480);
    vertex(-280,-430);
    endShape();

    fill(133, 80, 27); //fifth line brown
    noStroke();
    beginShape();
    vertex(-140,-440);
    vertex(-80,-480);
    vertex(-110,-470);
    vertex(-270,-430);
    endShape();
  }
}

function saturn(x, y, animation) {
  if ((animation.frame * SLICE_COUNT) == 6) {

    fill(226, 230, 112); //ring
    noStroke();
    beginShape();
    curveVertex(0, 400);
    curveVertex(360, 670);
    curveVertex(90, 650);
    curveVertex(0,70);
    endShape();

    fill(188, 125, 189);
    noStroke();
    ellipse(230, 660, 210);

    fill(105, 36, 45); //above middle line
    noStroke();
    beginShape();
    curveVertex(0, 650);
    curveVertex(300, 735);
    curveVertex(155, 735);
    curveVertex(0,660);
    endShape();

    fill(112, 62, 128); //above middle line
    noStroke();
    beginShape();
    curveVertex(0, 650);
    curveVertex(320, 710);
    curveVertex(140, 720);
    curveVertex(0,600);
    endShape();

    fill(105, 36, 45); //above middle line
    noStroke();
    beginShape();
    curveVertex(0, 650);
    curveVertex(325, 695);
    curveVertex(135, 700);
    curveVertex(0,600);
    endShape();

    fill(112, 62, 128); //above middle line
    noStroke();
    beginShape();
    curveVertex(0, 650);
    curveVertex(330, 685);
    curveVertex(125, 685);
    curveVertex(0,600);
    endShape();

    fill(105, 36, 45); //above middle line
    noStroke();
    beginShape();
    curveVertex(0, 650);
    curveVertex(330, 670);
    curveVertex(130, 675);
    curveVertex(0,600);
    endShape();

    fill(112, 62, 128); //above middle line
    noStroke();
    beginShape();
    curveVertex(0, 700);
    curveVertex(335, 660);
    curveVertex(125, 665);
    curveVertex(350,700);
    endShape();

    fill(105, 36, 45); //maroon middle line
    noStroke();
    beginShape();
    curveVertex(250, 700);
    curveVertex(335, 650);
    curveVertex(125, 650);
    curveVertex(250,700);
    endShape();

    fill(112, 62, 128); //purple under middle line
    noStroke();
    beginShape();
    curveVertex(250, 700);
    curveVertex(330, 635);
    curveVertex(130, 640);
    curveVertex(250,700);
    endShape();

    fill(105, 36, 45); //under middle line
    noStroke();
    beginShape();
    curveVertex(250, 700);
    curveVertex(325, 625);
    curveVertex(135, 620);
    curveVertex(250,700);
    endShape();

    fill(112, 62, 128); //under middle line
    noStroke();
    beginShape();
    curveVertex(250, 700);
    curveVertex(320, 605);
    curveVertex(140, 610);
    curveVertex(250,700);
    endShape();

    fill(105, 36, 45); //under middle line
    noStroke();
    beginShape();
    curveVertex(250, 700);
    curveVertex(310, 590);
    curveVertex(150, 595);
    curveVertex(250,700);
    endShape();

    fill(112, 62, 128); //under middle line
    noStroke();
    beginShape();
    curveVertex(250, 700);
    curveVertex(300, 580);
    curveVertex(165, 575);
    curveVertex(250,650);
    endShape();

        fill(226, 230, 112); //ring
    noStroke();
    beginShape();
    curveVertex(110, 900);
    curveVertex(360, 670);
    curveVertex(90, 650);
    curveVertex(500,890);
    endShape();
  }
}

function uranus(x, y, animation) {
  if ((animation.frame * SLICE_COUNT) == 4) {
    
    fill(13, 34, 130);//ring
    noStroke();
    beginShape();
    curveVertex(-300, -600);
    curveVertex(-500, -550);
    curveVertex(-500, -850);
    curveVertex(-300,-600);
    endShape();

    fill(121, 158, 209);
    noStroke();
    ellipse(-500, -700, 200);

    fill(165, 165, 255);
    beginShape();
    vertex(-500, -600);
    vertex(-450, -700);
    vertex(-420, -750);
    vertex(-500, -800);
    endShape();

    fill(165, 165, 255);
    beginShape();
    vertex(-570, -630);
    vertex(-540, -660);
    vertex(-510, -800);
    vertex(-580, -750);
    endShape();

    fill(165, 165, 255);
    beginShape();
    vertex(-540, -610);
    vertex(-520, -610);
    vertex(-510, -700);
    vertex(-510, -750);
    endShape();

    fill(165, 165, 255);
    beginShape();
    vertex(-480, -600);
    vertex(-450, -630);
    vertex(-410, -700);
    vertex(-410, -740);
    endShape();

    fill(13, 34, 130);//ring
    noStroke();
    beginShape();
    curveVertex(-600, -500);
    curveVertex(-500, -550);
    curveVertex(-505, -850);
    curveVertex(-600,-500);
    endShape();
  }
}

function neptune(x, y, animation) {
  if ((animation.frame * SLICE_COUNT) == 3) {
    fill(27, 27, 69);
    noStroke();
    ellipse(500, -670, 240);

    fill(38, 44, 163);
    beginShape();
    vertex(500, -600);
    vertex(450, -700);
    vertex(460, -780);
    vertex(500, -790);
    endShape();

    fill(38, 44, 163);
    beginShape();
    vertex(500, -550);
    vertex(450, -600);
    vertex(390, -700);
    vertex(420, -730);
    endShape();

    fill(38, 44, 163);
    beginShape();
    vertex(540, -560);
    vertex(530, -600);
    vertex(540, -700);
    vertex(580, -760);
    endShape();

    fill(38, 44, 163);
    beginShape();
    vertex(510, -670);
    vertex(520, -550);
    vertex(530, -740);
    vertex(520, -790);
    endShape();

    fill(38, 44, 163);
    beginShape();
    vertex(610, -670);
    vertex(590, -590);
    vertex(580, -730);
    vertex(590, -730);
    endShape();

    fill(38, 44, 163);
    beginShape();
    vertex(440, -570);
    vertex(400, -605);
    vertex(430, -700);
    vertex(420, -700);
    endShape();
  }
}

function pluto(x,y, animation) {
  if ((animation.frame * SLICE_COUNT) == 13) {
    fill(26, 58, 237);
    noStroke();
    ellipse(-930, 0, 40);
    fill(116, 173, 252);
    ellipse(-930, 0, 30);
  }
}

function sunBackground(x, y) {
  let angleOffset = (360 / SLICE_COUNT)
  let backgroundArcStart = 281 - angleOffset;
  let backgroundArcEnd = 259 + angleOffset;

  fill(50, 57, 77);
  noStroke();
  arc(x, y, 500, 500, backgroundArcStart, backgroundArcEnd);
}

function sun(x, y, animation) {

  (360 / SLICE_COUNT) / 1
  rotate(animation.wave());
  fill(244, 128, 55);
  noStroke();
  beginShape();
  vertex(0, 0);
  vertex(-43, -195);
  vertex(-25, -170);
  vertex(-15, -180);
  vertex(0, -190);
  vertex(15, -180);
  vertex(25, -175);
  vertex(39, -195);
  endShape();

  fill(244, 223, 55);
  noStroke();
  beginShape();
  vertex(-1, 9);
  vertex(-40, -170);
  vertex(-20, -160);
  vertex(-10, -170);
  vertex(0, -160);
  vertex(10, -165);
  vertex(20, -160);
  vertex(35, -170);
  endShape();
}

function secondBackgroundLayer(x, y) {
  let angleOffset = (360 / SLICE_COUNT)
  let backgroundArcStart = 281 - angleOffset;
  let backgroundArcEnd = 259 + angleOffset;

  fill(70, 80, 108);
  noStroke();
  arc(x, y, 900, 900, backgroundArcStart, backgroundArcEnd);

}

function thirdBackgroundLayer(x, y) {
  let angleOffset = (360 / SLICE_COUNT)
  let backgroundArcStart = 281 - angleOffset;
  let backgroundArcEnd = 259 + angleOffset;

  fill(90, 103, 139);
  noStroke();
  arc(x, y, 1400, 1400, backgroundArcStart, backgroundArcEnd);
}

function fourthBackgroundLayer(x, y) {
  let angleOffset = (360 / SLICE_COUNT)
  let backgroundArcStart = 281 - angleOffset;
  let backgroundArcEnd = 259 + angleOffset;

  fill(116, 128, 165);
  noStroke();
  arc(x, y, 2000, 2000, backgroundArcStart, backgroundArcEnd);
}