const slides=document.querySelectorAll(".slide")
var counter=0;
const ts=slides.length;
slides.forEach((slide,index)=>{
        slide.style.left=`${index*100}%`
    }
)
const goPrev=()=>{
    counter--
    if(counter<0){
        counter=ts-1
    }
    slideImage()
    
}
const goNext=()=>{
    counter++
    if(counter>=ts){
        counter=0
    }
    slideImage()
    
}
const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
        }
    )
}
setInterval(goNext, 3000);


document.querySelectorAll('.stars label').forEach((label, index) => {
    label.addEventListener('click', function() {
        const radio = document.querySelector(`input[id="${this.htmlFor}"]`);
        radio.checked = true;
        document.querySelectorAll('.stars input').forEach((input, i) => {
            input.checked = i >= index;
        });
    });
});


