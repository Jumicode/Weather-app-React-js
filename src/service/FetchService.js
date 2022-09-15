export const getWheater = async () => {

let res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0d5235392f278c7b5df0b3aac8760431');
console.log(res);


return res.json();

}