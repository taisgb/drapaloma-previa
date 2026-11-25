import 'allo-font';
const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');
function setMenu(open){menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰';nav.classList.toggle('open',open)}
menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
const gallery=document.querySelector('#gallery');[4,1,2,3,5,7,8,9,10].forEach((n,i)=>{const figure=document.createElement('figure'),img=document.createElement('img');img.src=`https://lp.drapalomaazevedo.com.br/wp-content/uploads/2025/04/image_${n}.webp`;img.alt=`Ambiente da Clínica Afetos, foto ${i+1}`;img.loading='lazy';figure.append(img);gallery.append(figure)});
for(const [id,dir] of [['prev',-1],['next',1]])document.getElementById(id).addEventListener('click',()=>gallery.scrollBy({left:dir*(gallery.firstElementChild.offsetWidth+16),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
