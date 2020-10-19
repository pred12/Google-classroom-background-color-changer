let color = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige", "Bisque", "Black", "BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","Navy","OldLace","Olive","OliveDrab","Orange","PeachPuff","Peru", "Pink","Plum","PowderBlue","Purple","RebeccaPurple","Sienna","Silver","SkyBlue","SlateBlue", "SlateGray","SlateGrey","Snow"];
let time = 2000 //in milliseconds
let randomColor = true; //if you want the colors to go in order or be random true for random false for not random

let i = 0;
let colorRN = Math.floor(Math.random() * color.length);
async function change(){
  await function(){
    if(i === color.length){
    //sets it to 0
    i = 0;
  }};
  if(randomColor){
     document.querySelector("body").style.backgroundColor = color[colorRN];
     document.querySelector("joJglb dxu4Dd").style.backgroundColor = color[colorRN];
      
  } else{
    document.querySelector("body").style.backgroundColor = color[i];
    document.querySelector("joJglb dxu4Dd").style.backgroundColor = color[i]
    i++;
  } 
}
setInterval(change, time);
//By Preston Allred
