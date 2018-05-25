//Creating lists (sample data)
var all = [];
var aniCount = 0; 
var cloCount = 0;
var colCount = 0;
var spoCount = 0;
var couCount = 0;
var result = [];		//Correct last 5 words
var userInputs = [];	//User's last 5 words

function createList(){
	var animals = ['Tiger', 'Rabbit', 'Elephant', 'Lion'];
	var sports = ['Soccer', 'Basketball', 'Baseball', 'Tennis', 'Football'];
	var clothes = ['Skirt', 'Belt', 'Jacket', 'Jeans', 'Shoes'];
	var colors = ['Yellow', 'Red', 'Blue', 'White', 'Gold', 'Green'];
	var countries = ['South Korea', 'India', 'France', 'United States of America', 'China'];
		
	//Creating random list consist of 3 words for each categories
	function pickAndAdd(arr, list, cat){ //arr = all, cat = category
		for(i = 0; i < 3; i++){
			var ran = Math.floor(Math.random() * list.length)
			arr.push({'name' : list[ran],
					  'category' : cat});
			list.splice(ran, 1);
		}
		//return arr;
	}
	pickAndAdd(all, animals, 'animal');
	pickAndAdd(all, sports, 'sports');
	pickAndAdd(all, clothes, 'cloth');
	pickAndAdd(all, colors, 'color');
	pickAndAdd(all, countries, 'country');		
}	

function start(){
	var startBtn = document.createElement("button");
	startBtn.id = "st";
	var t = document.createTextNode("Start");
	startBtn.appendChild(t);
	document.getElementsByTagName('body')[0].appendChild(startBtn);
	startBtn.onclick = function(){
		document.getElementById("st").outerHTML = "";
		display();
	}
}

//displays the words every 2 seconds
function display(){
	createList();
	var speed = 100; //Change this would change the display speed of each word
	var time = setInterval(startTime, speed);
	function startTime(){
		if(aniCount === 3 && cloCount === 3 && colCount === 3 &&
		   spoCount === 3 && couCount === 3){
			clearInterval(time);
			aniCount = 0; 
			cloCount = 0;
			colCount = 0;
			spoCount = 0;
			couCount = 0;
			document.getElementById("name").innerHTML = "";
			document.getElementById("Type").innerHTML = '';
			var ask = document.createElement("div");
			ask.setAttribute('id', 'ask');
			document.getElementsByTagName('body')[0].appendChild(ask);
			proceedInput();
		} else {
			var rand = Math.floor(Math.random() * all.length);
		  
			document.getElementById("name").innerHTML = all[rand].name;
			document.getElementById("Type").innerHTML = 'Category: ' + all[rand].category;
			
			switch(all[rand].category){
				case 'animal' :
					aniCount++;
					if(aniCount == 3) result.push(all[rand].name);
					break;
				case 'cloth' :
					cloCount++;
					if(cloCount == 3) result.push(all[rand].name);
					break;
				case 'color' :
					colCount++;
					if(colCount == 3) result.push(all[rand].name);
					break;
				case 'country' :
					couCount++;
					if(couCount == 3) result.push(all[rand].name);
					break;
				case 'sports' :
					spoCount++;
					if(spoCount == 3) result.push(all[rand].name);
					break;
			}
			all.splice(rand, 1);
		}
	}
}


//User puts an input 
function proceedInput(){

	document.getElementById("ask").innerHTML = 'What was the last item for each category?';
	countryF();
	function countryF(){
		var countryIn = document.createElement("div");
		
		countryIn.setAttribute('id', 'form1');
		countryIn.setAttribute('name', 'country');
		
		var i1 = document.createElement("input");
		i1.type = "text";
		i1.name = "user_ans1";
		i1.id = "i1";
		
		
		var b1 = document.createElement("button");
		var t1 = document.createTextNode("Submit");
		b1.appendChild(t1);
		
		var c = document.createElement("p");
		c.innerHTML = "Country?";
		
		countryIn.appendChild(c);
		countryIn.appendChild(i1);
		countryIn.appendChild(b1);
		document.getElementsByTagName('body')[0].appendChild(countryIn);
		//document.body.appendChild(countryIn);
		
		b1.onclick = function(){
			userInputs.push(i1.value);
			document.getElementById("form1").outerHTML = "";
			colorF();
		}
	}

	function colorF(){
		var colorIn = document.createElement("div");
		
		colorIn.setAttribute('id', 'form2');
		colorIn.setAttribute('name', 'color');
		
		var i2 = document.createElement("input");
		i2.type = "text";
		i2.name = "user_ans2";
		i2.id = "i2";
		
		var b2 = document.createElement("button");
		var t2 = document.createTextNode("Submit");
		b2.appendChild(t2);
		
		c = document.createElement("p");
		c.innerHTML = "Color?";
		
		colorIn.appendChild(c);
		colorIn.appendChild(i2);
		colorIn.appendChild(b2);
	
		document.getElementsByTagName('body')[0].appendChild(colorIn);
		
		b2.onclick = function(){
			userInputs.push(i2.value);
			document.getElementById("form2").outerHTML = "";
			sportsF();
		}
	}

	function sportsF(){
		var sportsIn = document.createElement("div");
	
		sportsIn.setAttribute('id', 'form3');
		sportsIn.setAttribute('name', 'sports');
		
		var i3 = document.createElement("input");
		i3.type = "text";
		i3.name = "user_ans3";
		i3.id = "i3";
		
		var b3 = document.createElement("button");
		var t3 = document.createTextNode("Submit");
		b3.appendChild(t3);
		
		c = document.createElement("p");
		c.innerHTML = "Sports?";
		
		sportsIn.appendChild(c);
		sportsIn.appendChild(i3);
		sportsIn.appendChild(b3);
	
		document.getElementsByTagName('body')[0].appendChild(sportsIn);
		
		b3.onclick = function(){
			userInputs.push(i3.value);
			document.getElementById("form3").outerHTML = "";
			clothesF();
		}
	}

	function clothesF(){
		var clothesIn = document.createElement("div");
	
		clothesIn.setAttribute('id', 'form4');
		clothesIn.setAttribute('name', 'cloth');
		
		var i4 = document.createElement("input");
		i4.type = "text";
		i4.name = "user_ans4";
		i4.id = "i4";;
		
		var b4 = document.createElement("button");
		var t4 = document.createTextNode("Submit");
		b4.appendChild(t4);
		
		c = document.createElement("p");
		c.innerHTML = "Cloth?";
		
		clothesIn.appendChild(c);
		clothesIn.appendChild(i4);
		clothesIn.appendChild(b4);
	
		document.getElementsByTagName('body')[0].appendChild(clothesIn);
		
		b4.onclick = function(){
			userInputs.push(i4.value);
			document.getElementById("form4").outerHTML = "";
			animalF();
		}
	}

	function animalF(){
		var animalsIn = document.createElement("div");
		
		animalsIn.setAttribute('id', 'form5');
		animalsIn.setAttribute('name', 'animal');
		
		var i5 = document.createElement("input");
		i5.type = "text";
		i5.name = "user_ans5";
		i5.id = "i5";
		
		var b5 = document.createElement("button");
		var t5 = document.createTextNode("Submit");
		b5.appendChild(t5);
		
		c = document.createElement("p");
		c.innerHTML = "Animal?";
		
		animalsIn.appendChild(c);
		animalsIn.appendChild(i5);
		animalsIn.appendChild(b5);
		document.getElementsByTagName('body')[0].appendChild(animalsIn);
		
		b5.onclick = function(){
			userInputs.push(i5.value);
			document.getElementById("form5").outerHTML = "";
			document.getElementById("ask").outerHTML= "";
			lastPart();
		}
	}
}

//Prints how much of the items he/she got it right
//Ask for a retrial/re-start
function lastPart(){
	var correct = compareResult(result, userInputs);
	var correctDiv = document.createElement("div");
	correctDiv.setAttribute('id', 'correct');
	document.getElementsByTagName('body')[0].appendChild(correctDiv);
	document.getElementById("correct").innerHTML = "You got " + correct + " of the elements correct! </br>";
	//Button for start again or go back to the main (We do not have a main page yet);
	document.getElementById("correct").innerHTML += "If you want to try again click restart";
	
	//Resetting for the next round
	result = [];
	userInputs = [];
	
	var restartBtn = document.createElement("button");
	restartBtn.id = "rest";
	var t = document.createTextNode("restart");
	restartBtn.appendChild(t);
	document.getElementsByTagName('body')[0].appendChild(restartBtn);
	restartBtn.onclick = function(){
		document.getElementById("rest").outerHTML = "";
		document.getElementById("correct").outerHTML = "";
		display();
	}
}

//Helper function comparing the results of user's to correct answer
function compareResult(arr, arr2){
	var count = 0;
	for(i = 0; i < 5; i++){
		if(arr.includes(arr2[i])){
			count++;
			arr.splice(arr.indexOf(arr2[i]), 1);
		}
	}
	return count;
}	