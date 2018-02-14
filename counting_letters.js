function countLetters(str) {
	str = str.split(' ').join('');
	var counter = {};
	for(var i = 0; i < str.length; i++) {
		if(counter[str.charAt(i)] === undefined) {
			counter[str.charAt(i)] = 1;
		} 
		else {
			counter[str.charAt(i)] ++;
		}
	}
	return counter;
}

console.log(countLetters("lighthouse in the house"));