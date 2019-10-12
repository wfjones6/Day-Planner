var x;
btn9AM.addEventListener('click', function()
{
	x = document.getElementById("textarea9AM").value;
    	document.getElementById("demo").innerHTML = x;
	window.localStorage.setItem("textarea9AM", x);
})

btn10AM.addEventListener('click', function()
{
	x = document.getElementById("textarea10AM").value;
    	document.getElementById("demo").innerHTML = x;
	storeReminders();
})

btn11AM.addEventListener('click', function()
{
	x = document.getElementById("textarea11AM").value;
    	document.getElementById("demo").innerHTML = x;
	storeReminders();
})

btn12PM.addEventListener('click', function()
{
	x = document.getElementById("textarea12PM").value;
    	document.getElementById("demo").innerHTML = x;
	storeReminders();
})

btn1PM.addEventListener('click', function()
{
	x = document.getElementById("textarea1PM").value;
    	document.getElementById("demo").innerHTML = x;
	storeReminders();
})

btn2PM.addEventListener('click', function()
{
	x = document.getElementById("textarea2PM").value;
    	document.getElementById("demo").innerHTML = x;
	storeReminders();
})

btn3PM.addEventListener('click', function()
{
	x = document.getElementById("textarea3PM").value;
    	document.getElementById("demo").innerHTML = x;
	storeReminders();
})

btn4PM.addEventListener('click', function()
{
	x = document.getElementById("textarea4PM").value;
    	document.getElementById("demo").innerHTML = x;
	storeReminders();
})

btn5PM.addEventListener('click', function()
{
	x = document.getElementById("textarea5PM").value;
    	document.getElementById("demo").innerHTML = x;
	storeReminders();
})

storeReminders();
loadReminders();

function storeReminders()
{
	window.localStorage.setItem("textarea9AM", document.getElementById("textarea9AM").value);
	window.localStorage.setItem("textarea10AM", document.getElementById("textarea10AM").value);
	window.localStorage.setItem("textarea11AM", document.getElementById("textarea11AM").value);
   	window.localStorage.setItem("textarea12PM", document.getElementById("textarea12PM").value);
   	window.localStorage.setItem("textarea1PM", document.getElementById("textarea1PM").value);
   	window.localStorage.setItem("textarea2PM", document.getElementById("textarea2PM").value);
   	window.localStorage.setItem("textarea3PM", document.getElementById("textarea3PM").value);
   	window.localStorage.setItem("textarea4PM", document.getElementById("textarea4PM").value);
   	window.localStorage.setItem("textarea5PM", document.getElementById("textarea5PM").value);
}

function loadReminders() 
{
    document.getElementById("textarea9AM").value = window.localStorage.getItem("textarea9AM");
    document.getElementById("textarea10AM").value = window.localStorage.getItem("textarea10AM");
    document.getElementById("textarea11AM").value = window.localStorage.getItem("textarea11AM");
    document.getElementById("textarea12PM").value = window.localStorage.getItem("textarea12PM");
    document.getElementById("textarea1PM").value = window.localStorage.getItem("textarea1PM");
    document.getElementById("textarea2PM").value = window.localStorage.getItem("textarea2PM");
    document.getElementById("textarea3PM").value = window.localStorage.getItem("textarea3PM");
    document.getElementById("textarea4PM").value = window.localStorage.getItem("textarea4PM");
    document.getElementById("textarea5PM").value = window.localStorage.getItem("textarea5PM");
}
