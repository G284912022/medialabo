let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
let a = document.querySelector('button#kensaku');
a.addEventListener('click', kensaku);

function kensaku(){
  console.log(data.name);
  let ido = document.querySelector('li#ido');
  ido.textContent = ("緯度は"+data.coord.lon);
  console.log("緯度は"+data.coord.lon);
  let keido = document.querySelector('li#keido');
  keido.textContent = ("経度は"+data.coord.lat);
  console.log("経度は"+data.coord.lat);
  let tenki = document.querySelector('li#tenki');
  for(let n of data.weather) {
    tenki.textContent = ("天気は"+n.description);
    console.log("天気は"+n.description);
  }
  let saitei = document.querySelector('li#saitei');
  saitei.textContent = ("最低気温:"+data.main.temp_min);
  console.log("最低気温:"+data.main.temp_min);
  let saikou = document.querySelector('li#saikou');
  saikou.textContent = ("最高気温:"+data.main.temp_max);
  console.log("最高気温:"+data.main.temp_max);
  let sitsudo = document.querySelector('li#sitsudo');
  sitsudo.textContent = ("湿度:"+data.main.humidity);
  console.log("湿度:"+data.main.humidity);
  let fuusoku = document.querySelector('li#fuusoku');
  fuusoku.textContent = ("風速:"+data.wind.speed);
  console.log("風速:"+data.wind.speed);
  let fuukou = document.querySelector('li#fuukou');
  fuukou.textContent = ("風向:"+data.wind.deg);
  console.log("風向:"+data.wind.deg);
  let toshi = document.querySelector('li#toshi');
  toshi.textContent = ("都市名は"+data.name);
  console.log("都市名は"+data.name);
}