let story = document.getElementById("story")
let light = document.getElementById("light_candle")
let balloonns = document.getElementById("balloonns")

light.addEventListener('click', ()=>{
    console.log("ligt");
balloonns.classList.remove("hidden");
})
story.addEventListener('click', ()=>{
    console.log("ligt");
balloonns.classList.add("hidden");
})