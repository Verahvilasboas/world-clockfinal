function updateTime() {
  //Paris
  let ParisElement = document.querySelector("#Paris");
  let ParisDateElement = ParisElement.querySelector(".date");
  let ParisTimeElement = ParisElement.querySelector(".time");

  let ParisTime = moment().tz("Europe/Paris");

  ParisDateElement.innerHTML = ParisTime.format("MMMM Do YYYY");

  ParisTimeElement.innerHTML = ParisTime.format("h:mm:ss [<small>]A[</small>]");

  //Sydney
  let SydneyElement = document.querySelector("#Sydney");
  let SydneyDateElement = SydneyElement.querySelector(".date");
  let SydneyTimeElement = SydneyElement.querySelector(".time");

  let SydneyTime = moment().tz("Australia/Sydney");

  SydneyDateElement.innerHTML = SydneyTime.format("MMMM Do YYYY");

  SydneyTimeElement.innerHTML = SydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Lisbon
  let LisbonElement = document.querySelector("#Lisbon");
  let LisbonDateElement = LisbonElement.querySelector(".date");
  let LisbonTimeElement = LisbonElement.querySelector(".time");

  let LisbonTime = moment().tz("Europe/Lisbon");

  LisbonDateElement.innerHTML = LisbonTime.format("MMMM Do YYYY");

  LisbonTimeElement.innerHTML = LisbonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Brasilia
  let BrasiliaElement = document.querySelector("#Brasilia");
  let BrasiliaDateElement = BrasiliaElement.querySelector(".date");
  let BrasiliaTimeElement = BrasiliaElement.querySelector(".time");

  let BrasiliaTime = moment().tz("Brazil/East");

  BrasiliaDateElement.innerHTML = BrasiliaTime.format("MMMM Do YYYY");

  BrasiliaTimeElement.innerHTML = BrasiliaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
  //SELECTION CITY
function updateCity(event) {
  let cityTimeZone = event.target.value;
if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
}



  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>

  </div>
  <p><a class="link-opacity-100" href="/">See all cities</a></p>
  <br>
    <br>
      <br>
  `;

}

updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
