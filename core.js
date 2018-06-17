var move_sequence = [0,0,0,0,0,0,0,0,0];
var player_1 = true;
var win = false;
var move_left = 9;
var move_recorded = []
var win_numbers = []
var game = 1;
var win_counter = 0
var what_left = [0,0,0,0,0,0,0,0,0];
var player_taken = [0,0,0,0,0,0,0,0,0];
var ai_taken = [0,0,0,0,0,0,0,0,0];
var winning_sequence = [
						[1,1,1,0,0,0,0,0,0],
						[0,0,0,1,1,1,0,0,0],
						[0,0,0,0,0,0,1,1,1],
						[1,0,0,1,0,0,1,0,0],
						[1,0,0,0,1,0,0,0,1],
						[0,1,0,0,1,0,0,1,0],
						[0,0,1,0,0,1,0,0,1],
						[0,0,1,0,1,0,1,0,0],
						];

var winning_strategies = [
				 [[1,1,1],
				  [0,0,0],
				  [0,0,0]],

				 [[0,0,0],
				  [1,1,1],
				  [0,0,0]],
				  
				 [[0,0,0],
				  [0,0,0],
				  [1,1,1]],
				  
				 [[1,0,0],
				  [0,1,0],
				  [0,0,1]],
				  
				 [[0,0,1],
				  [0,1,0],
				  [1,0,0]],

				 [[1,0,0],
				  [1,0,0],
				  [1,0,0]],
				  
				 [[0,1,0],
				  [0,1,0],
				  [0,1,0]],
				   
				 [[0,0,1],
				  [0,0,1],
				  [0,0,1]]]

/**********************************/
//
//
//*********************************/
function click_cell(number){
	if(move_sequence[number-1] == 0 && win == false){

		sign = "X"
		if(player_1 == true){	
			sign = "X"
			player_1 = false
			move_sequence[number-1] = 1
			console.log(number-1)
			move_left -= 1;
		}
		else{
			sign = "O"
			player_1 = true
			move_sequence[number-1] = 2
			console.log(number-1)
			move_left -= 1;

		}
		name = "cell_".concat(number)
		document.getElementById(name).text = sign
	check_win();
	update_sequence();
	record_move();
	check_what_left();
	}
}

/**********************************/
//
//
//*********************************/
function reset(){
	move_sequence = [0,0,0,0,0,0,0,0,0];
	var name = "";
	player_1 = true;
	win = false;
	move_left = 9;
	game += 1;
	record_move();
	update_sequence();
	document.getElementById("move_record").textContent = "";
	for(var i = 1; i < 10; i++){
		var name = "cell_".concat(i);
		document.getElementById(name).text = i;
	}
}

/**********************************/
//
//
//*********************************/
function check_win(){
	function check_diag(){
		if(move_sequence[0]==1 && move_sequence[4]==1 && move_sequence[8]==1){
			return true
		}
		if(move_sequence[2]==1 && move_sequence[4]==1 && move_sequence[6]==1){
			return true
		}
	}
	function check_line(){
		if(move_sequence[0]==1 && move_sequence[1]==1 && move_sequence[2]==1){
			return true
		}
		if(move_sequence[3]==1 && move_sequence[4]==1 && move_sequence[5]==1){
			return true
		}
		if(move_sequence[6]==1 && move_sequence[7]==1 && move_sequence[8]==1){
			return true
		}	
	}
	function check_column(){
		if(move_sequence[0]==1 && move_sequence[3]==1 && move_sequence[6]==1){
			return true
		}
		if(move_sequence[1]==1 && move_sequence[4]==1 && move_sequence[7]==1){
			return true
		}
		if(move_sequence[2]==1 && move_sequence[5]==1 && move_sequence[8]==1){
			return true
		}
	}
	if(check_diag() || check_line() || check_column()){
		console.log("Win");
		win = true;
		win_counter += 1;
		document.getElementById("win_counter").textContent = "Win counter : "+win_counter;
	}
}

function visualize_sequence(){
	move_sequence.forEach(function(element){
		console.log(element)
	});
}

function show_sequence(){
	console.log(move_sequence)
	update_sequence()
}

function update_sequence(){
	document.getElementById("sequence").textContent = move_sequence;
	document.getElementById("left_move").textContent = move_left;
	document.getElementById("what_left").textContent = what_left;
	document.getElementById("player_taken").textContent = player_taken;
	document.getElementById("ai_taken").textContent = ai_taken;
}

function record_move(){
	move_recorded.push([].concat(move_sequence));

	// We reset the previous move panel
	var panel = document.getElementById("move_record")
	panel.textContent = ""
	console.log("Game "+game)

	move_recorded.forEach(function(element){
		var div = document.createElement("DIV")
		div.className = "alert alert-info"
		div.textContent = element
		panel.appendChild(div)
	});
}

function check_what_left(){
	for(var i = 0; i < move_sequence.length; i++){
		if(move_sequence[i] == 0){
			what_left.push(i)
		}
		if(move_sequence[i] == 1){
		 	player_taken.push(i)
		}
		if(move_sequence[i] == 2){
			ai_taken.push(i)
		}
		console.log(what_left)
		console.log(what_left)

	}
}