(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var getBeerAPIByName = function getBeerAPIByName(name) {
    return fetch("https://api.punkapi.com/v2/beers/?beer_name=" + name).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Fail');
    }).then(function (response) {
        var obj = response;
        var table = "<table style='width:100%;margin: auto;' >"; 
			table += "<tr style='background-color: #000000;color:#ffffff;'>";
			table += "<th style='width: 5%;'>" +"</th>";
			table += "<th style='width: 30%;'>" + "Name" + "</th>";
			table += "<th style='width: 40%;'>" + "Description" + "</th>";
			table += "<th style='width: 25%;'>" + "Yeast" + "</th>";
			table+= "</tr>";
        for (var i = 0; i < obj.length; i++) {
            table += "<tr>";
			table += "<td>" + "<image src =" + obj[i].image_url + " style='width:100%;height:auto;'/></td>";
       		table += "<td><center> " +obj[i].name + " </center></td>";
        	table += "<td><center> " + obj[i].description + " </center></td>";
			table += "<td><center> " + obj[i].ingredients.yeast + " </center></td>";
        	table += "</tr>";
        }
        table += "</table>";
        document.getElementById("table").innerHTML = table;
    });
};
var toSearch = function toSearch(name) {
    if (name != "") {
        getBeerAPIByName(name);
    } else {
        var table = "No data!";
        document.getElementById('table').innerHTML = table;
    }
};

},{}]},{},[1]);
