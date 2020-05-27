function displayNotations()
{
	var elt = document.getElementsByName("notation");
	var notationStyle;
	var	notations = [" "," "," "," "," "," "," ",
					" "," "," "," "," "," "," ",
					" "," "," "," "," "," "," ",
					" "," "," "," "," ",
					" "," "," "," "," ",
					" "," "," "," "," "];

	for(i = 0; i < elt.length; i++)
		if(elt[i].checked)
			notationStyle = elt[i].value; 
			
	if(notationStyle == "western")
		notations = ["C4","C4#","D4","D4#","E4","F4","F4#","G4","G4#","A4","A4#","B4",
						"C5","C5#","D5","D5#","E5","F5","F5#","G5","G5#","A5","A5#","B5",
						"C6","C6#","D6","D6#","E6","F6","F6#","G6","G6#","A6","A6#","B6"];
	else if(notationStyle == "indian")
	{
		/*var all_notes = [" "," "," "," "," ",
							"सा़", "_रे़", "रे़", "_ग़", "ग़", "म़", "म़_", "प़", "_ध़", "ध़", "_ऩि", 'ऩि',
							"सा", "_रे", "रे", "_ग", "ग", "म", "म_", "प", "_ध", "ध", "_नि", "नि", 
							"सां", "_रें", "रें", "_गं", "गं", "मं", "मं_", "पं", "_धं", "धं", "_निं", "निं", 
							" "," "," "," "," "];*/
		var all_notes = [ " "," "," "," "," ",
						".Sa",".re",".Re",".ga",".Ga",".ma",".Ma",".Pa",".dha",".Dha",".ni",".Ni",
						"Sa","re","Re","ga","Ga","ma","Ma","Pa","dha","Dha","ni","Ni",
						"Sa.","re.","Re.","ga.","Ga.","ma.","Ma.","Pa.","dha.","Dha.","ni.","Ni.",
						" "," "," "," "," "];
						
		var sel = document.getElementById("scales");
		var scale = sel.options[sel.selectedIndex].value;
		var st; // starting index
		
		if(scale == "F#")
			st = 11;
		else if(scale == "G")
			st = 10;
		else if(scale == "G#")
			st = 9;
		else if(scale == "A")
			st = 8;
		else if(scale == "A#")
			st = 7;
		else if(scale == "B")
			st = 6;
		else if(scale == "C") 
			st = 5;
		else if(scale == "C#")
			st = 4;
		else if(scale == "D")
			st = 3;
		else if(scale == "D#")
			st = 2;
		else if(scale == "E")
			st = 1;
		else if(scale == "F")
			st = 0;
		else
			st = 5;
		
		for(i = 0; i < 36; i++)
			notations[i] = all_notes[st + i];
	}
	else
		notations = [" "," "," "," "," "," "," ",
					" "," "," "," "," "," "," ",
					" "," "," "," "," "," "," ",
					" "," "," "," "," ",
					" "," "," "," "," ",
					" "," "," "," "," "];
	 
	
	document.getElementById("lw1").innerHTML = notations[0];
	document.getElementById("lb1").innerHTML = notations[1];
	document.getElementById("lw2").innerHTML = notations[2];
	document.getElementById("lb2").innerHTML = notations[3];
	document.getElementById("lw3").innerHTML = notations[4];
	document.getElementById("lw4").innerHTML = notations[5];
	document.getElementById("lb3").innerHTML = notations[6];
	document.getElementById("lw5").innerHTML = notations[7];
	document.getElementById("lb4").innerHTML = notations[8];
	document.getElementById("lw6").innerHTML = notations[9];
	document.getElementById("lb5").innerHTML = notations[10];
	document.getElementById("lw7").innerHTML = notations[11];
	document.getElementById("mw1").innerHTML = notations[12];
	document.getElementById("mb1").innerHTML = notations[13];
	document.getElementById("mw2").innerHTML = notations[14];
	document.getElementById("mb2").innerHTML = notations[15];
	document.getElementById("mw3").innerHTML = notations[16];
	document.getElementById("mw4").innerHTML = notations[17];
	document.getElementById("mb3").innerHTML = notations[18];
	document.getElementById("mw5").innerHTML = notations[19];
	document.getElementById("mb4").innerHTML = notations[20];
	document.getElementById("mw6").innerHTML = notations[21];
	document.getElementById("mb5").innerHTML = notations[22];
	document.getElementById("mw7").innerHTML = notations[23];
	document.getElementById("hw1").innerHTML = notations[24];
	document.getElementById("hb1").innerHTML = notations[25];
	document.getElementById("hw2").innerHTML = notations[26];
	document.getElementById("hb2").innerHTML = notations[27];
	document.getElementById("hw3").innerHTML = notations[28];
	document.getElementById("hw4").innerHTML = notations[29];
	document.getElementById("hb3").innerHTML = notations[30];
	document.getElementById("hw5").innerHTML = notations[31];
	document.getElementById("hb4").innerHTML = notations[32];
	document.getElementById("hw6").innerHTML = notations[33];
	document.getElementById("hb5").innerHTML = notations[34];
	document.getElementById("hw7").innerHTML = notations[35];
	
}

/*function selectSound()
{
	document.getElementById("lw1").innerHTML = "q";
	var elt = document.getElementsByName("sound");
	var sound;

	for(i = 0; i < elt.length; i++)
		if(elt[i].checked)
			sound = elt[i].value;

	if (sound == "real")
	{
		window.location.href = 'index.html';
	}
	else
	{
		window.location.href = 'index_pureTones.html';
	}
}*/