function twoNumberSum(array, targetSum) {
	let sum = 0
	for(let data of array){
		sum += data
	}
	
	// Write your code here.
	for(let i=0; i<array.length;i++){
    for(let j=i+1; j<array.length;j++){
      if(array[i]+array[j] === targetSum){
        return x = [array[i], array[j]]
      }
    }
  }
  return x = []
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;