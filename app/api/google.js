
export default async  function locationList(req, res) {

      fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=bangalo&key=AIzaSyBmFWwA3268MWaMGG37BN2jZ5XzR4gxoRw&components=country:in', {
        method: 'GET',
      })
      .then(response => response.json()) // Parse JSON response
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
}