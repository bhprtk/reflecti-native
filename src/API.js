import ServerActions from './actions/ServerActions';

let API = {
  fetchLinks() {
    console.log('fetchLinks');

    let get_images_url = `http://meme-hub.herokuapp.com/images/getAll`;
    console.log('get_images_url', get_images_url);

    fetch(get_images_url, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then(responseData => {
      // console.log('responseData', responseData);
      ServerActions.receiveLinks(responseData);
    })
    .catch(err => {
      console.log('err', err);
    });
  }



};


export default API;
