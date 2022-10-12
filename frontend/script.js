console.log("loaded");

const apiKey =o5p85oefcjQCyxabLFhNhPPKAx47arvcVYaBMefU;
let apiDate="2022-10-12";
let fetchURL=`https://api.nasa.gov/planetary/apod?api_key=$(apiKey)&date=$(apiDate)`;

/*fetch(fetchURL).then(function(response){
   console.log("response");
    console.log(response.json())
    return.return.json(;)
}).then function(responseJson){
    console-log(responseJson);})*/


//fetch(fetchURL)
    .then(response => response.json() )
    .then(responseJson => console.log(responseJson))//

async function fetchNasa(){
    const response =await fetch(fetchURL)
    //console.log(response);//
    const responseJson= await response.json();
    //console.log(responseJson);//
    return responseJson;
    
}

async function loadEvent(){
    let data = await fetchNasa();
    console.log("data:", data);

    const rootElement=document.querySelector("#root");
    rootElement.insertAdjacentHTML("beforeend",`
    <h1> $data.title</h1>
    <h2> $data.date</h2>
    <p> $data.explanation</p>
    <img src= $data.url)>
}
window.addEventListener("load",loadEvent);
    