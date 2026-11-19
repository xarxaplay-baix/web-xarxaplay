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

  // Calendari de tornejos: amaga els passats, filtre per esport i vista mensual
  var tj=document.querySelector('.tj');
  if(tj){
    var pad=function(n){return (n<10?'0':'')+n;};
    var now=new Date(),today=now.getFullYear()+'-'+pad(now.getMonth()+1)+'-'+pad(now.getDate());
    var cfg=JSON.parse(tj.querySelector('.tj-data').textContent);
    var items=[].slice.call(tj.querySelectorAll('.tj-item'));
    var sport='all',day=null;
    items.forEach(function(li){ if(li.dataset.end<today){li.classList.add('is-past');} });
    var evs=cfg.ev.filter(function(e){return e.e>=today;});
    var refresh=function(){
      items.forEach(function(li){
        var ok=!li.classList.contains('is-past')&&(sport==='all'||li.dataset.sport===sport)&&(!day||(li.dataset.start<=day&&li.dataset.end>=day));
        li.hidden=!ok;
      });
      tj.querySelectorAll('.tj-month').forEach(function(m){m.hidden=!m.querySelector('.tj-item:not([hidden])');});
      var empty=tj.querySelector('.tj-empty'); if(empty) empty.hidden=!!tj.querySelector('.tj-item:not([hidden])')||(sport!=='all'||day);
      draw();
    };
    tj.querySelectorAll('.tj-chip').forEach(function(b){b.addEventListener('click',function(){
      sport=b.dataset.sport; day=null;
      tj.querySelectorAll('.tj-chip').forEach(function(x){x.setAttribute('aria-pressed',String(x===b));});
      var f=evs.filter(function(e){return sport==='all'||e.sp===sport;})[0];
      if(f&&f.s>=today){vy=+f.s.slice(0,4);vm=+f.s.slice(5,7)-1;}
      refresh(); ev('filtre_tornejos',{sport:sport});
    });});
    // Vista mensual
    var cal=tj.querySelector('.tj-cal'),title=cal&&cal.querySelector('.tj-cal-title'),grid=cal&&cal.querySelector('.tj-cal-days');
    var first=evs.length?evs[0].s:today; var vy=+first.slice(0,4),vm=+first.slice(5,7)-1;
    if(first<today){vy=now.getFullYear();vm=now.getMonth();}
    function draw(){
      if(!cal) return;
      title.textContent=cfg.m[vm]+' '+vy;
      var html=cfg.d.map(function(x){return '<span class="tj-dow">'+x+'</span>';}).join('');
      var start=(new Date(vy,vm,1).getDay()+6)%7, n=new Date(vy,vm+1,0).getDate();
      for(var i=0;i<start;i++) html+='<span></span>';
      for(var dd=1;dd<=n;dd++){
        var iso=vy+'-'+pad(vm+1)+'-'+pad(dd);
        var hits=evs.filter(function(e){return e.s<=iso&&e.e>=iso&&(sport==='all'||e.sp===sport);});
        var cls='tj-d'+(iso===today?' is-today':'')+(iso===day?' is-sel':'');
        if(hits.length){
          var sp=hits.map(function(e){return e.sp;}).filter(function(v,i,a){return a.indexOf(v)===i;});
          html+='<button type="button" class="'+cls+' has-ev" data-day="'+iso+'" title="'+hits.map(function(e){return e.t.replace(/"/g,'&quot;');}).join(' · ')+'">'+dd+'<i>'+sp.map(function(s){return '<b class="sp-'+s+'"></b>';}).join('')+'</i></button>';
        } else html+='<span class="'+cls+'">'+dd+'</span>';
      }
      grid.innerHTML=html;
    }
    if(cal){
      cal.addEventListener('click',function(e){
        var nav=e.target.closest('.tj-nav');
        if(nav){vm+=+nav.dataset.dir; if(vm<0){vm=11;vy--;} if(vm>11){vm=0;vy++;} draw(); return;}
        var b=e.target.closest('.has-ev'); if(!b) return;
        day=(day===b.dataset.day)?null:b.dataset.day; refresh();
        var t=tj.querySelector('.tj-item:not([hidden])'); if(day&&t&&window.innerWidth<900) t.scrollIntoView({behavior:'smooth',block:'center'});
      });
    }
    refresh();
  }
  // Esdeveniments d'Analytics
  function ev(name,params){ if(window.gtag) gtag('event',name,params||{}); }
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a'); if(!a) return;
    var h=a.getAttribute('href')||'';
    if(a.dataset.ev) ev(a.dataset.ev,{link_url:h});
    else if(h.indexOf('playtomic.com')>-1) ev('reserva_pista',{link_url:h});
    else if(h.indexOf('tel:')===0) ev('trucada');
    else if(h.indexOf('mailto:')===0) ev('email');
    else if(h.indexOf('wa.me')>-1||h.indexOf('whatsapp')>-1) ev('whatsapp');
  });
})();
