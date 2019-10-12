var x;
btn9AM.addEventListener('click', function()
{
	x = document.getElementById("textarea9AM").value;
    	document.getElementById("demo").innerHTML = x;
	windows.localStorage.setItem("textarea9AM", x);
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

document.getElementById("demo").innerHTML = "Demo start";
document.getElementById("demo2").innerHTML = "Demo2 start";

loadReminders();

function loadReminders() 
{
	if (windows.localStorage.getItem("textarea9AM") !== null
	    {
	    	document.getElementById("textarea9AM").value = windows.localStorage.getItem("textarea9AM");
		document.getElementById("demo2").innerHTML = "textarea9AM local storage NOT null";
	    }
	else
	{
		document.getElementById("demo2").innerHTML = "textarea9AM local storage null";
	}
	    
}

