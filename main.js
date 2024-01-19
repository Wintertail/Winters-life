
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


function dropMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
function navClicked(){
    console.log("FADING PAGE AWAY");
    $(".container").fadeOut("1000");
    $(".fade-container").fadeOut("6000");
}

function ffxivBlog(){
    $("#ffxiv-Pictures").fadeOut("6000").css("display","none");
    $("#ffxiv-Thalia").fadeOut("6000").css("display","none");
    $("#ffxiv-blog-content").fadeIn("6000").css("display", "block");
    $("#ffxiv-blog-content").get(0).scrollIntoView({behavior: 'smooth'});

}

function ffxivPictures(){
    $("#ffxiv-blog-content").fadeOut("6000").css("display","none");
    $("#ffxiv-Thalia").fadeOut("6000").css("display","none");
    $("#ffxiv-Pictures").fadeIn("6000").css("display", "block");
    $("#ffxiv-Pictures").get(0).scrollIntoView({behavior: 'smooth'});

}
function ffxivThalia(){
    $("#ffxiv-blog-content").fadeOut("6000").css("display","none");
    $("#ffxiv-Pictures").fadeOut("6000").css("display","none");
    $("#ffxiv-Thalia").fadeIn("6000").css("display", "block"); 
    $("#ffxiv-Thalia").get(0).scrollIntoView({behavior: 'smooth'});

}

//toggles a larger image when clicked
/*$('.art-content-container img').each(function(index){
    if($(this).attr('onclick')!=null){
        if($(this).attr('onclick').indexOf("runThis()") == -1){
            $(this).click(function () {
                $(this).attr('onclick');
                var src = $(this).attr("src");
                ShowLargeImage(src);
            });
        }
    }
    else {                    
        $(this).click(function () {                        
            var src = $(this).attr("src");
            $('body').append('<div class="art-img-temp"></div><div class="art-temp"><img src="' + src.replace("small","large") + '" /></div>');
        });
    }
})*/
