document.addEventListener('DOMContentLoaded', bindButton);

function bindButton(){
    document.getElementById('submit').addEventListener('click', weatherApiCall);
    document.getElementById('HTTPbinSubmit').addEventListener('click', httpbinApiCall)
}

function weatherApiCall(){
    let r = new XMLHttpRequest();
    let api_key = 'fc5fd0a11d8eb3fd06492aae3e99604a';
    let owm_url = 'http://api.openweathermap.org/data/2.5/weather';
    let input = document.getElementById('text_input').value;
    let url;

    //Not very robust input validation, but should suffice for assignment
    //CITATION: https://www.mkyong.com/javascript/check-if-variable-is-a-number-in-javascript/
    if(isNaN(input)){
        url = owm_url + '?q=' + input + '&units=imperial' + '&APPID=' + api_key;
    } else {
        url = owm_url + '?zip=' + input + '&units=imperial' + '&APPID=' + api_key;
    }

    r.open("GET", url, true);

    r.addEventListener('load', function(){
        if(r.status >= 200 && r.status < 400){
            let resp = JSON.parse(r.responseText);
            document.getElementById('cityOutput').textContent = resp.name;
            document.getElementById('tempOutput').textContent = resp.main.temp;
            document.getElementById('descOutput').textContent = resp.weather[0].main;
            document.getElementById('humidityOutput').textContent = resp.main.humidity;
        } else {
            document.getElementById('cityOutput').textContent = 'City Not found';
            document.getElementById('tempOutput').textContent = '';
            document.getElementById('descOutput').textContent = '';
            document.getElementById('humidityOutput').textContent = '';
        }
    });

    r.send();
    event.preventDefault();
    

}

function httpbinApiCall(){
    let r = new XMLHttpRequest();
    let input = document.getElementById('input2').value;
    let url = 'http://httpbin.org/post';

    r.open("POST", url, true,);

    r.addEventListener('load', function(){
        if(r.status >= 200 && r.status < 400){
            let resp = JSON.parse(r.responseText);
            document.getElementById('output').textContent = resp.data;
        } else {

        }
    });

    r.setRequestHeader("Content-Type", "application/json");
    r.send(input);
    event.preventDefault();
    

}