var deg = 0, index = 360, myInterval;
function start() {
    if(index==360)clearInterval(myInterval);
    if(index < 30)deg -= 2;
    else if(index < 50) deg += 0;
    else if(index < 120)deg += 3;
    else if(index < 150)deg += 2.5;
    else if(index < 210)deg += 2;
    else if(index < 270)deg += 1.5;
    else if(index < 340)deg += 1;
    else deg += 0.5;
    $('.slotContainer').css('transform','rotate('+deg+'deg)');
    index++;
}
$(function(){
    $('#btn_start').click(function(){
        if(index>=360){
            index = 0;
            myInterval = setInterval(start, 10);
        }
    });
});