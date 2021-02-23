const rightArrow = document.querySelector('.right');
const leftArrow = document.querySelector('.left');
const wrapper = document.querySelector('.wrapper')

rightArrow.addEventListener('click',()=>{
    wrapper.scrollLeft += 150;
    console.log("click")
})

leftArrow.addEventListener('click',()=>{
    wrapper.scrollLeft -= 150;
    console.log("click")
})