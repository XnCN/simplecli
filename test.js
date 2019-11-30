const simplecli = require('./index');

simplecli(
    { question: "What's your instagram username? :", },
    (answer) => console.log(`https://www.instagram.com/${answer}`)
);
