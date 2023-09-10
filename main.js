import "./style.css";

var map = L.map("map", { zoom: 19, scrollWheelZoom: false }).setView(
  [4.878150611533037, 6.963034530882102],
  19
);

L.tileLayer(
  "https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}",
  {
    attribution: '&copy; <a href="http://maps">Google map</a>',
  }
).addTo(map);
