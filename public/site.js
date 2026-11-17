(function(){
  // Menú mòbil
  var mb=document.getElementById('menu-btn'),mn=document.getElementById('mobile-nav');
  if(mb&&mn){
    mb.addEventListener('click',function(){var o=mn.classList.toggle('open');mb.setAttribute('aria-expanded',String(o));});
    mn.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mn.classList.remove('open');mb.setAttribute('aria-expanded','false');});});
  }
  // Formulari de prova (pendent de connectar a Formspree)
  var trial=document.getElementById('trial');
  trial&&trial.addEventListener('submit',function(e){e.preventDefault();this.classList.add('sent');ev('generate_lead',{form:'prova_gratuita'});});

  // Carrusel de la portada
  var slides=[].slice.call(document.querySelectorAll('.slide'));
  if(slides.length){
    var dots=[].slice.call(document.querySelectorAll('.sl-dot')),cur=0,timer=null;
    var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var go=function(n){
      cur=(n+slides.length)%slides.length;
      slides.forEach(function(s,i){var on=i===cur;s.classList.toggle('is-active',on);if(on){s.removeAttribute('aria-hidden');s.removeAttribute('inert');}else{s.setAttribute('aria-hidden','true');s.setAttribute('inert','');}});
      dots.forEach(function(d,i){d.setAttribute('aria-current',String(i===cur));});
    };
    var stop=function(){if(timer)clearInterval(timer);timer=null;};
    var play=function(){if(reduce)return;stop();timer=setInterval(function(){go(cur+1);},6500);};
    document.getElementById('sl-prev').addEventListener('click',function(){go(cur-1);play();});
    document.getElementById('sl-next').addEventListener('click',function(){go(cur+1);play();});
    dots.forEach(function(d,i){d.addEventListener('click',function(){go(i);play();});});
    var sl=document.querySelector('.slider');
    sl.addEventListener('mouseenter',stop);sl.addEventListener('mouseleave',play);
    sl.addEventListener('focusin',stop);sl.addEventListener('focusout',play);
    var x0=null;sl.addEventListener('touchstart',function(e){x0=e.touches[0].clientX;},{passive:true});
    sl.addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40){go(cur+(dx<0?1:-1));play();}x0=null;});
    play();
  }

  // Galetes (Consent Mode v2)
  var bar=document.getElementById('cookie');
  function get(){try{return localStorage.getItem('xp_consent');}catch(e){return null;}}
  function set(v){try{localStorage.setItem('xp_consent',v);}catch(e){}}
  function apply(v){ if(window.gtag) gtag('consent','update',{analytics_storage: v==='grant'?'granted':'denied'}); }
  if(bar){
    if(!get()) bar.hidden=false;
    bar.querySelectorAll('[data-consent]').forEach(function(b){b.addEventListener('click',function(){
      var v=b.getAttribute('data-consent'); set(v); apply(v); bar.hidden=true;
    });});
    document.querySelectorAll('[data-cookie-settings]').forEach(function(b){b.addEventListener('click',function(){bar.hidden=false;});});
  }
  // Mapa: es carrega només quan el visitant ho demana
  var map=document.getElementById('map');
  if(map){
    var btn=map.querySelector('.map-load');
    btn&&btn.addEventListener('click',function(){
      var f=document.createElement('iframe');
      f.src=map.getAttribute('data-src'); f.title=map.getAttribute('data-title')||'Mapa';
      f.loading='lazy'; f.referrerPolicy='no-referrer-when-downgrade'; f.allowFullscreen=true;
      map.innerHTML=''; map.appendChild(f); map.classList.add('loaded');
      ev('mapa_obert');
    });
  }
  // Esdeveniments d'Analytics
  function ev(name,params){ if(window.gtag) gtag('event',name,params||{}); }
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a'); if(!a) return;
    var h=a.getAttribute('href')||'';
    if(h.indexOf('playtomic.com')>-1) ev('reserva_pista',{link_url:h});
    else if(h.indexOf('tel:')===0) ev('trucada');
    else if(h.indexOf('mailto:')===0) ev('email');
    else if(h.indexOf('wa.me')>-1||h.indexOf('whatsapp')>-1) ev('whatsapp');
    else if(a.dataset.ev) ev(a.dataset.ev);
  });
})();
