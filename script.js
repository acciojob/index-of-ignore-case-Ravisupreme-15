function indexOfIgnoreCase(s1, s2) {
  // write your code here
	for (let index = 0; index < s1.length - s2.length+1; index++) {
		if (s1.subString(index, s2.length+index) == s2) {
			return index;
		}
	}
	return -1;
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
const s1 = "rathan";
const s2 = "han";
alert(indexOfIgnoreCase(s1, s2));
