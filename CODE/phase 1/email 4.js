const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your email: ', (email) => {
    if (validateEmail(email)) {
        console.log('Valid email address.');
    } else {
        console.log('Invalid email address.');
    }
    rl.close();
});

function validateEmail(email) {
    return email.includes('@') && email.includes('.');
}