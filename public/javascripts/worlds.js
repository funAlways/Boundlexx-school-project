const content = document.querySelector('.content');

const renderContent = (id, name, tier, type) => 
   `<tr><td>${name}</td>` +
   `<td>Tier ${tier+1} ${type}</td>` +
   `<td><a href="/web/world?id=${id}">Details</a></td></tr>`;


const parseWorlds = worlds => {
   return worlds.map(world => {
      return renderContent(world.id, world.display_name,world.tier, world.world_type);
   }).join("");
};

const retrieveWorlds = () => {
   axios.get('/api/worlds')
      .then(results => {
         let parsedWorlds =
            parseWorlds(results.data.results);

         content.innerHTML = parsedWorlds;
      });
};

const init = () => {
   retrieveWorlds();
};

init();
