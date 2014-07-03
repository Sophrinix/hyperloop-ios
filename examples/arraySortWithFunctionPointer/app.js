"use hyperloop"

var array = NSArray.arrayWithObjects(3,2,1);

console.log("before which should be out of order =>",array);

var newarray = array.sortedArrayUsingFunction(function(a,b,context){
	if (a > b) {
		return 1;
	}
	else if (a < b) {
		return -1;
	}
	return 0;
},null);

console.log("after which should be in order =>",newarray);
