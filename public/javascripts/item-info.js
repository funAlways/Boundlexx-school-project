const content = document.querySelector('.content');

const renderContent = (data) =>
   `<div class="header">${data.localization[0].name}</div>` +
   `<div class="meta">${data.item_subtitle.localization[0].name}</div>` +
   `<div class="description"><p>"${data.description.strings[0].text}"</p></li>` +
   `<div class="description">Has Color: ${data.has_colors}<br>` +
   `Max Stack: ${data.max_stack}<br>`  +
   `Is Resource: ${data.is_resource}<br>` +
   `Building XP: ${data.build_xp}<br>` +
   `Mining XP: ${data.mine_xp}</div>`;


const parseItems = item => {
   return renderContent(item);
};

const retrieveItems = () => {
   const url = new URL(window.location.href);
   const gameId = url.searchParams.get('game-id');

   axios.get(`/api/items/${gameId}`)
      .then(results => {
         let parsedItems = parseItems(results.data);
         content.innerHTML = parsedItems;
      });
};

const init = () => {
   retrieveItems();
};

init();
