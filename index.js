const readline = require('readline');
const validator = require('Validator');
const colors = require('./colors');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (options, callback) => {
    const { question, validationRules, color, bold, underline } = options;
    const coloredQuestion = color ? `${colors[color]}${bold ? colors.bold : ''}${underline ? colors.underline : ''}${question}${colors.endc}` : question
    rl.question(coloredQuestion, (answer) => {
        rl.close();
        const validationResult = validation(answer.trim(), validationRules);
        callback(answer, validationResult);
    });
}

const validation = (text, rules = '') => {
    const v = validator.make({ question: text }, { question: rules });
    return v.fails() ? v.getErrors() : true
}

module.exports = question;