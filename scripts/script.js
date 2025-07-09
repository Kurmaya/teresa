const cursorBig = document.querySelector('.big');


gsap.set(cursorBig,{xPercent: -50 ,yPercent: -50});

let xTo = gsap.quickTo(cursorBig,"x",{duration:.2,ease:'power3'}),
yTo = gsap.quickTo(cursorBig,"y",{duration:.2,ease:'power3'});

window.addEventListener('mousemove', (e)=>{
  if(window.innerWidth>800){

    xTo(e.clientX);
    yTo(e.clientY);
  }
  else{
    cursorBig.style.display='none';
  }
});


const navItem= document.querySelectorAll(".nav-links li a");
for(let i=0;i<navItem.length;i++){
  if(navItem[i].href===location.href){
    navItem[i].classList.add('active');
  }
}
const close = document.querySelector('.close');

close.addEventListener('click',()=>{
  close.classList.toggle('active');
  document.querySelector('.nav-links').classList.toggle('active');
})

const cards = document.querySelectorAll('.card');
const targets = document.querySelectorAll('.split');
const galleryImages = document.querySelectorAll('#gallery img');
galleryImages.forEach(i=>{
  i.addEventListener('mouseover',x=>{
cursorBig.querySelector('img').src='../assets/images/g.png';
  })
  i.addEventListener('mouseleave',x=>{
    cursorBig.querySelector('img').src='../assets/logo.svg';
  })
})
gsap.registerPlugin(ScrollTrigger,SplitText);


//splittext animations
targets.forEach(target=>{
let splitText = new SplitText(target,{type:'words,chars'});
let chars = splitText.words;
gsap.from(chars,{
    y:10,
    opacity:0,
    stagger:.1,
    rotate:10,
    duration:1,
    ease:'bounce.out',
    scrollTrigger:{
        trigger:target,
        // scrub:true,
        start:'30% 80%',
        end:'top 20%',
        // markers:true
    }
})

})

//card animations
 let tl = gsap.timeline({
  
  scrollTrigger:{
        trigger:'.service-cards',
        start:'-150px 50%',
        end: '+=200',
        // scrub:true, 
        ease:'bounce.out',
        stagger:.2,
        // duration:8,
        // markers:true
  }
 })
//  cards.forEach(card=>{
  tl.from(cards,{
      
    opacity:0,
    left:'-150px',
    // rotation:80
      
    })
  
//  })
  
 cards.forEach(card=>{
  card.addEventListener('mouseover',()=>{
    gsap.to(card,{
      scale:1.05,
      y:-10,
      duration:.3,
      ease:'back.out'
    })
  })
  card.addEventListener('mouseleave',()=>{
    gsap.to(card,{
      scale:1,
      y:0,
      duration:.3,
      ease:'back.out'
    })
  })
 })


//gallery animations
galleryImages.forEach(img=>{
  gsap.from(img,{
    scrollTrigger:{
      trigger:img,
      start:'-150px 50%',
      ease:'power1.out',
      stagger:.4,
    },
    opacity:0,
  })
})
// Smooth fade-in animation
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));

// Contact form message
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Thank you! I'll get back to you soon.";
  this.reset();
});

// Lightbox functionality
document.querySelectorAll('.lightbox').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-full';
    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    overlay.appendChild(fullImg);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});
