if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js') //service worker file name
    .then( () => {
      console.log('service worker registered successfully');
    } )
    .catch( (err) => {
      console.log('error');
      console.log(err);
    } )
}

else {
  console.log('service worker is not available');
}
