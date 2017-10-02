(function(){
  
})();

function getTime(){
  var time = new Date();
  var h = fixTime(time.getHours() % 12);
  var m = fixTime(time.getMinutes());
  if(h == '00') h = '12';
  var prettyTime = (h + ":" + m);
  
  function fixTime(brokenTime){
    var fixedTime = brokenTime;
    if(fixedTime < 10){
      fixedTime = ('0' + fixedTime);
    }
    return fixedTime;
  }
  $("#clock").html(h + ":" + m);
}

$(document).ready(function(){
  //Set Links
  var link1 = "https://www.chilltec.net/ampache/";
  var link2 = "http://www.chilltec.net:8112/";
  var link3 = "http://www.chilltec.net:61208/";
  var link4 = "http://www.plex.tv/web";
  var link5;
  var link6;
  var link7;
  var link8;
  var loaded1 = false;
  var loaded2 = false;
  var loaded3 = false;
  var loaded4 = false;
  var loaded5 = false;
  var loaded6 = false;
  var loaded7 = false;
  var loaded8 = false;
  
  setInterval(getTime, 1000)
  $("#link1").click(function(){
    if(loaded1 === false) {
      $("#window1").attr("src", link1);
      loaded1 = true;
    }
    $("#window1").css("zIndex", 10)
    $("#window2").css("zIndex", 1)
    $("#window3").css("zIndex", 1)
    //$("#window4").css("zIndex", 1)
  });
  $("#link2").click(function(){
    if(loaded2 === false) $("#window2").attr("src", link2);
    $("#window1").css("zIndex", 1)
    $("#window2").css("zIndex", 10)
    $("#window3").css("zIndex", 1)
    //$("#window4").css("zIndex", 1)
  });
  $("#link3").click(function(){
    if(loaded3 === false) $("#window3").attr("src", link3);
    $("#window1").css("zIndex", 1)
    $("#window2").css("zIndex", 1)
    $("#window3").css("zIndex", 10)
    //$("#window4").css("zIndex", 1)
  });
  $("#link4").click(function(){
    //if(loaded4 === false) $("#window4").attr("src", link4);
    //$("#window1").css("zIndex", 1)
    //$("#window2").css("zIndex", 1)
    //$("#window3").css("zIndex", 1)
    //$("#window4").css("zIndex", 10)
  });
});