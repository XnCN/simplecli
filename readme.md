#  SimpleCLI

This package is a simple command line interface helper , you can ask a question and validate answer.That is very simple.

**How can i install?**

    npm install simplecli

**Let's do a simple example**
```javascript
const  simplecli  =  require('@xncn/simplecli');
simplecli(
    { question:  "What's your instagram username? :", },
    (answer) =>  console.log(`https://www.instagram.com/${answer}`)
);
```
![enter image description here](https://lh3.googleusercontent.com/IdHnRj39q7hv46Hb6bI_rN8rJG9rP23JIXVsXHNbYWeHXIC6poZ4RC8qQq4mNzfzT0HZsYMOUWZF)
#### Customize
Let's do some customize.You can customize text color , just send color argument to simplecli.

```javascript
simplecli(
    {
        question: "What's your instagram username? :",
        color: 'cyan'
    },
    (answer) => console.log(`https://www.instagram.com/${answer}`)
);
```
![enter image description here](https://lh3.googleusercontent.com/gdl30Ayh6Ne3IZgfnGFY3vhKD25UDbtLs2OzPMNeMcLrYw1JcNo8c0DyvJyQSINxeHbqKYt-y03l)

Avaible colors : blue,green,red,yellow,magenta,cyan,white,crimson

And you can customize text weight and underline style.
```json
{
   		...
        bold: true,
        //underline: true
},
```
![enter image description here](https://lh3.googleusercontent.com/n6pGyEJPgng9TmGoBHY5gK_uUgA2iq9ujqj-e2DxE9t58H0eDLhxeS4nQ5ot3zWDpQ5-Nn2vqlt6)

### Validation
Simplecli includes [Validator](https://www.npmjs.com/package/Validator "Validator") library, you can validate your data it's so easy.Lets do a exampleİf you want do validation you pass second argument , you can use a callback function.Function includes two arguments they are user prompt and validation errors.
```javascript
simplecli(
    {
        question: "How old are you? :",
        color: 'cyan',
        bold: true,
        underline: true,
        validationRules: 'required|numeric|max:50|min:18'
    },
    (answer, err) => {
        if (err != true) { console.log(err); return; }
        console.log(`Good you are ${answer} years old , you can do this action:)`);
    }
);
```
![enter image description here](https://lh3.googleusercontent.com/CjQGTLNHUCt7UPzD3FnW8RIujlxVlw3rg-bWJMoD3cFdJDBvE-pgqwCS_ejoM09GPb4yzM5kVI0J)

#### Supported Validation Rules
See validation rule usage in [Laravel Documentation](https://laravel.com/docs/5.2/validation#available-validation-rules "Laravel Documentation")

- accepted
- after (date)
- alpha
- alpha_num
- alpha_dash
- array
- before (date)
- between
- boolean
- confirmed
- date
- different
- digits
- digits_between
- email
- filled
- in
- integer
- ip
- json
- max
- min
- not_in
- numeric
- present
- regex
- required
- required_if
- required_unless
- required_with
- required_with_all
- required_without
- required_without_all
- same
- size
- string
- url
