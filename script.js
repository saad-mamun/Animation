// gsap.from('#box', {
//     x:700,
//     duration: 2,
//     delay: 1,
//     backgroundColor:"red",
//     rotate:360,
//     borderRadius:"50%"
// })

gsap.from('h1',{
    y:60,
    duration:1,
    opacity:0,
    delay:1,
    stagger:0.6
})


gsap.to('#circle',{
    x:600,
    borderRadius:"10px",
    duration:2,
    rotate:360,
    yoyo:true,
    repeat:-1
})


// timeline


var tl = gsap.timeline()


tl.to("#box1",{
    x:700,
    duration:2.5,
   
    rotate:360
})
tl.to("#box2",{
    x:700,
    duration:2.5,
   
    rotate:360
})
tl.to("#box3",{
    x:700,
    duration:2.5,
    rotate:-360
})