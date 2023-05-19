console.log("js file executeed");

//create an object which is capable of making an API call
const request = new XMLHttpRequest();

//open up the connection to the API with the HTTP method and url
request.open("GET" , "https://restcountries.com/v3.1/all",true);

//send a request to the server
request.send(null);


//inline or anonymous function(parse the text data passes on from the server)
request.onload= function () {
   var response = JSON.parse(request.responseText);
   console.log(response);

//simple for loop
   //for (var i=0; i<response.length;i++) {
      //console.log(response[i].flag);
      //console.log(response[i].languages);
   //}

//forEach
   //response.forEach(fucntion (country) {
    //  console.log(country.flag),
    //  console.log(country.languages)
   //} ) 

//}

//for of
//for (const country of response){
   //console.log(country.flag);
   //console.log(country.languages);

//}
//for in
//response.forEach ((country) => {
   //for(const key of Object.keys(country)) {
      //console.log(key, country[key]);
 //}
//});




}

request.onerror = function() {
   console.log("I have some error")
}



const personObj = {
   name: "Sanjay",
   role: "developer",
   DOb: "DD-MM_YY"

}

for (const key in personObj){
   console.log(key, personObj[key])
}