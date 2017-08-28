class MainController {
    constructor() {
        this.message = "You have amassed a fortune of " + getFortune(fortune);
    }
}


fortune = ["terribleness.", "a thousand curses.", "something that could be... better I guess.", "... enter your credit card # to continue.", "something that's not so bad.", "$0.25 sucka!", "utter greatness.", "a bright future ahead of you or finding one half of a granola bar on the ground when you need it most.", "a lifetime supply of carpet."]

function getFortune(input) {
    let result = "";
       result= input[(Math.floor((Math.random()* input.length)))];
       return result;
    }


// Create return random fortune

