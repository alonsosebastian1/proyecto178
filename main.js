var latitude=21.96068,longitude=-100.03550;

mapboxgl.accessToken='pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';
var map=new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center:[longitude,latitude],
    zoom:4
})
map.addControl(
    new MapboxGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
)
var img1= document.querySelector("#amber")
var marker1=new mapboxgl.Marker({
    element: img1
    })
    .setLngLat([21.94800 , -100.02370])
    .addTo(map);
    var img2= document.querySelector("#gateway")
var marker2=new mapboxgl.Marker({
    element: img2
    })
    .setLngLat([21.94437 , -100.00992])
    .addTo(map);
    var img3= document.querySelector("#gate")
var marker3=new mapboxgl.Marker({
    element: img3
    })
    .setLngLat([21.93116 , -100.04185])
    .addTo(map);
    var img4= document.querySelector("#lotus")
var marker4=new mapboxgl.Marker({
    element: img4
    })
    .setLngLat([21.93189 , -99.99263])
    .addTo(map);
    var img5= document.querySelector("#victoria")
var marker5=new mapboxgl.Marker({
    element: img5
    })
    .setLngLat([21.95708 , -99.97322])
    .addTo(map);