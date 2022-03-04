const requestISSLocation = async () => {
    const response = await fetch(`https://api.wheretheiss.at/v1/satellites/25544`)
    const json = await response.json();
    const {latitude, longitude} = json
    console.log(json.longitude);

    const h3 = document.getElementById('results')
    h3.innerHTML = '<br>'+`longitude: ${longitude}` + "<br>" + `latitude: ${latitude}`
}

document.getElementById('buttonClick').addEventListener("click", requestISSLocation());
