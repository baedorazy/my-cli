#!/usr/bin/env node

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();

const answerCallback = (ans) => {
    if(ans ==='y') {
        console.log('감사!');
        rl.close();
    } else if (ans ==='n') {
        console.log('미안');
        rl.close();
    } else {
        console.clear();
        console.log('y or n만 눌러!');
        rl.question('prompt test 잼써? (y/n)', answerCallback);
    }
};

rl.question('prompt test 잼써? (y/n)', answerCallback)


