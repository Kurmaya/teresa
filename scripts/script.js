const cards = document.querySelectorAll('.card');
const targets = document.querySelectorAll('.split');

targets.forEach(target=>{
let splitText = new SplitText(target,{type:'words,chars'});
let chars = splitText.words;
gsap.from(chars,{
    y:10,
    opacity:0,
    stagger:.1,
    rotate:10,
    ease:'none',
    scrollTrigger:{
        trigger:target,
        // scrub:true,
        start:'top bottom',
        end:'top 20%',
        // markers:true
    }
})

})

 gsap.registerPlugin(ScrollTrigger,SplitText);

 let tl = gsap.timeline({
  
  scrollTrigger:{
        trigger:'.service-cards',
        start:'-150px 50%',
        end: '+=200',
        // scrub:true, 
        ease:'none',
        stagger:.2,
        // duration:8,
        markers:true
  }
 })
 cards.forEach(card=>{
  tl.from(card,{
      
    opacity:0,
    left:'-150px',
    rotation:80
      
    })
  
 })
  
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
