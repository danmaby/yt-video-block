console.log("Hello World! (from create-block-yt-video-block block)"),document.addEventListener("click",(e=>{const o=e.target.closest(".wp-block-create-block-yt-video-block button");if(!o)return;const t=o.closest(".wp-block-create-block-yt-video-block"),l=t.dataset.videoUrl;if(l){const e=l.includes("?")?`${l}&autoplay=1`:`${l}?autoplay=1`;t.innerHTML=`\n            <iframe\n                width="100%"\n                height="100%"\n                src="${e}"\n                frameborder="0"\n                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n                allowfullscreen\n                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"\n            ></iframe>\n        `}}));