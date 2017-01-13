var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var id = 0;
  /* your code here */

  return function() {
  	var dieResult = list[id];
  	id += 1;
  	return dieResult;
  }
})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6