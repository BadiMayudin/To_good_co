function locomotiveAnimation(){
   gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
}
locomotiveAnimation()

gsap.to("#navp1 svg",{
   transform:"translateY(-100%)",
   scrollTrigger:{
      trigger:"#page1",
      scroller:"#main",
      marker:true,
      start:"top 0",
      end:"top -50%",
      scrub:true
   }
})
gsap.to("#navp2 #links",{
   transform:"translateY(-100%)",
   scrollTrigger:{
      trigger:"#page1",
      scroller:"#main",
      // markers:true,
      opacity:0,
      start:"top 0",
      end:"top -50%",
      scrub:true
   }
})

function videocon(){
   var img = document.querySelector("#img");
var round = document.querySelector("#round");

img.addEventListener("mouseenter" , ()=>{
   gsap.to(round , {
    scale : 1,
    opacity:1
   })
})
img.addEventListener("mouseleave" , ()=>{
    gsap.to(round , {
     scale : 0,
     opacity:0
    })
 })
img.addEventListener("mousemove" , function(dets){
    gsap.to(round , {
     left:dets.clientX-120,
     top:dets.clientY-120
    })
 })
}
videocon()

function animation(){
   gsap.from("#page1 h1" , {
      y:100,
      opacity:0,
      delay:0.8,
      stagger:0.4,
      duration:0.9
   })
   gsap.from("#img",{
      scale:.9,
      duration:1,
      opacity:0,
      delay:.5
   })
}
animation()

function page3Animation(){
   
var page3 = document.querySelector("#page3");
var crsr = document.querySelector("crsr");
var img = document.querySelector(".img")

document.querySelectorAll(".img").forEach(function(elem){
   elem.addEventListener("mousemove",(dts)=>{
      gsap.to("#crsr",{
         left:dts.x,
         top:dts.y,
      })
     
   })
  
})
page3.addEventListener("mouseenter",()=>{
   gsap.to("#crsr" , {
      transform: 'translate(-50% , -50%) scale(1)',
      opacity:.3,
      duration:.5
   })
})
page3.addEventListener("mouseleave",()=>{
   gsap.to("#crsr" , {
      scale:0,
      opacity:0,
      duration:.5
   })
})

}

page3Animation()