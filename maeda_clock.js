// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {

  let hours = obj.hours;
  let minute = obj. minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;

  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(200); // dark grey
  textSize(60);
  textAlign(CENTER, CENTER);
  // text("Second:"+seconds, width/2, height/2);
  // text("Hours:"+hours, 50, 50);
  
  let secondsWithFraction = (millis/25)
  let minute_size=map(secondsWithFraction,0,60,40,300);
  let hour_size=map(secondsWithFraction,0,60,40,300);
  
  // text(int(secondsWithFraction), 300, 100)

  if (secondsWithFraction<= 20){
    minute_size= map(secondsWithFraction,0,20,40,300);
    print("chage 1")
  }
  else{
    minute_size= map(secondsWithFraction,20,40,300,40) 
    print("chage 2")
  }
  textSize(minute_size);
  text(minute,width/3*2-50,height/2)


  
   
  if (secondsWithFraction>= 20){
    hour_size= map(secondsWithFraction,20,40,40,300);
    print("chage 3")
  }
  else{
    hour_size= map(secondsWithFraction,0,20,300,40) 
    print("chage 4")
  }

  textSize(hour_size);
  text (hours,width/3+50,height/2);


//   let Fraction_2 = (millis/25)
//   let hours_size=map(Fraction_2,0,60,300,064);
//   if (Fraction_2 <= 30){
//     let minute_size=map(Fraction_2,0,60,40,300);
//   }
//   else{
//     let minute_size= map(Fraction_2,0,60,300,40) 
//   }
//   textSize(hours_size);
//   text (hours,width/4,height/2);

// let seconds_radius=map(seconds,0,59,1,150);
// ellipse(100,100,seconds_radius);


}
