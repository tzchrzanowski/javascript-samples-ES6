export default class Hamming{
	Hamming(stringA, stringB){
		this.stringA = stringA;
		this.stringB = stringB;
	}
	compute(stringA, stringB){ 
		var tableA = [];
		var tableB = [];
		tableA = stringA.split("");
		tableB = stringB.split("");
		var differences = 0;
		if(tableA.length !== tableB.length){
			throw Error("DNA strands must be of equal length.");
		}else if(tableA.length == tableB.length){
			for(var i = 0; i < tableA.length; i++){
				if(tableA[i]!=tableB[i]){
					differences +=1;
				}
			}
		}
	return differences;
	}
}
