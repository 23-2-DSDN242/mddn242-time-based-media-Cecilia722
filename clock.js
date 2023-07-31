/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

let img;

function preload() {
  img_1 = loadImage('1plate.png');
  img_hour = loadImage('1meat.png');
  img_minute = loadImage('1asparagus.png');
  img_seconds = loadImage('1green_pea.png');
  img_fork = loadImage('1fork.png')
  img_knife = loadImage('1knife.png')
  img_table = loadImage('1table.png')
  img_sauce = loadImage('1sauce.png')


}

function draw_clock(obj) {
  let hours = obj.hours;
  let minute = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  background(50); //  beige
  fill(200); // dark grey
  textSize(40);

// testing text
  // text("Second:" + seconds, 80, 100);
  // text("Hours:" + hours, 50, 50);
  // text("minute:" + minute, 50, 150);

  // reset the images point to 12:00:00
  let seconds_origin = PI / 30 * 39.5
  let minute_origin = PI / 30 * 55.85
  let hour_origin = PI / 30 * 7


  // let millis_map= map(millis,0,999,0,60)
  // let seconds_rotation = map(millis_map,0,60,0,PI/30)








  // import the still images:
  translate(width / 2, height / 2);



  
  image(img_table, -480, -250, 960, 500)
 

  image(img_1, -200, -200, 400, 400)

  

 
  image(img_sauce, -200, -200, 400, 400)
  

 
 








// hours:
  push();
  let hoursWithFraction = obj.hours + (obj.minutes / 60);
  let hourRotateSmooth = map(hoursWithFraction, 0, 23, 0, 12);
  let rotation_1 = hour_origin + hourRotateSmooth
  rotate(rotation_1)
  image(img_hour, -200, -200, 400, 400)

  pop();




  // test texting:
  // push();
  // text("hwf" + hoursWithFraction, 50, 150)
  // text("hrs" + hourRotateSmooth, 100, 250)
  // text("rotation1" + rotation_1, 100, -100)
  // pop();



  // minutes:
  push();
  rotate(minute_origin + PI / 30 * minute)
  image(img_minute, -200, -200, 400, 400)

  pop();



  // seconds
  push();
  let secondsWithFraction = obj.seconds + (obj.millis / 999.0);
  let secondRotateSmooth = map(secondsWithFraction, 0, 60, 0, 360);
  let second_bounce =map(millis,0,999,0,TWO_PI)
  let second_phase=sin(second_bounce);
  let y_secondBounce_1=map(second_phase,-1,1,0,15)



  rotate(seconds_origin + secondRotateSmooth / 60)
  image(img_seconds, -200+y_secondBounce_1, -200+y_secondBounce_1, 400, 400)
  pop();




  let fork_bounce =map(millis,0,999,0,TWO_PI)
  let fork_phase=sin(fork_bounce);
  let y_forkBounce_1=map(fork_phase,-1,1,0,5)

//  alarm 
  if (alarm > 0 && alarm < 1) {
    y_forkBounce_1= map(fork_phase,-1,1,0,15);



  } else if (alarm == 0) {
    if (millis > 0)
    y_forkBounce_1= map(fork_phase,-1,1,-50,50)
  } 



  let knife_bounce =map(millis+500,0,999,0,TWO_PI)
  let knife_phase=sin(knife_bounce);
  let y_knifeBounce_1=map(knife_phase,-1,1,0,5)


  if (alarm > 0 && alarm < 1) {
    y_knifeBounce_1= map(knife_phase,-1,1,0,15);



  } else if (alarm == 0) {
    if (millis > 0)
    y_knifeBounce_1= map(knife_phase,-1,1,-50,50)
  } 

   


  let x_forkBounce=y_forkBounce_1/5
  let x_knifeBounce=y_knifeBounce_1/5

  let forkRoation=map(y_forkBounce_1,-50,50,-0.7,0.5)
  let knifeRoation=map(y_knifeBounce_1,-50,50,-0.7,0.5)




push();
rotate(forkRoation)

  image(img_fork, -480+x_forkBounce, -250 + y_forkBounce_1, 960, 500)
  pop();

  push();
  rotate(knifeRoation)
  image(img_knife, -480+x_knifeBounce, -250 +y_knifeBounce_1, 960+5, 500-10)
  pop();


 

let bounceHeight=6
let pea_bounce1 =map(millis,0,999,0,TWO_PI)
let pea_phase1=sin(pea_bounce1);
let y_bounce_1=map(pea_phase1,-1,1,0,bounceHeight)
let pea_y1=-50
let pea_x=-10

noStroke()
fill('#598c34')
ellipse(pea_x,pea_y1+y_bounce_1,20)



let pea_bounce2 =map(millis-200,0,999,0,TWO_PI)
let pea_phase2=sin(pea_bounce2);
let y_bounce_2=map(pea_phase2,-1,1,0,bounceHeight)


noStroke()
fill('#598c34')
ellipse(pea_x-17,pea_y1+30+y_bounce_2,20)


let pea_bounce3 =map(millis-400,0,999,0,TWO_PI)
let pea_phase3=sin(pea_bounce3);
let y_bounce_3=map(pea_phase3,-1,1,0,bounceHeight)


noStroke()
fill('#598c34')
ellipse(pea_x+20,pea_y1+y_bounce_3+40,20)


}