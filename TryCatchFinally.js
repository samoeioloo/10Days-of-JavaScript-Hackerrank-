'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    var thrown = true; //check if exception thrown
    try{
        var splits = s.split('');
        var rev = splits.reverse();
        var result = rev.join('');
        console.log(result);
        thrown=false;
    }
    catch(err){
        console.log(err.message);
    }
    finally{
        if(thrown){console.log(s);}
        
    }
}

