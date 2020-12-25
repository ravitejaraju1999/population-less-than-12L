
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();

var lat;
var long;
request.onload=function()


{

  var data=JSON.parse(this.response);
  var countries=data.filter((item)=>
  {
    return item.population < 200000;
  })
  var list=[];
  for(var i=0;i<countries.length;i++)
  {
    //console.log(countries[i].name);
    list.push(countries[i].name);
  }
  console.log(list);

 
}


