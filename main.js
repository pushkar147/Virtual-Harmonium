function displayNotations()
{
	var elt = document.getElementsByName("notation");
	var notationStyle;

	for(i = 0; i < elt.length; i++)
		if(elt[i].checked)
			notationStyle = elt[i].value; 
	
	if(notationStyle == "none")
	{
			document.getElementById("lw1").innerHTML = " ";
			document.getElementById("lw2").innerHTML = " ";
			document.getElementById("lw3").innerHTML = " ";
			document.getElementById("lw4").innerHTML = " ";
			document.getElementById("lw5").innerHTML = " ";
			document.getElementById("lw6").innerHTML = " ";
			document.getElementById("lw7").innerHTML = " ";
			document.getElementById("mw1").innerHTML = " ";
			document.getElementById("mw2").innerHTML = " ";
			document.getElementById("mw3").innerHTML = " ";
			document.getElementById("mw4").innerHTML = " ";
			document.getElementById("mw5").innerHTML = " ";
			document.getElementById("mw6").innerHTML = " ";
			document.getElementById("mw7").innerHTML = " ";
			document.getElementById("hw1").innerHTML = " ";
			document.getElementById("hw2").innerHTML = " ";
			document.getElementById("hw3").innerHTML = " ";
			document.getElementById("hw4").innerHTML = " ";
			document.getElementById("hw5").innerHTML = " ";
			document.getElementById("hw6").innerHTML = " ";
			document.getElementById("hw7").innerHTML = " ";
			document.getElementById("lb1").innerHTML = " ";
			document.getElementById("lb2").innerHTML = " ";
			document.getElementById("lb3").innerHTML = " ";
			document.getElementById("lb4").innerHTML = " ";
			document.getElementById("lb5").innerHTML = " ";
			document.getElementById("mb1").innerHTML = " ";
			document.getElementById("mb2").innerHTML = " ";
			document.getElementById("mb3").innerHTML = " ";
			document.getElementById("mb4").innerHTML = " ";
			document.getElementById("mb5").innerHTML = " ";
			document.getElementById("hb1").innerHTML = " ";
			document.getElementById("hb2").innerHTML = " ";
			document.getElementById("hb3").innerHTML = " ";
			document.getElementById("hb4").innerHTML = " ";
			document.getElementById("hb5").innerHTML = " ";
	}
	else if(notationStyle = "western")
	{
			document.getElementById("lw1").innerHTML = "C4";
			document.getElementById("lw2").innerHTML = "D4";
			document.getElementById("lw3").innerHTML = "E4";
			document.getElementById("lw4").innerHTML = "F4";
			document.getElementById("lw5").innerHTML = "G4";
			document.getElementById("lw6").innerHTML = "A4";
			document.getElementById("lw7").innerHTML = "B4";
			document.getElementById("mw1").innerHTML = "C5";
			document.getElementById("mw2").innerHTML = "D5";
			document.getElementById("mw3").innerHTML = "E5";
			document.getElementById("mw4").innerHTML = "F5";
			document.getElementById("mw5").innerHTML = "G5";
			document.getElementById("mw6").innerHTML = "A5";
			document.getElementById("mw7").innerHTML = "B5";
			document.getElementById("hw1").innerHTML = "C6";
			document.getElementById("hw2").innerHTML = "D6";
			document.getElementById("hw3").innerHTML = "E6";
			document.getElementById("hw4").innerHTML = "F6";
			document.getElementById("hw5").innerHTML = "G6";
			document.getElementById("hw6").innerHTML = "A6";
			document.getElementById("hw7").innerHTML = "B6";
			document.getElementById("lb1").innerHTML = "C4#";
			document.getElementById("lb2").innerHTML = "D4#";
			document.getElementById("lb3").innerHTML = "F4#";
			document.getElementById("lb4").innerHTML = "G4#";
			document.getElementById("lb5").innerHTML = "A4#";
			document.getElementById("mb1").innerHTML = "C5#";
			document.getElementById("mb2").innerHTML = "D5#";
			document.getElementById("mb3").innerHTML = "F5#";
			document.getElementById("mb4").innerHTML = "G5#";
			document.getElementById("mb5").innerHTML = "A5#";
			document.getElementById("hb1").innerHTML = "C6#";
			document.getElementById("hb2").innerHTML = "D6#";
			document.getElementById("hb3").innerHTML = "F6#";
			document.getElementById("hb4").innerHTML = "G6#";
			document.getElementById("hb5").innerHTML = "A6#";
	}		
}