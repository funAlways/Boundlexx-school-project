const content = document.querySelector('.content');
const prev_button = document.querySelector('#prev');
const next_button = document.querySelector('#next');
const search_form = document.querySelector('#search_form');
const text_query = document.querySelector('#query');

let current_page;
let current_query;
let hasChanged = false;

const constructURL = () => {
    return window.location.origin + window.location.pathname + `?p=${current_page}&q=${current_query}`;
};

const save_query_params = () => {

   const url_params = new URLSearchParams(window.location.search);
   const param_page = Number(url_params.get('p') || 1);
   const param_query =  text_query.value || url_params.get('q') || '';
   current_page = hasChanged ? 1 : param_page;
   current_query = param_query;
};


const renderContent = (localizedName, subtitle, gameid) => 
   `<tr><td>${localizedName}</td>` +
   `<td>${subtitle}</td>` +
   `<td><a href="/web/item?game-id=${gameid}">Details</a></li></td></tr>`;


const parseItems = items => {
   return items.map(item => {
      return renderContent(item.localization[0].name, item.item_subtitle.localization[0].name, item.game_id);
   }).join("");
};

// const retrieveItems = () => {
//    axios.get('/api/items')
//       .then(results => {
//          let parsedItems = parseItems(results.data.results);

//          content.innerHTML = parsedItems;
//       });
// };

const retrieveItems = () => {
   let URL = '/api/items';

   let query = {
      offset: getOffset(),
      query: current_query
   };

   URL += `/?${new URLSearchParams(query).toString()}`;

   axios.get(URL)
      .then( (response) => {
         let parsedItems = parseItems(response.data.results);
         content.innerHTML = parsedItems;
    });

}

const init = () => {
   save_query_params();
   text_query.value = current_query;
   retrieveItems();
};

const getOffset = () => (current_page - 1) * 20;


prev_button.onclick = e => {
   current_page = current_page > 1 ? current_page - 1 : 1;
   window.location.href = constructURL();
}

next_button.onclick = e => {
   current_page += 1;
   window.location.href = constructURL();
}

search_form.onsubmit = e => {
   e.preventDefault();
   if(current_query != text_query.value) {
      hasChanged = true;
   }
   save_query_params();
   window.location.href = constructURL();
};

init();

