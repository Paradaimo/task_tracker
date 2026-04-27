(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`gray`,`white`,`green`,`blue`,`purple`,`orange`,`gold`],t={gray:`Серый`,white:`Белый`,green:`Зелёный`,blue:`Синий`,purple:`Фиолетовый`,orange:`Оранжевый`,gold:`Золотой`},n={gray:`badge-neutral`,white:`badge-ghost`,green:`badge-success`,blue:`badge-info`,purple:`badge-secondary`,orange:`badge-warning`,gold:`badge-accent`},r={gray:{xp:10,gold:5},white:{xp:20,gold:10},green:{xp:40,gold:20},blue:{xp:80,gold:40},purple:{xp:160,gold:80},orange:{xp:320,gold:160},gold:null},i={none:`Нет`,daily:`Ежедневно`,weekly:`Еженедельно`,monthly:`Ежемесячно`},a=[`other`,`creativity`,`study`,`work`,`sport`,`home`],o={other:`Прочее`,creativity:`Творчество`,study:`Учёба`,work:`Работа`,sport:`Спорт`,home:`Дом`},s={other:`📌`,creativity:`🎨`,study:`📚`,work:`💼`,sport:`🏃`,home:`🏠`};function c(e){let t=1,n=0,r=100,i=100;for(;e>=r;)t++,n=r,i=Math.round(i*1.2),r=n+i;let a=e-n,o=r-n;return{level:t,currentXp:a,neededXp:o,progress:Math.round(a/o*100),totalXp:e}}function l(e){return{planned:`Запланировано`,"in-progress":`В процессе`,backlog:`Бэклог`,done:`Готово`,failed:`Не выполнено`}[e]||e}function u({title:e,status:t,priority:n,xp:r,gold:i,deadline:a,completionType:o,scheduled:s,recurring:c,category:l}){return{id:Date.now().toString(),title:e,status:t||`in-progress`,priority:n||`gray`,xp:r||0,gold:i||0,deadline:a||``,completionType:o||`once`,checklist:o===`checklist`?[]:null,progress:o===`progress`?0:null,onceDone:o===`once`?!1:null,scheduled:s||``,recurring:c||`none`,category:l||`other`}}function d(){let e=new Date;e.setHours(23,59,0,0);let t=e.getTimezoneOffset();return e.setMinutes(e.getMinutes()-t),e.toISOString().slice(0,16)}function f(e){let t=new Date;e===`daily`?t.setDate(t.getDate()+1):e===`weekly`?t.setDate(t.getDate()+7):e===`monthly`&&t.setMonth(t.getMonth()+1),t.setHours(23,59,0,0);let n=t.getTimezoneOffset();return t.setMinutes(t.getMinutes()-n),t.toISOString().slice(0,16)}function p(e){return e?new Date(e)<=new Date:!0}function ee(e){return e?new Date(e)<new Date:!1}function m(e){return e?new Date(e)<new Date:!1}function te(e,t){e.checklist||=[],e.checklist.push({id:Date.now().toString()+Math.random(),text:t,done:!1})}function h(e,t){e.checklist&&=e.checklist.filter(e=>e.id!==t)}function ne(e){if(!e.checklist?.length)return``;let t=e.checklist.filter(e=>e.done).length;return`${t}/${e.checklist.length} (${Math.round(t/e.checklist.length*100)}%)`}function g(e){if(!e)return``;try{let t=new Date(e);return isNaN(t.getTime())?e:t.toLocaleDateString(`ru-RU`,{day:`numeric`,month:`long`,year:`numeric`,hour:`2-digit`,minute:`2-digit`})}catch{return e}}var _=`task-tracker-tasks`,v=`task-tracker-wallet`;function y(){try{let e=localStorage.getItem(_);return e?JSON.parse(e):null}catch{return null}}function b(e){try{localStorage.setItem(_,JSON.stringify(e))}catch(e){console.error(`Ошибка сохранения задач:`,e)}}function re(){try{let e=localStorage.getItem(v);return e?JSON.parse(e):{xp:0,gold:0}}catch{return{xp:0,gold:0}}}function x(e){try{localStorage.setItem(v,JSON.stringify(e))}catch(e){console.error(`Ошибка сохранения кошелька:`,e)}}var S=document.createElement(`link`);S.href=`https://fonts.googleapis.com/css2?family=Uncial+Antiqua&family=Roboto:wght@400;700&display=swap`,S.rel=`stylesheet`,document.head.appendChild(S);var C={xp:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,gold:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,cal:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,repeat:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,edit:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>`,trash:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block text-success"><polyline points="20 6 9 17 4 12"/></svg>`,reset:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>`,sun:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,moon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,monitor:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,gamepad:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,sort:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,stats:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,styleIcon:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`},w={basic:{label:`Базовая`,icon:`🎯`},rpg:{label:`Фэнтези`,icon:`🏰`}},T=()=>localStorage.getItem(`theme`)||`system`,E=()=>localStorage.getItem(`styleTheme`)||`basic`,D=e=>{e===`dark`?document.documentElement.setAttribute(`data-theme`,`dark`):e===`light`?document.documentElement.setAttribute(`data-theme`,`light`):document.documentElement.removeAttribute(`data-theme`)},O=e=>{localStorage.setItem(`theme`,e),D(e)},ie=()=>({dark:`Тёмная`,light:`Светлая`,system:`Системная`})[T()],ae=()=>T()===`dark`?C.moon:T()===`light`?C.sun:C.monitor,k=()=>{let e=document.getElementById(`theme-styles`);e&&e.remove();let t=E(),n=document.createElement(`style`);n.id=`theme-styles`,t===`rpg`?n.textContent=`
      * { font-family: 'Roboto', sans-serif !important; }
      h1, h2, h3, .card-title, .font-bold, .badge { font-family: 'Uncial Antiqua', cursive !important; }

      html {
        background-image: url('./bg-rpg.png') !important;
        background-size: cover !important;
        background-position: center !important;
        background-attachment: fixed !important;
      }
      [data-theme="light"] html { background-image: url('./bg-rpg.png') !important; }
      [data-theme="dark"] html { background-image: url('./bg-rpg.png') !important; }

      #task-list .card::before {
        content: '' !important;
        position: absolute !important;
        top: 0; left: 0; right: 0; bottom: 0;
        background-image: url('./card-rpg.png') !important;
        background-size: cover !important;
        background-position: center !important;
        opacity: 0.3 !important;
        pointer-events: none !important;
        z-index: 0 !important;
      }

      #task-list .card {
        backdrop-filter: blur(6px) !important;
        transition: all 0.3s ease !important;
        border: 2px solid rgba(180, 130, 70, 0.4) !important;
        position: relative; overflow: hidden;
      }
      #task-list .card::after {
        content: ''; position: absolute;
        top: 8px; right: 8px; bottom: 8px; left: 8px;
        border: 1px solid rgba(180, 130, 70, 0.15); pointer-events: none;
      }
      #task-list .card .card-body {
        position: relative; z-index: 1;
        background: rgba(0, 0, 0, 0.5) !important;
        border-radius: 8px !important;
        margin: 4px !important;
        padding: 12px !important;
      }
      [data-theme="light"] #task-list .card .card-body { background: rgba(255, 255, 255, 0.7) !important; }
      #task-list .card .card-title { text-shadow: 0 2px 4px rgba(0,0,0,0.5) !important; }
      [data-theme="light"] #task-list .card .card-title { text-shadow: 0 1px 2px rgba(0,0,0,0.2) !important; }

      [data-theme="light"] #task-list .card { background: rgba(250, 240, 215, 0.5) !important; }
      [data-theme="dark"] #task-list .card { background: rgba(20, 15, 5, 0.6) !important; }
      #task-list .card:hover { transform: translateY(-3px) !important; }
      #task-list .card:has(.badge-accent):hover { border-color: rgba(245,158,11,0.5) !important; background: linear-gradient(0deg, rgba(245,158,11,0.15) 0%, transparent 60%) !important; }
      #task-list .card:has(.badge-warning):hover { border-color: rgba(249,115,22,0.5) !important; background: linear-gradient(0deg, rgba(249,115,22,0.15) 0%, transparent 60%) !important; }
      #task-list .card:has(.badge-secondary):hover { border-color: rgba(168,85,247,0.5) !important; background: linear-gradient(0deg, rgba(168,85,247,0.15) 0%, transparent 60%) !important; }
      #task-list .card:has(.badge-info):hover { border-color: rgba(6,182,212,0.5) !important; background: linear-gradient(0deg, rgba(6,182,212,0.15) 0%, transparent 60%) !important; }
      #task-list .card:has(.badge-success):hover { border-color: rgba(34,197,94,0.5) !important; background: linear-gradient(0deg, rgba(34,197,94,0.15) 0%, transparent 60%) !important; }
      #task-list .card:has(.badge-success) { border-color: rgba(34,197,94,0.5) !important; }
      #task-list .card:has(.badge-error) { border-color: rgba(239,68,68,0.5) !important; }
      @keyframes questAppear { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
      #task-list .card { animation: questAppear 0.4s ease !important; }
      ::-webkit-scrollbar { width: 6px; height: 6px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: rgba(180,130,70,0.3); border-radius: 3px; }
      ::-webkit-scrollbar-thumb:hover { background: rgba(180,130,70,0.5); }
      #open-form-btn { box-shadow: 0 0 15px rgba(217,119,38,0.25) !important; background: linear-gradient(180deg, #b45309, #92400e) !important; border-color: #d97706 !important; color: #fef3c7 !important; }
      #open-form-btn:hover { box-shadow: 0 0 30px rgba(217,119,38,0.5) !important; background: linear-gradient(180deg, #c2410c, #a16207) !important; }
      #modal-overlay .card { border: 1px solid rgba(180,130,70,0.3) !important; box-shadow: 0 0 40px rgba(180,130,70,0.2) !important; }
      .tab.tab-active { box-shadow: 0 2px 10px rgba(217,119,38,0.3) !important; background: rgba(217,119,38,0.15) !important; }
    `:n.textContent=`
      html { background: var(--fallback-b1, #1e293b) !important; background-attachment: fixed !important; }
      [data-theme="light"] html { background: var(--fallback-b1, white) !important; }
      #task-list .card {
        backdrop-filter: none !important;
        border: 1px solid var(--fallback-bc, #e5e7eb) !important;
        background: var(--fallback-b1) !important;
        animation: none !important;
        position: static !important;
        overflow: visible !important;
      }
      #task-list .card::before { display: none !important; }
      #task-list .card::after { display: none !important; }
      #task-list .card .card-body { position: static !important; z-index: auto !important; background: transparent !important; margin: 0 !important; padding: var(--card-padding, 1rem) !important; }
      #task-list .card:hover { transform: none !important; box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important; }
      #task-list .card:has(.badge-accent):hover,
      #task-list .card:has(.badge-warning):hover,
      #task-list .card:has(.badge-secondary):hover,
      #task-list .card:has(.badge-info):hover,
      #task-list .card:has(.badge-success):hover { background: var(--fallback-b1) !important; border-color: var(--fallback-bc, #e5e7eb) !important; }
      #task-list .card:has(.badge-success) { border-color: var(--fallback-bc, #e5e7eb) !important; }
      #task-list .card:has(.badge-error) { border-color: var(--fallback-bc, #e5e7eb) !important; }
      #open-form-btn { background: var(--fallback-p, #7c3aed) !important; border-color: var(--fallback-p, #7c3aed) !important; color: white !important; box-shadow: none !important; }
      #open-form-btn:hover { box-shadow: none !important; background: var(--fallback-pf, #6d28d9) !important; }
      #modal-overlay .card { border: 1px solid var(--fallback-bc, #e5e7eb) !important; box-shadow: 0 0 40px rgba(0,0,0,0.1) !important; }
      .tab.tab-active { box-shadow: none !important; background: var(--fallback-p, #7c3aed) !important; color: white !important; }
      ::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.3) !important; }
      ::-webkit-scrollbar-thumb:hover { background: rgba(139,92,246,0.5) !important; }
    `,document.head.appendChild(n)},oe=e=>{localStorage.setItem(`styleTheme`,e),k(),Q()};D(T()),k();var A=[`in-progress`,`planned`,`backlog`,`done`,`failed`],se={"in-progress":`В процессе`,planned:`Запланировано`,backlog:`Бэклог`,done:`Готово`,failed:`Не выполнено`},j=[`gold`,`orange`,`purple`,`blue`,`green`,`white`,`gray`],M=y()||[{id:`1`,title:`Помыть посуду`,status:`in-progress`,priority:`green`,xp:40,gold:20,deadline:`2026-05-01T18:00`,completionType:`checklist`,checklist:[{id:`s1`,text:`Собрать посуду`,done:!1},{id:`s2`,text:`Вымыть`,done:!1},{id:`s3`,text:`Протереть раковину`,done:!1}],progress:null,onceDone:null,scheduled:``,recurring:`none`,category:`home`},{id:`2`,title:`Прочитать книгу`,status:`backlog`,priority:`blue`,xp:80,gold:40,deadline:``,completionType:`progress`,checklist:null,progress:45,onceDone:null,scheduled:``,recurring:`none`,category:`study`}];y()||b(M);var N=re(),P=A[0],F=null,I=`deadline`,L=`all`,R=!1,z=`general`,B=()=>{M.forEach(e=>{e.status===`planned`&&e.scheduled&&p(e.scheduled)&&(e.status=`in-progress`),(e.status===`in-progress`||e.status===`planned`)&&e.deadline&&ee(e.deadline)&&(e.status=`failed`)}),b(M)};B();var V=e=>{let t=c(N.xp).level;N.xp+=e.xp,N.gold+=e.gold,x(N),c(N.xp).level>t&&W(c(N.xp).level)},H=e=>{N.xp=Math.max(0,N.xp-e.xp),N.gold=Math.max(0,N.gold-e.gold),x(N)},U=()=>{N.xp=0,N.gold=0,x(N),Q()},W=e=>{let t=document.querySelector(`.level-up-toast`);t&&t.remove();let n=document.createElement(`div`);n.className=`level-up-toast fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-bounce`,n.innerHTML=`<div class="px-6 py-3 rounded-box shadow-2xl text-lg font-bold" style="background: linear-gradient(135deg, #7c3aed, #a78bfa); color: white; text-shadow: 0 0 10px rgba(255,255,255,0.5); border: 1px solid rgba(255,255,255,0.2);">⚔️ Уровень ${e}!</div>`,document.body.appendChild(n),setTimeout(()=>n.remove(),2500)},G=e=>{V(e),e.recurring&&e.recurring!==`none`&&(e.status=`planned`,e.deadline=f(e.recurring),e.scheduled=f(e.recurring),e.checklist=e.checklist?e.checklist.map(e=>({...e,done:!1})):null,e.progress=0,e.onceDone=!1)},K=(e,t)=>{if(e.completionType===`checklist`&&e.checklist?.length){let t=e.checklist.every(e=>e.done);t&&e.status!==`done`?e.status=`done`:!t&&e.status===`done`&&(e.status=`in-progress`)}if(e.completionType===`progress`){let t=e.progress||0;t>=100&&e.status!==`done`?e.status=`done`:t<100&&e.status===`done`&&(e.status=`in-progress`)}e.completionType===`once`&&(e.onceDone&&e.status!==`done`?e.status=`done`:!e.onceDone&&e.status===`done`&&(e.status=`in-progress`)),t!==`done`&&e.status===`done`?G(e):t===`done`&&e.status!==`done`&&H(e)},ce=e=>{let t=[...e];return I===`deadline`?t.sort((e,t)=>!e.deadline&&!t.deadline?0:e.deadline?t.deadline?new Date(e.deadline)-new Date(t.deadline):-1:1):I===`priority`?t.sort((e,t)=>j.indexOf(e.priority)-j.indexOf(t.priority)):I===`xp`&&t.sort((e,t)=>t.xp-e.xp),t},le=()=>{let e=M.length,t=M.filter(e=>e.status===`done`).length,n=M.filter(e=>e.status===`failed`).length;return{total:e,done:t,failed:n,active:M.filter(e=>e.status===`in-progress`||e.status===`planned`).length,backlog:M.filter(e=>e.status===`backlog`).length,rate:e>0?Math.round(t/(t+n||1)*100):0}},q=()=>a.map(e=>{let t=M.filter(t=>t.category===e),n=t.filter(e=>e.status===`done`).length,r=t.length,i=r>0?Math.round(n/r*100):0;return{key:e,label:o[e],icon:s[e],total:r,done:n,rate:i}}).filter(e=>e.total>0),J=()=>e.map(e=>{let r=M.filter(t=>t.priority===e),i=r.filter(e=>e.status===`done`).length,a=r.length,o=a>0?Math.round(i/a*100):0;return{key:e,label:t[e],color:n[e],total:a,done:i,rate:o}}).filter(e=>e.total>0),ue=()=>{let e=M.filter(e=>e.status===P);return L!==`all`&&(e=e.filter(e=>e.category===L)),ce(e)},de=e=>{let t=u(e);t.recurring===`none`?t.status=`in-progress`:t.status=`planned`,M.push(t),b(M),Q()},fe=e=>{M=M.filter(t=>t.id!==e),b(M),Q()},pe=(e,t)=>{let n=M.find(t=>t.id===e);if(!n)return;let r=n.status;n.status=t,r!==`done`&&t===`done`?G(n):r===`done`&&t!==`done`&&H(n),b(M),Q()},me=(e,t)=>{let n=M.find(t=>t.id===e);if(!n?.checklist)return;let r=n.checklist.find(e=>e.id===t);if(!r)return;let i=n.status;r.done=!r.done,K(n,i),b(M),Q()},he=e=>{let t=M.find(t=>t.id===e);if(!t||t.completionType!==`once`)return;let n=t.status;t.onceDone=!t.onceDone,K(t,n),b(M),Q()},Y=(e,t)=>{let n=M.find(t=>t.id===e);if(!n)return;let r=n.status;te(n,t),K(n,r),b(M),Q()},ge=(e,t)=>{let n=M.find(t=>t.id===e);if(!n)return;let r=n.status;h(n,t),K(n,r),b(M),Q()},X=(e,t)=>{let n=M.find(t=>t.id===e);if(!n||n.completionType!==`progress`)return;let r=n.status;n.progress=Math.max(0,Math.min(100,t)),K(n,r),b(M),Q()},_e=(e,t)=>{if(!e.checklist)return``;let n=e.checklist.map(n=>`
    <li class="flex items-center gap-2">
      <input type="checkbox" ${n.done?`checked`:``} class="checkbox checkbox-sm" data-act="toggle-sub" data-tid="${e.id}" data-sid="${n.id}" ${t?`disabled`:``}>
      <span class="flex-1 text-sm ${n.done?`line-through opacity-50`:``}">${n.text}</span>
      ${t?``:`<button class="btn btn-xs btn-ghost text-error" data-act="remove-sub" data-tid="${e.id}" data-sid="${n.id}">${C.trash}</button>`}
    </li>`).join(``),r=ne(e);return`${r?`<p class="text-xs opacity-50 mb-1">Прогресс: ${r}</p>`:``}<ul class="space-y-1 mb-2">${n}</ul>${t?``:`<div class="flex gap-2"><input type="text" class="input input-xs input-bordered flex-1" placeholder="Новая подзадача" data-act="sub-input" data-tid="${e.id}"><button class="btn btn-xs btn-ghost" data-act="add-sub" data-tid="${e.id}">${C.plus}</button></div>`}`},ve=(e,t)=>{let n=e.progress||0;return`<div class="flex items-center gap-2 mt-2">${t?``:`<button class="btn btn-xs btn-ghost" data-act="prog-dec" data-tid="${e.id}">${C.minus}</button>`}<div class="w-full bg-base-300 rounded-full h-2.5"><div class="bg-primary h-2.5 rounded-full" style="transition: width 0.2s; width:${n}%"></div></div>${t?``:`<button class="btn btn-xs btn-ghost" data-act="prog-inc" data-tid="${e.id}">${C.plus}</button>`}<span class="text-xs opacity-50 w-10 text-right">${n}%</span></div>`},ye=(e,t)=>`<div class="flex items-center gap-2 mt-2"><input type="checkbox" ${e.onceDone?`checked`:``} class="checkbox checkbox-sm" data-act="toggle-once" data-tid="${e.id}" ${t?`disabled`:``}><span class="text-sm ${e.onceDone?`line-through opacity-50`:``}">${e.onceDone?`Выполнено`:`Отметить`}</span></div>`,be=r=>{if(F===r.id){let n=e.map(e=>`<option value="${e}" ${r.priority===e?`selected`:``}>${t[e]}</option>`).join(``),c=Object.entries(i).map(([e,t])=>`<option value="${e}" ${r.recurring===e?`selected`:``}>${t}</option>`).join(``),l=a.map(e=>`<option value="${e}" ${r.category===e?`selected`:``}>${s[e]} ${o[e]}</option>`).join(``);return`<div class="card bg-base-100 shadow-xl border-2 border-primary mb-4"><div class="card-body p-3 sm:p-4">
      <form class="edit-form space-y-3" data-tid="${r.id}">
        <div><label class="text-xs opacity-50">Название</label><input type="text" name="title" value="${r.title}" class="input input-bordered w-full input-sm" required></div>
        <div class="grid grid-cols-2 gap-3">
          <div><label class="text-xs opacity-50">Приоритет</label><select name="priority" class="select select-bordered w-full select-sm">${n}</select></div>
          <div><label class="text-xs opacity-50">Категория</label><select name="category" class="select select-bordered w-full select-sm">${l}</select></div>
        </div>
        <div><label class="text-xs opacity-50">Тип</label><select name="completionType" class="select select-bordered w-full select-sm">
          <option value="once" ${r.completionType===`once`?`selected`:``}>Однократно</option>
          <option value="progress" ${r.completionType===`progress`?`selected`:``}>Прогресс-бар</option>
          <option value="checklist" ${r.completionType===`checklist`?`selected`:``}>Чеклист</option>
        </select></div>
        <div class="grid grid-cols-2 gap-3">
          <div><label class="text-xs opacity-50">${C.xp} XP</label><input type="number" name="xp" value="${r.xp}" class="input input-bordered w-full input-sm"></div>
          <div><label class="text-xs opacity-50">${C.gold} Gold</label><input type="number" name="gold" value="${r.gold}" class="input input-bordered w-full input-sm"></div>
        </div>
        <div><label class="text-xs opacity-50">${C.repeat} Повтор</label><select name="recurring" class="select select-bordered w-full select-sm">${c}</select></div>
        ${r.status===`backlog`?``:`
        <div><label class="text-xs opacity-50">${C.clock} Начало</label><input type="datetime-local" name="scheduled" value="${r.scheduled}" class="input input-bordered w-full input-sm"></div>
        <div><label class="text-xs opacity-50">${C.cal} Дедлайн</label><input type="datetime-local" name="deadline" value="${r.deadline}" class="input input-bordered w-full input-sm"></div>`}
        <input type="hidden" name="onceDone" value="${r.onceDone||!1}">
        <div class="flex gap-2 justify-end">
          <button type="button" class="btn btn-sm btn-ghost" data-act="cancel-edit">Отмена</button>
          <button type="submit" class="btn btn-sm btn-primary">${C.check} Сохранить</button>
        </div>
      </form>
    </div></div>`}let c=r.status===`done`,u=r.status===`failed`,d=r.status===`planned`,f=r.status===`backlog`,p=r.completionType===`checklist`?_e(r,!1):r.completionType===`progress`?ve(r,!1):ye(r,!1);return`<div class="card bg-base-100 shadow-xl border border-base-300 mb-3 ${c?`opacity-75 border-success`:u?`opacity-75 border-error`:d?`border-info`:``}"><div class="card-body p-3 sm:p-4">
    <div class="flex justify-between items-start gap-2">
      <div class="min-w-0 flex-1">
        <h3 class="card-title text-base sm:text-lg ${c||u?`line-through opacity-50`:``}">${r.title}</h3>
        <div class="flex items-center gap-1.5 mt-1 flex-wrap">
          <span class="badge badge-sm ${c?`badge-success`:u?`badge-error`:d?`badge-info`:`badge-outline`}">${l(r.status)}</span>
          <span class="text-xs opacity-70">${s[r.category]}</span>
          ${r.recurring===`none`?``:`<span class="badge badge-sm badge-ghost">${C.repeat} ${i[r.recurring]}</span>`}
          <span class="badge badge-sm ${n[r.priority]||`badge-ghost`}">${t[r.priority]}</span>
          <select class="select select-xs select-bordered" data-act="change-status" data-tid="${r.id}">
            <option value="in-progress" ${r.status===`in-progress`?`selected`:``}>В процессе</option>
            <option value="planned" ${r.status===`planned`?`selected`:``}>Запланировано</option>
            <option value="backlog" ${r.status===`backlog`?`selected`:``}>Бэклог</option>
            <option value="done" ${r.status===`done`?`selected`:``}>Готово</option>
            <option value="failed" ${r.status===`failed`?`selected`:``}>Не выполнено</option>
          </select>
        </div>
      </div>
      <div class="text-right text-xs sm:text-sm shrink-0">
        <div class="flex items-center gap-1 text-warning whitespace-nowrap">${C.xp} ${r.xp} XP</div>
        <div class="flex items-center gap-1 text-warning whitespace-nowrap">${C.gold} ${r.gold} Gold</div>
      </div>
    </div>
    ${!f&&r.scheduled?`<p class="text-xs opacity-50 mt-1">${C.clock} ${g(r.scheduled)}</p>`:``}
    ${!f&&r.deadline?`<p class="text-xs opacity-50 mt-1">${C.cal} ${g(r.deadline)}</p>`:``}
    <div class="mt-2">${p}</div>
    <div class="mt-2 flex gap-2 justify-end">
      <button class="btn btn-xs btn-ghost" data-act="edit-task" data-tid="${r.id}">${C.edit}</button>
      <button class="btn btn-xs btn-error btn-ghost" data-act="delete-task" data-tid="${r.id}">${C.trash}</button>
    </div>
  </div></div>`},xe=()=>`<div class="tabs tabs-boxed mb-4 justify-start overflow-x-auto flex-nowrap">${A.map(e=>`<a class="tab shrink-0 ${P===e?`tab-active`:``}" data-act="filter" data-val="${e}">${se[e]}</a>`).join(``)}</div>`,Se=()=>`<div class="flex items-center gap-1.5 mb-4 justify-start flex-wrap">
    ${[`all`,...a].map(e=>{let t=e===`all`?`Все`:`${s[e]} ${o[e]}`;return`<a class="badge badge-sm ${L===e?`badge-primary`:`badge-ghost`} cursor-pointer" data-act="cat-filter" data-val="${e}">${t}</a>`}).join(``)}
  </div>`,Z=()=>`
  <div class="flex items-center gap-2 mb-4 justify-between">
    <button class="btn btn-xs btn-ghost" data-act="toggle-stats">${C.stats} ${R?`Скрыть`:`Статистика`}</button>
    <div class="flex items-center gap-2">
      <span class="text-xs opacity-50 hidden sm:inline">${C.sort}</span>
      <select class="select select-xs select-bordered" data-act="sort">
        <option value="deadline" ${I===`deadline`?`selected`:``}>По дедлайну</option>
        <option value="priority" ${I===`priority`?`selected`:``}>По приоритету</option>
        <option value="xp" ${I===`xp`?`selected`:``}>По награде</option>
      </select>
    </div>
  </div>`,Ce=()=>{let e=le();return`<div class="card bg-base-200 mb-4">
    <div class="card-body p-3 sm:p-4">
      <h3 class="font-bold text-sm mb-2">Статистика</h3>
      <div class="flex gap-1.5 mb-3 flex-wrap">
        <a class="badge badge-sm ${z===`general`?`badge-primary`:`badge-ghost`} cursor-pointer" data-act="stats-tab" data-val="general">Общая</a>
        <a class="badge badge-sm ${z===`categories`?`badge-primary`:`badge-ghost`} cursor-pointer" data-act="stats-tab" data-val="categories">Категории</a>
        <a class="badge badge-sm ${z===`priorities`?`badge-primary`:`badge-ghost`} cursor-pointer" data-act="stats-tab" data-val="priorities">Приоритеты</a>
      </div>
      ${z===`general`?`
        <div class="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center text-sm mb-3">
          <div><div class="font-bold text-lg">${e.total}</div><div class="text-xs opacity-50">Всего</div></div>
          <div><div class="font-bold text-lg text-success">${e.done}</div><div class="text-xs opacity-50">Готово</div></div>
          <div><div class="font-bold text-lg text-error">${e.failed}</div><div class="text-xs opacity-50">Провал</div></div>
          <div><div class="font-bold text-lg text-info">${e.active}</div><div class="text-xs opacity-50">В работе</div></div>
          <div><div class="font-bold text-lg">${e.backlog}</div><div class="text-xs opacity-50">Бэклог</div></div>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs opacity-50 w-12 sm:w-16">Успех</span>
          <div class="w-full bg-base-300 rounded-full h-2.5"><div class="bg-success h-2.5 rounded-full" style="width:${e.rate}%"></div></div>
          <span class="text-xs font-bold">${e.rate}%</span>
        </div>
      `:z===`categories`?`
        <div class="space-y-2">
          ${q().map(e=>`
            <div class="flex items-center gap-2 text-sm">
              <span>${e.icon}</span>
              <span class="flex-1 truncate">${e.label}</span>
              <span class="text-xs font-bold text-success">${e.done}</span>
              <span class="text-xs opacity-50">/ ${e.total}</span>
              <div class="w-16 sm:w-20 bg-base-300 rounded-full h-2"><div class="bg-success h-2 rounded-full" style="width:${e.rate}%"></div></div>
              <span class="text-xs w-8 text-right">${e.rate}%</span>
            </div>
          `).join(``)}
          ${q().length===0?`<p class="text-xs opacity-50">Нет задач с категориями</p>`:``}
        </div>
      `:`
        <div class="space-y-2">
          ${J().map(e=>`
            <div class="flex items-center gap-2 text-sm">
              <span class="badge badge-sm ${e.color} shrink-0">${e.label}</span>
              <span class="text-xs font-bold text-success">${e.done}</span>
              <span class="text-xs opacity-50">/ ${e.total}</span>
              <div class="w-16 sm:w-20 bg-base-300 rounded-full h-2"><div class="bg-success h-2 rounded-full" style="width:${e.rate}%"></div></div>
              <span class="text-xs w-8 text-right">${e.rate}%</span>
            </div>
          `).join(``)}
          ${J().length===0?`<p class="text-xs opacity-50">Нет задач</p>`:``}
        </div>
      `}
    </div>
  </div>`},we=()=>{let e=E(),t=Object.entries(w).map(([e,t])=>`<li><a data-act="set-style" data-val="${e}">${t.icon} ${t.label}</a></li>`).join(``);return`<div class="dropdown dropdown-end">
    <button class="btn btn-xs btn-ghost" tabindex="0">${w[e]?.icon||`🎨`}</button>
    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-44 z-50">
      ${t}
    </ul>
  </div>`},Te=()=>`<button class="btn btn-primary w-full mb-4 sm:mb-6" id="open-form-btn">Создать задачу</button>`,Q=()=>{B();let n=c(N.xp),r=d(),l=Object.entries(i).map(([e,t])=>`<option value="${e}">${t}</option>`).join(``),u=a.map(e=>`<option value="${e}" ${e===`other`?`selected`:``}>${s[e]} ${o[e]}</option>`).join(``);document.querySelector(`#app`).innerHTML=`<div class="container mx-auto max-w-2xl px-2 sm:px-4 py-2 sm:py-4">
    <div class="navbar bg-base-100 rounded-box shadow-sm mb-3 sm:mb-6 px-2 sm:px-4 min-h-0 py-2">
      <div class="flex-1"><h1 class="text-base sm:text-xl font-bold">${C.gamepad} <span class="hidden sm:inline">Трекер задач</span></h1></div>
      <div class="flex-none gap-1.5 sm:gap-3 items-center">
        <div class="flex items-center gap-1.5 sm:gap-2">
          <span class="badge badge-primary badge-sm sm:badge-md shrink-0">Ур. ${n.level}</span>
          <div class="flex flex-col items-center min-w-0 max-w-[100px] sm:max-w-[140px]">
            <div class="w-20 sm:w-32 bg-base-300 rounded-full h-2 sm:h-3"><div class="bg-primary h-2 sm:h-3 rounded-full" style="width:${n.progress}%"></div></div>
            <span class="text-xs opacity-50 mt-0.5">${n.progress}%</span>
          </div>
        </div>
        <div class="flex items-center gap-1"><span class="hidden sm:inline">${C.gold}</span><span class="font-bold text-xs sm:text-sm whitespace-nowrap">🪙 ${N.gold}</span></div>
        ${we()}
        <button class="btn btn-xs btn-ghost" data-act="toggle-theme" title="${ie()}">${ae()}</button>
        <button class="btn btn-xs btn-ghost text-error" data-act="reset-wallet" title="Сбросить">${C.reset}</button>
      </div>
    </div>
    ${Te()}
    ${xe()}
    ${Se()}
    ${Z()}
    ${R?Ce():``}
    <div id="task-list">${ue().map(be).join(``)||`<p class="text-center opacity-50 text-sm">Задач нет</p>`}</div>
    <div id="modal-overlay" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:100; justify-content:center; align-items:center; padding:1rem;">
      <div class="card bg-base-100 shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div class="card-body p-4 sm:p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="font-bold text-lg">Новая задача</h3>
            <button class="btn btn-sm btn-ghost" id="close-modal-btn">✕</button>
          </div>
          <form id="add-form" class="space-y-3">
            <div><label class="text-xs opacity-50">Название</label><input type="text" name="title" placeholder="Название задачи" class="input input-bordered w-full input-sm" required></div>
            <div><label class="text-xs opacity-50">Приоритет</label><select name="priority" id="form-priority" class="select select-bordered w-full select-sm">${e.map(e=>`<option value="${e}">${t[e]}</option>`).join(``)}</select></div>
            <div><label class="text-xs opacity-50">Категория</label><select name="category" class="select select-bordered w-full select-sm">${u}</select></div>
            <div><label class="text-xs opacity-50">Тип задачи</label><select name="completionType" class="select select-bordered w-full select-sm"><option value="once">Однократно</option><option value="progress">Прогресс-бар</option><option value="checklist">Чеклист</option></select></div>
            <div><label class="text-xs opacity-50">Повтор</label><select name="recurring" id="form-recurring" class="select select-bordered w-full select-sm">${l}</select></div>
            <div id="form-scheduled"><label class="text-xs opacity-50">${C.clock} Начало</label><input type="datetime-local" name="scheduled" class="input input-bordered w-full input-sm"></div>
            <div><label class="text-xs opacity-50">${C.cal} Дедлайн</label><input type="datetime-local" name="deadline" value="${r}" class="input input-bordered w-full input-sm"></div>
            <div class="grid grid-cols-2 gap-3">
              <div><label class="text-xs opacity-50">${C.xp} XP</label><input type="number" id="form-xp" value="10" class="input input-bordered w-full input-sm" disabled></div>
              <div><label class="text-xs opacity-50">${C.gold} Gold</label><input type="number" id="form-gold" value="5" class="input input-bordered w-full input-sm" disabled></div>
            </div>
            <button type="submit" class="btn btn-primary w-full btn-sm">${C.plus} Добавить</button>
          </form>
        </div>
      </div>
    </div>
  </div>`};document.addEventListener(`click`,e=>{let t=t=>e.target.closest(`[data-act="${t}"]`),n=e=>t(e);if(e.target.closest(`#open-form-btn`)){document.getElementById(`modal-overlay`).style.display=`flex`,document.querySelector(`#form-recurring`)?.value===`none`?document.getElementById(`form-scheduled`).style.display=`none`:document.getElementById(`form-scheduled`).style.display=``;return}if(e.target.closest(`#close-modal-btn`)||e.target.closest(`#modal-overlay`)&&!e.target.closest(`.card`)){document.getElementById(`modal-overlay`).style.display=`none`;return}if(n(`set-style`)){oe(n(`set-style`).dataset.val);return}if(n(`stats-tab`)){z=n(`stats-tab`).dataset.val,Q();return}if(n(`toggle-stats`)){R=!R,Q();return}if(n(`cat-filter`)){L=n(`cat-filter`).dataset.val,Q();return}if(n(`prog-inc`)){let e=M.find(e=>e.id===n(`prog-inc`).dataset.tid);e&&X(n(`prog-inc`).dataset.tid,(e.progress||0)+10);return}if(n(`prog-dec`)){let e=M.find(e=>e.id===n(`prog-dec`).dataset.tid);e&&X(n(`prog-dec`).dataset.tid,(e.progress||0)-10);return}if(n(`filter`)){P=n(`filter`).dataset.val,Q();return}if(n(`toggle-sub`)){me(n(`toggle-sub`).dataset.tid,n(`toggle-sub`).dataset.sid);return}if(n(`toggle-once`)){he(n(`toggle-once`).dataset.tid);return}if(n(`remove-sub`)){ge(n(`remove-sub`).dataset.tid,n(`remove-sub`).dataset.sid);return}if(n(`add-sub`)){let e=document.querySelector(`[data-act="sub-input"][data-tid="${n(`add-sub`).dataset.tid}"]`);e?.value.trim()&&Y(n(`add-sub`).dataset.tid,e.value.trim());return}if(n(`delete-task`)){confirm(`Удалить задачу?`)&&fe(n(`delete-task`).dataset.tid);return}if(n(`edit-task`)){F=n(`edit-task`).dataset.tid,Q();return}if(n(`cancel-edit`)){F=null,Q();return}if(n(`toggle-theme`)){O(T()===`dark`?`light`:T()===`light`?`system`:`dark`),Q();return}if(n(`reset-wallet`)){confirm(`Сбросить весь XP и Gold?`)&&U();return}}),document.addEventListener(`change`,e=>{if(e.target.matches(`#form-priority`)&&$(e.target.value),e.target.matches(`#form-recurring`)){let t=document.getElementById(`form-scheduled`);t&&(t.style.display=e.target.value===`none`?`none`:``)}e.target.matches(`[data-act="sort"]`)&&(I=e.target.value,Q());let t=e.target.closest(`[data-act="change-status"]`);t&&pe(t.dataset.tid,t.value)}),document.addEventListener(`submit`,e=>{if(e.target.matches(`.edit-form`)){e.preventDefault();let t=Object.fromEntries(new FormData(e.target));if(t.scheduled&&t.deadline&&new Date(t.deadline)<new Date(t.scheduled)){alert(`Дедлайн не может быть раньше времени начала`);return}if(t.scheduled&&m(t.scheduled)){alert(`Время начала не может быть в прошлом`);return}if(t.deadline&&m(t.deadline)){alert(`Дедлайн не может быть в прошлом`);return}Ee(e.target.dataset.tid,t);return}if(e.target.matches(`#add-form`)){e.preventDefault();let t=Object.fromEntries(new FormData(e.target));if(t.recurring===`none`&&(t.scheduled=``),t.scheduled&&t.deadline&&new Date(t.deadline)<new Date(t.scheduled)){alert(`Дедлайн не может быть раньше времени начала`);return}if(t.scheduled&&m(t.scheduled)){alert(`Время начала не может быть в прошлом`);return}if(t.deadline&&m(t.deadline)){alert(`Дедлайн не может быть в прошлом`);return}t.xp=parseInt(document.querySelector(`#form-xp`).value)||0,t.gold=parseInt(document.querySelector(`#form-gold`).value)||0,de(t),document.getElementById(`modal-overlay`).style.display=`none`,e.target.reset();let n=document.querySelector(`#form-priority`);n&&(n.value=`gray`,$(`gray`))}}),document.addEventListener(`keydown`,e=>{if(e.key===`Enter`){let t=e.target.closest(`[data-act="sub-input"]`);t?.value.trim()&&Y(t.dataset.tid,t.value.trim())}});var $=e=>{let t=document.querySelector(`#form-xp`),n=document.querySelector(`#form-gold`);if(!t||!n)return;let i=r[e];i?(t.value=i.xp,n.value=i.gold,t.disabled=!0,n.disabled=!0):(t.disabled=!1,n.disabled=!1,t.value=``,n.value=``,t.placeholder=`XP`,n.placeholder=`Gold`)},Ee=(e,t)=>{let n=M.find(t=>t.id===e);if(n){if(t.scheduled&&t.deadline&&new Date(t.deadline)<new Date(t.scheduled)){alert(`Дедлайн не может быть раньше времени начала`);return}if(t.scheduled&&m(t.scheduled)){alert(`Время начала не может быть в прошлом`);return}if(t.deadline&&m(t.deadline)){alert(`Дедлайн не может быть в прошлом`);return}t.title!==void 0&&(n.title=t.title),t.priority!==void 0&&(n.priority=t.priority),t.deadline!==void 0&&(n.deadline=t.deadline),t.scheduled!==void 0&&(n.scheduled=t.scheduled),t.recurring!==void 0&&(n.recurring=t.recurring),t.category!==void 0&&(n.category=t.category),t.completionType!==void 0&&n.completionType!==t.completionType&&(n.completionType=t.completionType,n.checklist=t.completionType===`checklist`?[]:null,n.progress=t.completionType===`progress`?0:null,n.onceDone=t.completionType===`once`?!1:null),t.xp!==void 0&&(n.xp=parseInt(t.xp)||0),t.gold!==void 0&&(n.gold=parseInt(t.gold)||0),t.onceDone!==void 0&&(n.onceDone=t.onceDone===`true`),b(M),F=null,Q()}};Q();