var startHeight=document.getElementById("start").offsetHeight,foodHeight=document.getElementById("food").offsetHeight,playHeight=document.getElementById("play").offsetHeight,lollipopHeight=document.getElementById("Lollipop").offsetHeight,columns=document.getElementsByClassName("column")[0].children;columns[0].style.backgroundColor="#FEE0C6";var startLabel=columns[0],foodLabel=columns[1],playLabel=columns[2],lollipopLabel=columns[3],myScript=function(a){var b=window.scrollY,c=window.scrollY+window.innerHeight/2;startHeight>c?(startLabel.style.backgroundColor="#FEE0C6",foodLabel.style.backgroundColor="#FFFFFD",playLabel.style.backgroundColor="#FFFFFD",lollipopLabel.style.backgroundColor="#FFFFFD"):startHeight+foodHeight>c?(startLabel.style.backgroundColor="#FFFFFD",foodLabel.style.backgroundColor="#FEE0C6",playLabel.style.backgroundColor="#FFFFFD",lollipopLabel.style.backgroundColor="#FFFFFD"):startHeight+foodHeight+playHeight>c?(foodLabel.style.backgroundColor="#FFFFFD",playLabel.style.backgroundColor="#FEE0C6",lollipopLabel.style.backgroundColor="#FFFFFD"):(foodLabel.style.backgroundColor="#FFFFFD",playLabel.style.backgroundColor="#FFFFFD",lollipopLabel.style.backgroundColor="#FEE0C6"),b<window.innerHeight/5?document.getElementsByClassName("header")[0].style.lineHeight="70px":document.getElementsByClassName("header")[0].style.lineHeight="40px"};document.addEventListener("scroll",myScript);var smoothScroll=function(a){for(var b=window.scrollY,c=500,d=15,e=Math.round(c/d),f=(a-b)/e,g=1;e>=g;g++)!function(){var a=f*g;setTimeout(function(){window.scrollTo(0,a+b)},d*g)}()},scrollToStart=function(a){var b=0;smoothScroll(b)},scrollToFood=function(a){var b=startHeight;smoothScroll(b)},scrollToPlay=function(a){var b=startHeight+foodHeight;smoothScroll(b)},scrollTolollipop=function(a){var b=startHeight+foodHeight+playHeight;smoothScroll(b)};startLabel.addEventListener("click",scrollToStart),foodLabel.addEventListener("click",scrollToFood),playLabel.addEventListener("click",scrollToPlay),lollipopLabel.addEventListener("click",scrollTolollipop),$(document).ready(function(){var a=$("#slides li").outerWidth(),b=-1*a;$("#slides li:first").before($("#slides li:last")),$("#slides ul").css({left:b}),$("#prev").click(function(){var c=parseInt($("#slides ul").css("left"))+a;return $("#slides ul").animate({left:c},200,function(){$("#slides li:first").before($("#slides li:last")),$("#slides ul").css({left:b})}),!1}),$("#next").click(function(){var c=parseInt($("#slides ul").css("left"))-a;return $("#slides ul").animate({left:c},200,function(){$("#slides li:last").after($("#slides li:first")),$("#slides ul").css({left:b})}),!1})});