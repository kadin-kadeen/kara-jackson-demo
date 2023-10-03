document.addEventListener("DOMContentLoaded" , function() {
    newQuoteHandler()
    dragElement(document.querySelector("quotes-container"))
    dragElement(document.getElementById("image-1"))
    dragElement(document.getElementById("image-2"))
    dragElement(document.getElementById("image-3"))
} ) 

function newQuoteHandler() {
    let button = document.getElementById("quote-button")
    button.addEventListener("click", () => {
       let quoteContentDiv = document.querySelector(".quotes-content")
        getRandomQuote()
    })
}

function getRandomQuote() {
    let randomQuote = Math.floor(Maht.random() * quotesArray.length)
   displayQuote(quotesArray[randomQuote])
}

function displayQuote(quote) {
    console.log(quote);
    let  quoteContentDiv = document.querySelector(".quotes-content")
    quoteContentDiv.innerText = quote 
}

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	elmnt.onmousedown = dragMouseDown;
	
	function dragMouseDown(e) {
	  e = e || window.event;
	  e.preventDefault();
	  // get the mouse cursor position at startup:
	  pos3 = e.clientX;
	  pos4 = e.clientY;
	  document.onmouseup = closeDragElement;
	  // call a function whenever the cursor moves:
	  document.onmousemove = elementDrag;
	}
	
	function elementDrag(e) {
	  e = e || window.event;
	  e.preventDefault();
	  // calculate the new cursor position:
	  pos1 = pos3 - e.clientX;
	  pos2 = pos4 - e.clientY;
	  pos3 = e.clientX;
	  pos4 = e.clientY;
	  // set the element's new position:
	  elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	  elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}
	
	function closeDragElement() {
	  // stop moving when mouse button is released:
	  document.onmouseup = null;
	  document.onmousemove = null;
	}
}

const quotesArray = [
    Song - 

    It’s hard to have patience
    when you’re waiting on luck,
    like a postal truck, 
    like a postal truck'

    Song -

    'Um, I hope yo-
    I mean it look like you're showing well. 
    Keep killin' em, smack a white man, 
    I'll talk to you later, peace.' 

    Song -
    
    'If I had the chance to offer
    Such a sight as when you saw her,
    Then I wouldn't have to wonder
    Why you locked knocked me off your roster'

  
]