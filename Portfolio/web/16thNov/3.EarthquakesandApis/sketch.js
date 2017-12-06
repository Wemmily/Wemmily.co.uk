var mapimg;

var clat = 0;
var clon = 0;

var ww = 1024;
var hh = 512;

var zoom = 1;
var earthquakes;

function preload() {
  // The clon and clat in this url are edited to be in the correct order.
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
    clon + ',' + clat + ',' + zoom + '/' +
    ww + 'x' + hh +
    '?access_token=pk.eyJ1Ijoic2FtdHJpcHAiLCJhIjoiY2phMTg0OGQyMXo2ajMzcG9hemhlMTMwaCJ9.OWJc-t0MSqUbtyl9uXhU7w');

  earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
}

function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}


function setup() {
  createCanvas(ww, hh);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimg, 0, 0);

  var cx = mercX(clon);
  var cy = mercY(clat);

  console.log(earthquakes);

  for(var i=1; i < earthquakes.length; i++){
    var data = earthquakes [i].split (/,/);

    console.log (data);

    var lat = data [1];
    var lon = data [2];
    var mag = data [4];
    // var type = data [15];

    var x = mercX(lon) -cx;
    var y = mercY (lat) -cy;

    mag = pow(10,mag);
    mag = sqrt(mag);

    var max = sqrt(pow(10,10));
    var d = map(mag, 0, max, 0, 180);

    stroke(255, 0, 255);
    fill( 255, 0, 255, 200);
    ellipse (x, y, d, d,);

// if type = earthquake 
// if type = quarry blast
// if type = explosion

  }

}