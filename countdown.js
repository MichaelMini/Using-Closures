var countdownGenerator = function (x) {
  /* your code here */
  var messages = ['T-minus ', 'Blast Off!', 'Rockets already gone, bub!'];
  var initCount = x;
  return function() {
  	if ( initCount > 0 ) {
  		var message = messages[0] + initCount + '...';
	  	console.log(message);
	  	initCount -= 1;
	  	return message;
  	} else if ( initCount === 0 ) {
  		var message = messages[1];
	  	console.log(message);
	  	initCount -= 1;
	  	return message;
  	} else if ( initCount < 0 ) {
  		var message = messages[2];
	  	console.log(message);
	  	initCount -= 1;
	  	return message;
  	}
  	initCount -= 1;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!