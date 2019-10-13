localStorage.setItem("lastname", "Smith");

document.getElementById("demo").innerHTML = "Demo start";
document.getElementById("demo2").innerHTML = "Demo2 start";

initialLoad();
function initialLoad()
{
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
}

var x;
btn9AM.addEventListener('click', function()
{
	x = document.getElementById("textarea9AM").value;
    	document.getElementById("demo").innerHTML = x;
	localStorage.setItem("9AM", x);
})

btn10AM.addEventListener('click', function()
{
	x = document.getElementById("textarea10AM").value;
    	document.getElementById("demo").innerHTML = x;
})

btn11AM.addEventListener('click', function()
{
	x = document.getElementById("textarea11AM").value;
    	document.getElementById("demo").innerHTML = x;
})

btn12PM.addEventListener('click', function()
{
	x = document.getElementById("textarea12PM").value;
    	document.getElementById("demo").innerHTML = x;
})

btn1PM.addEventListener('click', function()
{
	x = document.getElementById("textarea1PM").value;
    	document.getElementById("demo").innerHTML = x;
})

btn2PM.addEventListener('click', function()
{
	x = document.getElementById("textarea2PM").value;
    	document.getElementById("demo").innerHTML = x;
})

btn3PM.addEventListener('click', function()
{
	x = document.getElementById("textarea3PM").value;
    	document.getElementById("demo").innerHTML = x;
})

btn4PM.addEventListener('click', function()
{
	x = document.getElementById("textarea4PM").value;
    	document.getElementById("demo").innerHTML = x;
})

btn5PM.addEventListener('click', function()
{
	x = document.getElementById("textarea5PM").value;
    	document.getElementById("demo").innerHTML = x;
})
