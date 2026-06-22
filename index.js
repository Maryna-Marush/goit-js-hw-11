import{a as l,S as d,i as c}from"./assets/vendor-CVWx-W0A.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();l.defaults.baseURL="https://pixabay.com/api/";function p(s){const o="56406455-6dc399abae623877bee600229",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return l.get(`?${i}`).then(t=>t.data)}const u=document.querySelector(".gallery"),n=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(({webformatURL:i,largeImageURL:t,tags:e,likes:r,views:a,comments:f,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" src="${i}" alt="${e}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> <br/> ${r}</p>
          <p class="info-item"><b>Views</b> <br/> ${a}</p>
          <p class="info-item"><b>Comments</b> <br/> ${f}</p>
          <p class="info-item"><b>Downloads</b> <br/> ${m}</p>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",o),h.refresh()}function y(){u.innerHTML=""}function b(){n&&n.classList.remove("is-hidden")}function L(){n&&n.classList.add("is-hidden")}const P=document.querySelector(".form");P.addEventListener("submit",S);function S(s){s.preventDefault();const o=s.currentTarget,i=o.elements["search-text"].value.trim();if(i===""){c.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}y(),b(),p(i).then(t=>{if(t.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}).catch(t=>{console.error(t),c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{L(),o.reset()})}
//# sourceMappingURL=index.js.map
