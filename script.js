var timeEl = document.querySelector(".time-rendered");
// Add an event listener that will handle all buttons added to the time-rendered element
timeEl.addEventListener("click", getInput, false);

displayTimeBlocks();

function getInput(e) {
    if (e.target !== e.currentTarget) 
    {
	    var clickedItem = e.target.id;
        var myNodeName = e.target.nodeName;
        
        // If button or button icon clicked
        if (myNodeName === 'BUTTON' || myNodeName === 'I')
        {
          alert("Hello Button " + clickedItem + " " + myNodeName);
        }
    }
    e.stopPropagation();
}

function displayTimeBlocks() {
  for (i = 0; i < timeBlocks.length; i++) 
  {
    var timeSlot = timeBlocks[i];

	// Create the div to hold the label
    var timeSlotDiv1 = document.createElement("div");
    timeSlotDiv1.setAttribute("class", "column left");

	// Create the label
    var timeSlotLabel = document.createElement("label");
    timeSlotLabel.textContent = timeSlot.title;
    timeSlotDiv1.appendChild(timeSlotLabel);
    timeEl.appendChild(timeSlotDiv1);

	// Create the div to hold the textarea
    var timeSlotDiv2 = document.createElement("div");
    timeSlotDiv2.setAttribute("class", "column middle");
    
    var timeSlotTextArea = document.createElement("textarea");
    timeSlotTextArea.id = timeSlot.title;
    timeSlotTextArea.placeholder = " ";
    timeSlotTextArea.setAttribute("class", "textarea");
    timeSlotDiv2.appendChild(timeSlotTextArea);
    timeEl.appendChild(timeSlotDiv2);
    
    var timeSlotDiv3 = document.createElement("div");
    timeSlotDiv3.setAttribute("class", "column right");
    
	var timeSlotButton = document.createElement("BUTTON");
    timeSlotButton.type = "submit";
    timeSlotButton.id = i.toString();
    timeSlotButton.setAttribute("class", "button");

	var timeSlotBtnI = document.createElement("i");
    timeSlotBtnI.setAttribute("class", "fa fa-save");
    timeSlotButton.appendChild(timeSlotBtnI);
    timeSlotDiv3.appendChild(timeSlotButton);
    timeEl.appendChild(timeSlotDiv3);
    }
}
