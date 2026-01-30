const EventEmitter = require("events");


const event = new EventEmitter();


function loginCallback(name) {
    console.log(name + " has logged in");
}


event.on("login", loginCallback);


console.log("System is listening for events...\n");

const users = ["Ritesh", "Gitesh", "Suresh"];
let i = 0;

const mainLoop = setInterval(() => {
    if (i < users.length) {
        event.emit("login", users[i]);
        i++;
    } else {
        clearInterval(mainLoop); 
    }
}, 1000);
