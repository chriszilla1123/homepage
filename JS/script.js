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
  console.log(h + ":" + m);
  $("#clock").html(h + ":" + m);
}

$(document).ready(function(){
  setInterval(getTime, 1000)
  $("#link1").click(function(){
    $("#window").attr("src", "https://www.chilltec.net/ampache/");
  });
  $("#link3").click(function(){
    $("#window").attr("src", "http://www.chilltec.net:61208/");
  });
});