// Get the header date utilizing Moment.js
// var dayText = moment().format('dddd');
// var monthDay = moment().format("MMM Do");
// var c = dayText + ", " + monthDay;
// document.getElementById("currentDay").innerHTML = c;
document.getElementById("currentDay").innerHTML = "Testing Today";

// If time block values are in local storage, populate them
var getVal;
getVal = localStorage.getItem("9AM");
if (getVal)
{
	document.getElementById("textarea9AM").value = getVal;
}

getVal = localStorage.getItem("10AM");
if (getVal)
{
	document.getElementById("textarea10AM").value = getVal;
}

getVal = localStorage.getItem("11AM");
if (getVal)
{
	document.getElementById("textarea11AM").value = getVal;
}

getVal = localStorage.getItem("12PM");
if (getVal)
{
	document.getElementById("textarea12PM").value = getVal;
}

getVal = localStorage.getItem("1PM");
if (getVal)
{
	document.getElementById("textarea1PM").value = getVal;
}

getVal = localStorage.getItem("2PM");
if (getVal)
{
	document.getElementById("textarea2PM").value = getVal;
}

getVal = localStorage.getItem("3PM");
if (getVal)
{
	document.getElementById("textarea3PM").value = getVal;
}

getVal = localStorage.getItem("4PM");
if (getVal)
{
	document.getElementById("textarea4PM").value = getVal;
}

getVal = localStorage.getItem("5PM");
if (getVal)
{
	document.getElementById("textarea5PM").value = getVal;
}

// Create an event listener for each button
// When the button is clicked it will save the associated textarea to localStorage
var x;
btn9AM.addEventListener('click', function()
{
	x = document.getElementById("textarea9AM").value;
	localStorage.setItem("9AM", x);
})

btn10AM.addEventListener('click', function()
{
	x = document.getElementById("textarea10AM").value;
	localStorage.setItem("10AM", x);
})

btn11AM.addEventListener('click', function()
{
	x = document.getElementById("textarea11AM").value;
	localStorage.setItem("11AM", x);
})

btn12PM.addEventListener('click', function()
{
	x = document.getElementById("textarea12PM").value;
	localStorage.setItem("12PM", x);
})

btn1PM.addEventListener('click', function()
{
	x = document.getElementById("textarea1PM").value;
	localStorage.setItem("1PM", x);
})

btn2PM.addEventListener('click', function()
{
	x = document.getElementById("textarea2PM").value;
	localStorage.setItem("2PM", x);
})

btn3PM.addEventListener('click', function()
{
	x = document.getElementById("textarea3PM").value;
	localStorage.setItem("3PM", x);
})

btn4PM.addEventListener('click', function()
{
	x = document.getElementById("textarea4PM").value;
	localStorage.setItem("4PM", x);
})

btn5PM.addEventListener('click', function()
{
	x = document.getElementById("textarea5PM").value;
	localStorage.setItem("5PM", x);
})

// Get hours in military time 0-23 which is equal to 12:00am-11pm. For example, 1:00pm = 13.
// var d = new Date();
// var currentHour = d.getHours();
var currentHour = 13;

setColors("textarea9AM", 9);	// 9AM
setColors("textarea10AM", 10);	// 10AM
setColors("textarea11AM", 11);	// 11AM
setColors("textarea12PM", 12);	// 12PM
setColors("textarea1PM", 13);	// 1PM
setColors("textarea2PM", 14);	// 2PM
setColors("textarea3PM", 15);	// 3PM
setColors("textarea4PM", 16);	// 4PM
setColors("textarea5PM", 17);	// 5PM

function setColors(txtArea, blockHour)
{
	if (blockHour < currentHour)
	{
		document.getElementById(txtArea).className = "textarea past";
	}
	else if (blockHour > currentHour)
	{
		document.getElementById(txtArea).className = "textarea future";
	}
	else
	{
		document.getElementById(txtArea).className = "textarea present";
	}
}
