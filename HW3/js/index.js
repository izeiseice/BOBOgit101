const getBeerAPIByName = (name) => fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}`)
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
        let obj = response;
        let table = "<table style='width:100%;margin: auto;' >"; 
			table += "<tr style='background-color: #000000;color:#ffffff;'>";
			table += "<th style='width: 5%;'>" +"</th>";
			table += "<th style='width: 30%;'>" + "Name" + "</th>";
			table += "<th style='width: 40%;'>" + "Description" + "</th>";
			table += "<th style='width: 25%;'>" + "Yeast" + "</th>";
			table+= "</tr>";
        for (let i = 0; i < obj.length; i++) {
		table += "<tr>";
		table += "<td>" + "<image src =" + obj[i].image_url + " style='width:100%;height:auto;'/></td>";
        table += "<td><center> " +obj[i].name + " </center></td>";
        table += "<td><center> " + obj[i].description + " </center></td>";
		table += "<td><center> " + obj[i].ingredients.yeast + " </center></td>";
        table += "</tr>";
     
        }
		table += "</table>";
        document.getElementById("table").innerHTML = table;
    })
    const toSearch = (name) => {
    if (name != "") {
         getBeerAPIByName(name)
    } else {
        let table = "No data!";
        document.getElementById('table').innerHTML = table
    }
}