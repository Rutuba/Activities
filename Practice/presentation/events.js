//MUST INCLUDE : "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"

//$(function(){
//$().ready(function(){
$(document).ready(function(){
    //Selectors

    //console.log($("*"));

    //console.log($("div"));

    // console.log($(".green"));// All elements with class=blue
    // console.log($(".red"));// All elements with class=blue
    // console.log($(".green .red"));// All elements with class=blue AND class=red
    // console.log($(".green,.red"));// All elements with class=blue OR class=red
    // console.log($("#ele"));// The (first) element with id=headline

    //console.log($(".green").not(".red")); //ele with only class green

    //Pseudo-states : first-child, last-child, first-of-type, last-of-type ,first ,last etc.
    // console.log($('ul :first-child'));
    // console.log($('ul :last-child'));
    //console.log($('.green:first-of-type'));
    // console.log($('li:last-of-type'));
    //console.log($('.green:first'));
    // console.log($('li:last'));

    $('a').on('click' , function(){
        var x = $(this);
        console.log(x.html());
        alert("hii");
    });

    //Mouse Events
    $('#container').hover(function(){
        $('#list').append("<li> Mouse Hover </li><li> Mouse Enter </li>");
        $('#container').css('background-color' , 'slateblue');
        $('#lbl').html("Mouse Enter");
     },function(){
        $('#list').append("<li> Mouse Leave </li>");
        $('#container').css('background-color' , 'chocolate');
        $('#lbl').html("Mouse Leave");
    });

    $('#container').on('click' , function(){
        $('#list').append("<li> Mouse Click </li>");
        $('#container').css('background-color' , 'teal');
        $('#lbl').html("Mouse Click");
        alert("hi");
    });

    $('#container').on('mouseup' , function(){
        $('#list').append("<li> Mouse UP </li>");
        $('#container').css('background-color' , 'tomato');
        $('#lbl').html("Mouse UP");
    });

    $('#container').on('mousedown' , function(){
        $('#list').append("<li> Mouse Down </li>");
        $('#container').css('background-color' , 'cyan');
        $('#lbl').html("Mouse Down");
    });

    $('#container').on('dbclick' , function(){
        $('#list').append("<li> Mouse Double Click </li>");
        $('#container').css('background-color' , 'chocolate');
        $('#lbl').html("Mouse Double Click");
    });

});