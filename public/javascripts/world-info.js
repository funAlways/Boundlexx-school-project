const content = document.querySelector('.card');

const renderContent = (data) =>
   `<div class="image"><img src="${data.image_url}" width=200 height=200></div>` + 
   `<div class="content">`+
   `<div class="header">${data.display_name}</div>` +
   `<div class="meta">Tier ${data.tier+1}</div>` +
   `<br>Type: ${data.world_type}` +
   `<br>Server Region: ${data.region}` +
   `<br>World Size (chunks): ${data.size}`+
   `<br>Liquid: ${data.surface_liquid} (Surface)`+
   `<br>Liquid: ${data.core_liquid} (Core)</div>`
   
   ;


const parseWorlds = world => {
   return `<ul>` +
      renderContent(world) +
      `</ul>`;
};

const retrieveWorlds = () => {
   const url = new URL(window.location.href);
   const id = url.searchParams.get('id');
   axios.get(`/api/worlds/${id}`)
      .then(results => {
         let parsedWorlds = parseWorlds(results.data);
         content.innerHTML = parsedWorlds;
      });
};

const init = () => {
   retrieveWorlds();
};

init();
