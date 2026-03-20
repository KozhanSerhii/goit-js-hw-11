import{a as u,S as d,i}from"./assets/vendor-D8kWkXeg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f="55097686-021960f1602add3603143e36a",m="https://pixabay.com/api/";function h(s){const o={params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}};return u.get(m,o).then(e=>e.data)}const p=document.querySelector(".gallery"),n=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const o=s.map(e=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
          <p><b>Likes</b> <span>${e.likes}</span></p>
          <p><b>Views</b> <span>${e.views}</span></p>
          <p><b>Comments</b> <span>${e.comments}</span></p>
          <p><b>Downloads</b> <span>${e.downloads}</span></p>
        </div>
      </li>
    `).join("");p.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){p.innerHTML=""}function L(){n&&n.classList.remove("hidden")}function w(){n&&n.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(o===""){i.warning({message:"Please fill the search field",position:"topRight"});return}b(),L(),h(o).then(e=>{if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(e.hits)}).catch(e=>{console.error(e),i.error({message:"Something went wrong! Please try again later.",position:"topRight"})}).finally(()=>{w(),c.reset()})});
//# sourceMappingURL=index.js.map
