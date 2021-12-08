const userName = document.querySelector('.user-name')
const borderWidthFirst=document.querySelector('.border-width-first-btn')
const borderWidthSecond=document.querySelector('.border-width-second-btn')

borderWidthFirst.addEventListener('click',()=>{
    userName.style.borderWidth = "5px"
})
borderWidthSecond.addEventListener('click',()=>{
    userName.style.borderWidth = "10px"
})