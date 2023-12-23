function indexOfIgnoreCase(s1, s2) {
  // write your code here
	var ans = -1;
	let flag = false;
	for (let index = 0; index < s1.length - s2.length+1; index++) {
		if (s1.substring(index, s2.length+index) == s2) {
			ans = index; 
			flag = true;
		}
	}
	if(flag == true){
		return ans;
	}
	return ans; 
}

// Please do not change the code below
const s1 = prompt("Enter s1:"); 
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
