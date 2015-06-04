/**
 * Created by candice on 2015/6/3.
 */
$(document).ready(function(){
  $(".sidebar-ul").bind("click",function(ev){
    var $obj=$(ev.target);
    $obj.addClass(".active");
  });

});
