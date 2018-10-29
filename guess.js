var guess_color,our_color;
var finish=false;
var ar_size;
var random_number;
var target;
var guess=0;
function Guess_color()
{
	var ar=["blue","cyan","gold","grey","green","magenta","orange","red","white","yellow"];
	ar_size=ar.length;
	random_number=Math.random()*ar_size;
	rnd=Math.floor(random_number);
	our_color=ar[rnd];
	var a;
	a=ar.join();
	while(!finish)
	{	
		guess_color=prompt("I am thinking of one of these colors:\n\n"+a+"\n\nWhat color am I thinking of?");
		String(guess_color);
		guess++;
		if(our_color>guess_color)
			alert("Sorry, your guess is not correct.\n\nHint:your color is alphabetically lower than mine.\n\nPlease try again.");
		
		else if(our_color<guess_color)
			alert("Sorry, your guess is not correct.\n\nHint:your color is alphabetically higher than mine.\n\nPlease try again.");
		
		else if(our_color==guess_color){
			alert("Congratulations! You have guessed the color!\n\nIt took you " + guess + " guesses to finish the game!\n\nYou can see the color in the background.");
			finish=true;
			myBody=document.getElementsByTagName("body")[0];
			myBody.style.background=our_color;
		}
		else
			alert("Sorry, I don't recognise your color.\n\nPlease try again.");
		
	}
}
