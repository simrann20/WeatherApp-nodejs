let request= require('request');
let argv=require('yargs').argv;
let apikey='85c11a0ee0616c03bc126e18d5d03600';
let city= argv.c ||'New Delhi';
let url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
request(url,function(err,response,body)
{
if(err)
console.log("Error :", error);
else
{
let weather = JSON.parse(body)
let msg=`Its  ${weather.main.temp} degrees in ${weather.name}!`;
console.log(msg);
}
});

