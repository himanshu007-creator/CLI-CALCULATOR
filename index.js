"use strict";
exports.__esModule = true;
// import terminalLink from "terminal-link";
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var name = process.argv;
var res = name.slice(2);
function main(sysargs) {
    // Addition
    if (sysargs[0] === "+" || sysargs[0] === "-a") {
        add(sysargs);
    }
    // Multiply
    else if (sysargs[0] === "*" || sysargs[0] === "-m") {
        mul(sysargs);
    }
    // Divide
    else if (sysargs[0] === "/" || sysargs[0] === "-d") {
        div(sysargs);
    }
    // Minus
    else if (sysargs[0] === "-" || sysargs[0] === "-s") {
        sub(sysargs);
    }
    // expressions/equations
    else if (sysargs[0] === "=" || sysargs[0] === "-e") {
        rl.question("Select degree of equation ", function (answer) {
            console.log("so you choose " + answer);
            if (answer === "1") {
                console.log("so you choose linear equation [ax + b = 0]");
            }
            rl.close();
        });
    }
    // else {
    //   console.log("See you later!!");
    //   const link = terminalLink("Himanshu", "https://twitter.com/_himanshu_325");
    //   const link2 = terminalLink(
    //     "GitHub",
    //     "https://github.com/himanshu007-creator/CLI-CALCULATOR"
    //   );
    //   console.log(`Check out this project on ${link2}`);
    //   console.log(`made with 💗 by ${link}`);
    //   setTimeout(function () {
    //     return process.exit();
    //   }, 5000);
    // }
    process.exit();
}
function add(sysargs) {
    var vals = res.slice(1);
    var ans = 0;
    vals.forEach(function (element) {
        ans += parseInt(element);
    });
    console.log(ans);
}
function mul(sysargs) {
    var vals = res.slice(1);
    var ans = 1;
    vals.forEach(function (element) {
        ans *= parseInt(element);
    });
    console.log(ans);
}
function div(sysargs) {
    var vals = res.slice(1);
    var ans = 0;
    ans = parseFloat(sysargs[1]) / parseFloat(sysargs[2]);
    console.log(ans);
}
function sub(sysargs) {
    var vals = res.slice(1);
    var ans = 0;
    ans = parseInt(sysargs[1]) - parseInt(sysargs[2]);
    console.log(ans);
}
main(res);
