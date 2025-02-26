console.log("T4/javascript/site.js is loaded.");

function menuFlight(){
    console.log("menuFlight() is called.");
    document.getElementById("contentTitle").innerHTML = "The Flight";
    document.getElementById("contentDetails").innerHTML = "Experience the best flight services to Chania. <br>Enjoy comfortable seating, in-flight entertainment, and delicious meals. <br>Our friendly staff is here to ensure you have a pleasant journey. <br><br>   Book your flight to Chania today and explore the beautiful landscapes and rich culture of this amazing destination.";
}

function menuCity(){
    console.log("menuCity() is called.");
    document.getElementById("contentTitle").innerHTML = "The City";
    document.getElementById("contentDetails").innerHTML = "Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.";
}

function menuIsland(){
    console.log("menuIsland() is called.");
    document.getElementById("contentTitle").innerHTML = "The Island";
    document.getElementById("contentDetails").innerHTML = "Crete is the largest island in Greece and the fifth largest island in the Mediterranean Sea. <br>It is located in the southern part of the Aegean Sea separating the Aegean from the Libyan Sea.";
}

function menuFood(){
    console.log("menuFood() is called.");
    document.getElementById("contentTitle").innerHTML = "The Food";
    document.getElementById("contentDetails").innerHTML = "Chania is known for its delicious cuisine. <br>Enjoy traditional Greek dishes, such as moussaka, souvlaki, and Greek salad. <br>Don't forget to try the local wine and olive oil. <br>Experience the best of Greek food in Chania.";
}

function resizeWarning(){
    console.log("resizeWarning() is called.");
    window.alert("Please resize the window.");
}

document.write("site.js document.write() is called.");