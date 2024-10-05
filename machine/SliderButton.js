document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.slider').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.slider').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
}