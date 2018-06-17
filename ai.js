var left_move = [1,2,3,4,5,6,7,8,9]
function train(){

}
function play(){

}

function play_times(n){
	while(n>0){
		play();
		n-=1;
	}
}

var move_sequence = []

function ai(move_sequence){
	var most_probable_move = 1;
	var grid = []
	// See what's the most probable move
	// Check grid to see what the advancement
	move_sequence.forEach(function(element){

	});
	//Check if a line is already formed
		//If line close to be formed
		//Try to continue
	var lines = [[1,1,1,0,0,0,0,0,0],
				 [0,1,1,0,0,0,0,0,0],
				 [0,0,1,0,0,0,0,0,0],
				 [0,1,0,0,0,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [1,0,1,0,0,0,0,0,0],
				 [0,0,0,1,1,1,0,0,0],
				 [0,0,0,0,1,1,0,0,0],
				 [0,0,0,0,0,1,0,0,0],
				 [0,0,0,0,1,0,0,0,0],
				 [0,0,0,1,0,0,0,0,0],
				 [0,0,0,1,0,1,0,0,0],
				 [0,0,0,0,0,0,1,1,1],
				 [0,0,0,0,0,0,0,1,1],
				 [0,0,0,0,0,0,0,0,1],
				 [0,0,0,0,0,0,0,1,0],
				 [0,0,0,0,0,0,1,0,0],
				 [0,0,0,0,0,0,1,0,1]]
 	

	// check horizontal +1 vertical +1
	// Check if move_sequence
	var left_diag = 3;
	var right_diag = 3;
	if(move_sequence[0] == 1){
		left_diag -=1;
	}
	if(move_sequence[4] == 1){
		left_diag -=1;
	}
	if(move_sequence[8] == 1){
		left_diag -=1;
	}

	if(move_sequence[2] == 1){
		right_diag -=1;
	}
	if(move_sequence[4] == 1){
		right_diag -=1;
	}
	if(move_sequence[6] == 1){
		right_diag -=1;
	}


 	//Check if diagonal is already formed
		//If diagonal soon to be formed
		//Try to finish the line
	var diagonals = [[1,0,0,0,1,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [0,0,0,0,1,0,0,0,1],
				 [0,0,0,0,0,0,0,0,1],
				 [1,0,0,0,0,0,0,0,1],
				 [0,0,1,0,1,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [0,0,0,0,1,0,1,0,0],
				 [0,0,0,0,0,0,1,0,0],
				 [0,0,1,0,0,0,1,0,0],
				 [0,0,0,0,1,0,0,0,0]]

	//Check column if already formed
		//Try to finish the line
	var columns = [
				 [1,0,0,0,0,0,0,0,0],
				 [0,0,0,0,0,0,0,0,0],
				 [0,0,0,0,0,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [0,0,0,0,0,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [0,0,0,0,0,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [0,0,0,0,0,0,0,0,0],
				 [0,0,0,0,0,0,0,0,0],
				 [0,0,0,0,0,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 [1,0,0,0,0,0,0,0,0],
				 ]
	return most_probable_move;
}