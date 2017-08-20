var tempDatabase;

function getCookie(){
    tempDatabase = document.cookie.split(';');
    tempDatabase = tempDatabase[0];
    tempDatabase = tempDatabase.split(',');
}

$(document).ready(function(){
  if(document.cookie){
      getCookie();  
      $("input:eq(0)").attr("value", tempDatabase[0]);
      $("input:eq(1)").attr("value", tempDatabase[1]);
      $("input:eq(2)").attr("value", tempDatabase[2]);
      $("input:eq(3)").attr("value", tempDatabase[3]);
      $("input:eq(4)").attr("value", tempDatabase[4]);
      $("input:eq(5)").attr("value", tempDatabase[5].slice(1) + "," + tempDatabase[6]);
      $("input:eq(6)").attr("value", tempDatabase[7]);
  }
});
