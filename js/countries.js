let url = "https://restcountries.com/v3.1/all";
function Countries() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaycountries(data));
}

function displaycountries(data) {
  // console.log(data)
  let countriescontainer = document.getElementById("all-countries")

data.forEach(countri => {
    // console.log(countri.cca2)
    let div = document.createElement("div");
    div.classList.add("country")
        div.innerHTML = `
        <img src="${countri.flags.png}">
        <p>Name: ${countri.name.common}<p/>
        <p> <a href= "${countri.maps.googleMaps}">Map<a/><p/>
        <button onclick="displaycountrydetail('${countri.cca2}')" >details</button>
        `;
        countriescontainer.appendChild(div);
});
}

const displaycountrydetail = (code) => {
    let urlcode = `https://restcountries.com/v3.1/alpha/${code}`;

    fetch(urlcode)
    .then(res => res.json())
    .then(data => showdetailsafterclicking(data))
    // console.log(urlcode)
}

const showdetailsafterclicking = (details) => {
    let country = document.getElementById('country-details')
    let div = document.getElementById('div');
   
    div.innerHTML = `
    <h2>country name: ${details[0].name.common}</h2>
    <h3>Capital : ${details[0].capital[0]? details[0].capital[0]: 'does not exist'} </h3>
    `
   country.appendChild(div)
   console.log(details[0])
}

Countries();
