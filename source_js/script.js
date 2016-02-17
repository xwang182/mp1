
var startHeight=document.getElementById("start").offsetHeight;
var foodHeight=document.getElementById("food").offsetHeight;
var playHeight=document.getElementById("play").offsetHeight;
var lollipopHeight=document.getElementById("Lollipop").offsetHeight;
var columns=document.getElementsByClassName("column")[0].children;
columns[0].style.backgroundColor = "#FEE0C6";

var startLabel=columns[0];
var foodLabel=columns[1];
var playLabel=columns[2];
var lollipopLabel=columns[3];


var myScript=function(event){
    var scrolledPosition=window.scrollY;
    var scrolled2=window.scrollY+window.innerHeight/2;

    var originalColor="#FFFFFD";
    var selectedColor="#FEE0C6";
    if(scrolled2<startHeight){
        startLabel.style.backgroundColor = selectedColor;
        foodLabel.style.backgroundColor =originalColor ;
        playLabel.style.backgroundColor = originalColor;
        lollipopLabel.style.backgroundColor = originalColor;
    }
    else if(scrolled2<startHeight+foodHeight){
        startLabel.style.backgroundColor = originalColor;
        foodLabel.style.backgroundColor =selectedColor ;
        playLabel.style.backgroundColor = originalColor;
        lollipopLabel.style.backgroundColor = originalColor;
    }
    else if(scrolled2<startHeight+foodHeight+playHeight){
        startLabel.style.backgroundColor = originalColor;
        foodLabel.style.backgroundColor =originalColor ;
        playLabel.style.backgroundColor = selectedColor;
        lollipopLabel.style.backgroundColor = originalColor;
    }
    else{
        startLabel.style.backgroundColor = originalColor;
        foodLabel.style.backgroundColor =originalColor ;
        playLabel.style.backgroundColor = originalColor;
        lollipopLabel.style.backgroundColor = selectedColor;
    }


    if(scrolledPosition<window.innerHeight/5){
        document.getElementsByClassName("header")[0].style.lineHeight = "70px";
    }
    else{
        document.getElementsByClassName("header")[0].style.lineHeight = "40px";
    }
};

document.addEventListener("scroll",myScript);




var smoothScroll=function(stop){
    var start= window.scrollY;
    var allTime = 500;
    var moving_interval = 15;
    var moving_count = Math.round(allTime / moving_interval);
    var gap = (stop - start) / moving_count;
    for(var i = 1; i <= moving_count; i++)
    {
        (function(){
            var changed_distance = gap * i;
            setTimeout(function(){  window.scrollTo(0, changed_distance + start); }, moving_interval*i);
        })();
    }
};

var scrollToStart=function(event){
    var scrollValue=0;
    smoothScroll(scrollValue);
};

var scrollToFood=function(event){
    var scrollValue=startHeight;
    smoothScroll(scrollValue);
};

var scrollToPlay=function(event){
    var scrollValue=startHeight+foodHeight;
    smoothScroll(scrollValue);
};

var scrollTolollipop=function(event){
    var scrollValue=startHeight+foodHeight+playHeight;
    smoothScroll(scrollValue);
};




startLabel.addEventListener("click",scrollToStart);
foodLabel.addEventListener("click",scrollToFood);
playLabel.addEventListener("click",scrollToPlay);
lollipopLabel.addEventListener("click",scrollTolollipop);






$(document).ready(function() {


    //grab the width and calculate left value
    var item_width = $('#slides li').outerWidth();
    var left_value = item_width * (-1);

    //move the last item before first item, just in case user click prev button
    $('#slides li:first').before($('#slides li:last'));

    //set the default item to the correct position
    $('#slides ul').css({'left' : left_value});
    //if user clicked on prev button
    $('#prev').click(function() {
        //get the right position
        var left_indent = parseInt($('#slides ul').css('left')) + item_width;
        //slide the item
        $('#slides ul').animate({'left' : left_indent}, 200,function(){
            //move the last item and put it as first item
            $('#slides li:first').before($('#slides li:last'));
            //set the default item to correct position
            $('#slides ul').css({'left' : left_value});

        });
        //cancel the link behavior
        return false;

    });
    //if user clicked on next button
    $('#next').click(function() {

        //get the right position
        var left_indent = parseInt($('#slides ul').css('left')) - item_width;

        //slide the item
        $('#slides ul').animate({'left' : left_indent}, 200, function () {

            //move the first item and put it as last item
            $('#slides li:last').after($('#slides li:first'));

            //set the default item to correct position
            $('#slides ul').css({'left' : left_value});

        });

        //cancel the link behavior
        return false;

    });


});

