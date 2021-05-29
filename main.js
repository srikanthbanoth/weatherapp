const b = document.querySelector('button');
b.onclick = () => {
    let input = document.getElementById('location').value;
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + input + '&appid=19b192bd0d543dace17b58c82582ac76';
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            document.getElementById('cityName').innerHTML = data.name;
            document.getElementById('temperature').innerHTML = data.main.temp + ' K';
            document.getElementById('feelsLike').innerHTML = 'Fells like: ' + data.main.feels_like + ' K';
            document.getElementById('humidity').innerHTML = 'Humidity: ' + data.main.humidity + ' %';
            document.getElementById('wind').innerHTML = 'Wind: ' + data.wind.speed + ' km/hr';
            document.querySelector('.search-result').style.display = 'block';
        }).catch((err) => {
            document.querySelector('.search-result').style.display = 'none';
            alert('Something Went Wrong')
        })

}


