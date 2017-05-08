const myMap = new Map([
    ['G', 'C'],
    ['C', 'G'],
    ['T', 'A'],
    ['A', 'U']
]);
export default class Transcriptor {
    toRna(input){
        let result = '';
        for (let i = 0; i < input.length; i++) {
            let done = myMap.get(input[i]);
            if (done == undefined) {
                throw new Error('Invalid input DNA.');
            }
            result += done;
        }
        return result;
    }
}