//Don't hit command/ctrl A click and drag/highlight all of it or else Github will put a lot of extra stuff
//If you want more more/less colors or more/less time between colors please email me! (123097@usd230.org) and put the subject-
//as "Background-Color:Edit" thanks

//or just change the color and time your self!
//to change the color  ["Color1", "color2"]; use normal colors that are well knowed or look up "css colors"
const color = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige", "Bisque", "Black", "BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","Navy","OldLace","Olive","OliveDrab","Orange","PeachPuff","Peru", "Pink","Plum","PowderBlue","Purple","RebeccaPurple","Sienna","Silver","SkyBlue","SlateBlue", "SlateGray","SlateGrey","Snow",];
const time = 2000 //in milliseconds
const randomColor = true; //if you want the colors to go in order or be random true for random false for not random

//don't change anything below unless you know what you are doing
var i = 0;
function change(){
  if(randomColor){
     document.querySelector("body").style.backgroundColor = color[Math.floor(Math.random() * color.length)];
  } else{
    document.querySelector("body").style.backgroundColor = color[i];
    //this is if 'i' is greater than the length of color
    if(i === color.length){
      //sets it to -1
      i = -1;
    }
    //adds 1 to i so next time it will do the next color
    i++
  } 
}
//Starts the color changing
setInterval(change, time);
//By Preston Allred
