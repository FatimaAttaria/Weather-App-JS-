let getWeather = () => {
    let inp = document.getElementById("inp").value
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&units=metric&appid=ecf07bafe5f67fa8a66abd728beb563b`)
        .then((data) => {
            console.log(data)
            document.getElementById("showweatherdata").innerHTML = data.data.main.temp
        })
        .catch((err) => {
            console.log(err)
        })
}
