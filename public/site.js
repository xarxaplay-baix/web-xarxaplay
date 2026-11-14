(function(){
  var mb=document.getElementById('menu-btn'),mn=document.getElementById('mobile-nav');
  mb.addEventListener('click',function(){var o=mn.classList.toggle('open');mb.setAttribute('aria-expanded',String(o));});
  mn.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mn.classList.remove('open');mb.setAttribute('aria-expanded','false');});});
  document.getElementById('trial').addEventListener('submit',function(e){e.preventDefault();this.classList.add('sent');});
})();
(function(){
  var slides=[].slice.call(document.querySelectorAll('.slide')),dots=[].slice.call(document.querySelectorAll('.sl-dot')),cur=0,timer=null;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function go(n){
    cur=(n+slides.length)%slides.length;
    slides.forEach(function(s,i){var on=i===cur;s.classList.toggle('is-active',on);if(on){s.removeAttribute('aria-hidden');s.removeAttribute('inert');}else{s.setAttribute('aria-hidden','true');s.setAttribute('inert','');}});
    dots.forEach(function(d,i){d.setAttribute('aria-current',String(i===cur));});
  }
  function play(){if(reduce)return;stop();timer=setInterval(function(){go(cur+1);},6500);}
  function stop(){if(timer)clearInterval(timer);timer=null;}
  document.getElementById('sl-prev').addEventListener('click',function(){go(cur-1);play();});
  document.getElementById('sl-next').addEventListener('click',function(){go(cur+1);play();});
  dots.forEach(function(d,i){d.addEventListener('click',function(){go(i);play();});});
  var sl=document.querySelector('.slider');
  sl.addEventListener('mouseenter',stop);sl.addEventListener('mouseleave',play);
  sl.addEventListener('focusin',stop);sl.addEventListener('focusout',play);
  var x0=null;sl.addEventListener('touchstart',function(e){x0=e.touches[0].clientX;},{passive:true});
  sl.addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40){go(cur+(dx<0?1:-1));play();}x0=null;});
  play();

  var reader=document.getElementById('reader'),arts=[].slice.call(reader.querySelectorAll('.art'));
  function route(){
    var h=location.hash.replace('#','');var hit=null;
    arts.forEach(function(a){var on=a.dataset.slug===h;a.hidden=!on;if(on)hit=a;});
    reader.hidden=!hit;document.body.style.overflow=hit?'hidden':'';
    if(hit){reader.scrollTop=0;}
    else if(h){var t=document.getElementById(h);if(t)t.scrollIntoView();}
  }
  window.addEventListener('hashchange',route);route();
})();
