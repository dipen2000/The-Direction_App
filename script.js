mapboxgl.accessToken = 
        'pk.eyJ1IjoiZGlwZW4yMDAwIiwiYSI6ImNrcmc5ZG5ibTE1bm8ydm9lYnViYTZ2bnoifQ.zstT_lb4uNbPY7gBOky6jg';

navigator.geolocation.getCurrentPosition(success , error , {enableHighAccuracy: true});

function success(position){
    console.log(position.coords.longitude , position.coords.latitude);
    setUpMap([position.coords.longitude , position.coords.latitude]);
}
function error(position){
    setUpMap([20.5937 , 78.9629]);
}
function setUpMap(centerCoordinates){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center : centerCoordinates,
        zoom : 9
    });
    map.addControl(new mapboxgl.NavigationControl());
    
map.addControl(
    new MapboxDirections({
    accessToken: mapboxgl.accessToken
    }),
    'top-left'
    );
}
