// 錨點平滑滾動與焦點管理
document.addEventListener('DOMContentLoaded', function(){
  // 強化錨點行為：平滑滾動並設定 focus
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      const hash = this.getAttribute('href');
      if(hash.length>1){
        const el = document.querySelector(hash);
        if(el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth', block:'start'});
          // 小延遲後讓區塊可被鍵盤 focus
          setTimeout(()=>{el.setAttribute('tabindex','-1');el.focus({preventScroll:true});},400);
        }
      }
    });
  });

  // 延遲動畫：當進度條出現在畫面時，展開寬度（讀取 inline width）
  /*
  // 已註解：進度條進場動畫（IntersectionObserver）
  // 如果你想重新啟用進度條動畫，可以移除下面註解。
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        const bars = en.target.querySelectorAll('.progress-bar');
        bars.forEach(b=>{
          const w = b.style.width || '0%';
          b.style.width = '0%';
          requestAnimationFrame(()=>{ b.style.width = w; });
        });
        observer.unobserve(en.target);
      }
    });
  },{threshold:0.2});

  document.querySelectorAll('.skills-grid .skill').forEach(s=>observer.observe(s));
  */
});
