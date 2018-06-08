$("document").ready(function(){
	var all = [];
	var result = [];		//Correct last 5 words
	var userInputs = [];	//User's last 5 words
	var mode = 3; 			//Indicates the mode. Mode 3 = answering 3 categories. 4 = answering 4 catergories.
	var trial = 0;
	var index = 0;
	var score = 0;
	
	$("#Answering").hide();
	//$("#instruction").append("<p>There are five runs in this part. You will see a sequence of words on the center of the screen. All words belong to five chosen categories: animals, colors, clothes, countries, and sports. Exactly three of these categories will be present in each run, but the words' categories vary from run to run. At the end of each run, you will be asked to type the last word in each of those <b>three</b> categories. The category of every word will be hinted at the bottom of the screen. Please do your best.</p>");
	$("#Score").hide();
	$("#done").hide();
	 
	$(".start").click(function(){
        
		$("#StartSimulation").hide();
		$("#Trials").hide();
		display();
    });
	
	function createList(){
		var animals = ["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee","cow","crocodile","deer","dog","dolphin","duck","eagle","elephant","fish","fly","fox","frog","giraffe","goat","goldfish","hamster","hippopotamus","horse","kangaroo","kitten","lion","lobster","monkey","octopus","owl","panda","pig","puppy","rabbit","rat","scorpion","seal","shark","sheep","snail","snake","spider","squirrel","tiger","turtle","wolf","zebra"];
		var clothes = ["belt","boots","cap","coat","dress","gloves","hat","jacket","jeans","pajamas","pants","raincoat","scarf","shirt","shoes","skirt","slacks","slippers","socks","stockings","suit","sweater","sweatshirt","t-shirt","tie","trousers","underclothes","underpants","undershirt"];
		var colors = ["white","maroon","silver","gray","black","red","yellow","olive","lime","green","navy","aqua","teal","blue","purple"];
		var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","Brunei Darussalam","Bulgaria","Burkina Faso","Myanmar (Burma)","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Democratic Republic of the Congo","Denmark","Djibouti","Dominican Republic","Dominica","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","French Guiana","Gabon","Gambia","Georgia","Germany","Ghana","Great Britain","Greece","Grenada","Guadeloupe","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Israel and the Occupied Territories","Italy","Ivory Coast (Cote d'Ivoire)","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kosovo","Kuwait","Kyrgyz Republic (Kyrgyzstan)","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Republic of Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Moldova, Republic of","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Korea, Democratic Republic of (North Korea)","Norway","Oman","Pacific Islands","Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent's & Grenadines","Samoa","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovak Republic (Slovakia)","Slovenia","Solomon Islands","Somalia","South Africa","Korea, Republic of (South Korea)","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Tajikistan","Tanzania","Thailand","Timor Leste","Togo","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos Islands","Uganda","Ukraine","United Arab Emirates","United States of America (USA)","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (UK)","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
		var sports = ["wrestling","water polo","table tennis","hurling","skiing","badminton","field hockey","mixed martial arts","bowling","handball","track and field","lacrosse","cycling","american football","car racing","baseball", "boxing","rugby","volleyball", "ice hockey", "tennis", "soccer", "basketball", "cricket", "golf"];
		
		var categoryList = [animals, clothes, colors, countries, sports];
		var list = [];
		var num = [];
		//Creating 3 random lists consist of 3 words for each category
		for(var i = 0; i < mode; i++){ //if mode is 2nd trial i becomes 4
			var choose = Math.floor(Math.random() * categoryList.length);
			while(num.includes(choose)){
				choose = Math.floor(Math.random() * categoryList.length);  
				
			}
			num.push(choose);
			//console.log("rand: " +  choose);
			switch(choose){
				case 0 : 
					pickAndAdd(all, categoryList[choose], 'animals');
					list.push({'label': 'animals', 
							   'count': 0});
					break;
				case 1 :
					pickAndAdd(all, categoryList[choose], 'clothes');
					list.push({'label': 'clothes', 
							   'count': 0});
					break;
				case 2 :
					pickAndAdd(all, categoryList[choose], 'colors');
					list.push({'label': 'colors', 
							   'count': 0});
					break;
				case 3 :
					pickAndAdd(all, categoryList[choose], 'countries');
					list.push({'label': 'countries', 
							   'count': 0});
					break;
				case 4 :
					pickAndAdd(all, categoryList[choose], 'sports');
					list.push({'label': 'sports', 
							   'count': 0});
					break;
			}
			//console.log(list);
		}
		return list;
	}

	function pickAndAdd(arr, list, cat){ //arr = all, cat = category
		for(i = 0; i < 3; i++){
			var ran = Math.floor(Math.random() * list.length)
			arr.push({'name' : list[ran],
					  'category' : cat});
			list.splice(ran, 1);
		}
	}
		
	function display(){
		trial++;
		if (trial == 5){
			$("#instruction").text("");
			$("#instruction").append("<p>There are five runs in this part. You will see a sequence of words on the center of the screen. All words belong to five chosen categories: animals, colors, clothes, countries, and sports. Exactly three of these categories will be present in each run, but the words' categories vary from run to run. At the end of each run, you will be asked to type the last word in each of those <b>four</b> categories. The category of every word will be hinted at the bottom of the screen. Please do your best.</p>");
		}
		$("#TrialNum").show();
		$("#TrialNum").text("Trial " + (trial));
		if(trial === 6) mode = 4;
		var list = createList();
		var speed = 2000; 			//Change this would change the display speed of each word
		var time = setInterval(startTime, speed);
		console.log(all.length);
		function startTime(){
			if(mode === 3) {
				if(list[0].count === 3 && list[1].count === 3 && list[2].count === 3){
					clearInterval(time);
					document.getElementById("name").innerHTML = "";
					document.getElementById("Type").innerHTML = '';
					
					proceedInput(list);
					
					return;
				} else {
					var rand = Math.floor(Math.random() * all.length);
					//document.getElementById("name").innerHTML = all[rand].name;
					console.log("rand: " + rand);
					$("#name").text(all[rand].name).fadeIn(1000);
					$("#name").text(all[rand].name).fadeOut(1000);
					
					//$("#name").fadeIn();
					document.getElementById("Type").innerHTML = 'This word is of category: ' + all[rand].category;
					
					console.log(all[rand].name);
					console.log("first count: " + list[0].count + "second count: " + list[1].count + " third count: " + list[2].count);
					switch(all[rand].category){
						
						case list[0].label :
							list[0].count++;
							if(list[0].count == 3) result.push(all[rand].name.trim().toLowerCase());
							break;
						case list[1].label :
							list[1].count++;
							if(list[1].count == 3) result.push(all[rand].name.trim().toLowerCase());
							break;
						case list[2].label :
							list[2].count++;
							if(list[2].count == 3) result.push(all[rand].name.trim().toLowerCase());
							break;
					}
					all.splice(rand, 1);
				}
			} else {
				if(list[0].count === 3 && list[1].count === 3 && list[2].count === 3 && list[3].count === 3){
					clearInterval(time);
					document.getElementById("name").innerHTML = "";
					document.getElementById("Type").innerHTML = '';
					console.log(result);
					proceedInput(list);
				} else {
					var rand = Math.floor(Math.random() * all.length);
					
					$("#name").text(all[rand].name).fadeIn(1000);
					$("#name").text(all[rand].name).fadeOut(1000);
					
					document.getElementById("Type").innerHTML = 'This word is of category: ' + all[rand].category;
					
					console.log(all[rand].name);
					console.log("first count: " + list[0].count + "second count: " + list[1].count + " third count: " + list[2].count + " fourth count: " + list[3].count);
					switch(all[rand].category){
						
						case list[0].label :
							list[0].count++;
							if(list[0].count == 3) result.push(all[rand].name.trim().toLowerCase());
							break;
						case list[1].label :
							list[1].count++;
							if(list[1].count == 3) result.push(all[rand].name.trim().toLowerCase());
							break;
						case list[2].label :
							list[2].count++;
							if(list[2].count == 3) result.push(all[rand].name.trim().toLowerCase());
							break;
						case list[3].label :
							list[3].count++;
							if(list[3].count == 3) result.push(all[rand].name.trim().toLowerCase());
							break;
					}
					all.splice(rand, 1);
				}
			}
		}
		return list;
	}
		
	function proceedInput(list){
		$("#Answering").show();
		if(mode === 3){
			$("#question").text("What're the three words from the three categories in this trial?");
		} else {
			$("#question").text("What're the four words from the four categories in this trial?");
		}
		
		$("#insert").text("Type them in the boxes below.");
		$("<div class='test' id='Testing'>").appendTo('body');
		for(i = 0; i < list.length; i++){
			var string = list[i].label + "?\t" + "<input type='text' id='input";
			string += i;
			string += "'><br>";
			$("#Testing").append(string);
			$(".submit").before($("#Testing"));
			
		}
		tempList = list;
		index = tempList.length;
		//TempList might not needed since taking out as a separate function for button click did not solve the problem of stacking labels.
	}
	
	$(".submit").click(function(){
		for(i = 0; i < tempList.length; i++){
			var value = $("#input" + i).val().trim().toLowerCase();
			console.log(value);
			userInputs.push({'label' : tempList[i].label,
							 'value' : value});
			//$(")
			
		}
		$("#Testing").remove();
		$("#Answering").hide();
		$("#TrialNum").hide();
		console.log(userInputs);
		lastPart();
		console.log(trial);
		if(trial < 10){
			$("#StartSimulation").show();
		}
	});
	
	//Prints how much of the items he/she got it right
	//Ask for a retrial/re-start
	function lastPart(){
		if(trial == 10){
			$("#done").show();
			$("#correct").text("You got " + score + " correct!");
		}
		var correct = compareResult(mode); //mode 1 = 3 cats 2 = 4 cats;
		score += correct;
		
		//Resetting for the next round
		result = [];
		userInputs = [];
		all = [];
		
	}
	
	$(".done").click(function(){
		return;
	});
	
	//Helper function comparing the results of user's to correct answer
	function compareResult(numCats){
		var score1 = 0;
		for(i = 0; i < numCats; i++){
			if(result.includes(userInputs[i].value)){ //Maybe compare the category as well?
				score++;
				result.splice(result.indexOf(userInputs[i].value), 1);
			}
		}
		
		return score1;
	}
});