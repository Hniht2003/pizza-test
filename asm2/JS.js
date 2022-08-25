// hien thi menu icons
const cards = document.querySelectorAll('.the')
const icon = document.querySelectorAll('.icons')

cards.forEach((the,index) =>{
    the.addEventListener('mouseover', ()=>{
        icon.item(index).classList.remove('hide')
    })
    the.addEventListener('mouseout', ()=>{
        icon.item(index).classList.add('hide')
    })
})
// slide show
var images = [];
for(let i = 1; i < 6; i++){
    images[i] = new Image();
    images[i].src='imgslide/' + i + '.jpg';
}
var index = 1;
function next(){
    index++
        if (index>images.length) {
            index=1               
        }
        var anh  = document.getElementById('anhslide')
        anh.src=images[index].src
}
function back(){
    index--
    if (index<1) {
        index=images.length-1
        
    }
    var anh  = document.getElementById('anhslide')
    anh.src=images[index].src
}
// show san pham
var otherList = document.querySelectorAll(".product>.lyphu>img");
for (let i = 0; i < otherList.length; i++) {
    otherList[i].onmouseover = function(){
        var mainly = document.querySelector(".product>.lychinh");
        mainly.src = this.src;
    }
}

function dathang(){
    var dh = document.getElementById('dathang')
    dh.alert('Ban da da hang');
}
dathang();