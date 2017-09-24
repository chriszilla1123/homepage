(function(){
  
})();

function getTime(){
  var time = new Date();
  var h = fixTime(time.getHours() % 12);
  var m = fixTime(time.getMinutes());
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
  $("#test").click(function(){
    //$("#window").attr("src", "../../freeCodeCamp/weatherApp/index.html");
    $("#window").attr("src", "https://www.chilltec.net/glances");
  });
  $("#test2").click(function(){
    $("#window").attr("src", "");
  });
});