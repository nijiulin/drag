/**
 * Created by admin on 2015/6/27.
 */
function drag(id){
    var obj = document.getElementById(id);
    var disX = 0;
    var disY = 0;
    obj.onmousedown = function(){
        disX = ev.pageX - obj.offsetLeft;
        disY = ev.pageY - obj.offsetTop;
    }
}

