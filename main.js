
const arr = ['./headerpic/0.png', './headerpic/1.png', './headerpic/2.png','./headerpic/0R.png', './headerpic/1R.png','./headerpic/2R.png'];
let i =0;
let r =0;
let m = 0;
//cycling through pictures on header 
$(document).ready(function(){
            setInterval(function(){
                if($(window).width() < 968){
                    $("#left-head").attr('src',arr[m]);
                    console.log("mid "+arr[m]);
                    m++
                    console.log(m);
                    if(m === (arr.length+1)){
                        m=0;
                    }
                }
                else{
                    $("#left-head").attr('src', './headerpic/'+i+'.png');
                    $("#right-head").attr('src', './headerpic/'+r+'R.png');

                    console.log('/headerpic/'+i+'.png');
                    i++;
                    r++
                    console.log(i);
                    if( i === 3){
                        i = 0;
                    }
                    console.log(r);
                    if( r === 3){
                        r = 0;
                    }
                }
            }, 5000)

        
}); 

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function mHideHeader(){
    while ($(window).width() < 1280) {

    }
}