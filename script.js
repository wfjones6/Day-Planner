var timeBlockIndex = 0;
displayTimeBlocks();

function displayTimeBlocks() 
{
    var timeSlot = timeBlocks[timeBlockIndex];
    
    var timeSlotDiv1 = document.createElement("div");
	document.getElementById("timeSlotDiv1").classList.add("column left");

    var timeSlotLabel = document.createElement("label");
    timeSlotLabel.textContent = timeSlot.title;
    timeSlotDiv1.appendChild(timeSlotLabel);

    var timeSlotDiv2 = document.createElement("div");
	document.getElementById("timeSlotDiv2").classList.add("column middle");
    
    var timeSlotTextArea = document.createElement("textarea");
    timeSlotTextArea.id = "reminder";
    timeSlotTextArea.placeholder = " ";
	document.getElementById("timeSlotTextArea").classList.add("textarea");
    timeSlotDiv2.appendChild(timeSlotTextArea);
    
    var timeSlotDiv3 = document.createElement("div");
	document.getElementById("timeSlotDiv3").classList.add("column right");
    
	var timeSlotButton = document.createElement("BUTTON");
    timeSlotButton.type = "submit";
	document.getElementById("timeSlotButton").classList.add("button");

	var timeSlotBtnI = document.createElement("i");
    document.getElementById("timeSlotBtnI").classLsit.add("fa fa-save");
    timeSlotButton.appendChild(timeSlotBtnI);
    timeSlotDiv3.appendChild(timeSlotButton);
}

function displayQuestions()
{
    questionText.textContent = question.title; 
    questionDiv.appendChild(questionText)

    for (i = 0; i < question.choices.length; i++) 
    {
        var option = document.createElement("button");

        option.textContent = question.choices[i];

        option.setAttribute("class", "option");

        option.addEventListener("click", function(e) 
        {
                var optionClicked = (e.target.innerHTML); 
                if(optionClicked === questions[questionIndex].correctAnswer)
                {
                    numCorrect++;
                    document.getElementById("choice-response").innerHTML = "correct";
                    displayQuestions(questionIndex++);
                }
                else
                {
                  secondsRemaining = secondsRemaining-penaltySeconds;
                  document.getElementById("choice-response").innerHTML = "wrong";
                  document.getElementById("choice-response").style.color = 'red';
                  displayQuestions(questionIndex++);
                }
        })
        questionDiv.appendChild(option);
    }

    questionsEl.appendChild(questionDiv);
}
