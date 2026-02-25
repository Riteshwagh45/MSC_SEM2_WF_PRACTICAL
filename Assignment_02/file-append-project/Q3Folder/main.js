const EventEmitter = require('events');

class App extends EventEmitter {}
const app = new App();

let count = 0;
const maxEvents = 10; 


app.on('event', (eventName, data) => {
    console.log(`Event detected: ${eventName}`);
    console.log('Data:', data);
});

app.on('systemStart', () => {
    console.log("Callback: System has started.");
});

app.on('userLogin', (user) => {
    console.log(`Callback: User logged in -> ${user}`);
});

app.on('userLogout', (user) => {
    console.log(`Callback: User logged out -> ${user}`);
});

app.on('dataReceived', (payload) => {
    console.log('Callback: Data received ->', payload);
});

app.on('fileUpload', (file) => {
    console.log(`Callback: File uploaded -> ${file}`);
});

app.on('paymentSuccess', (amount) => {
    console.log(`Callback: Payment successful -> ₹${amount}`);
});

app.on('notification', (msg) => {
    console.log(`Callback: Notification -> ${msg}`);
});

app.on('error', (err) => {
    console.log(`Callback: Error occurred -> ${err}`);
});

app.on('finish', () => {
    console.log("\nSystem shutting down...");
    process.exit(0);
});


console.log("Event-driven app started...\n");
app.emit('systemStart');

const interval = setInterval(() => {

    if (count >= maxEvents) {
        clearInterval(interval);
        app.emit('finish');
        return;
    }

    const events = [
        'userLogin',
        'userLogout',
        'dataReceived',
        'fileUpload',
        'paymentSuccess',
        'notification'
        
    ];

    const randomEvent = events[Math.floor(Math.random() * events.length)];

    switch (randomEvent) {

        case 'userLogin':
            app.emit('event', 'userLogin', { user: "Ritesh" });
            app.emit('userLogin', "Ritesh");
            break;

        case 'userLogout':
            app.emit('event', 'userLogout', { user: "Ritesh" });
            app.emit('userLogout', "Ritesh");
            break;

        case 'dataReceived':
            const data = { id: 101, message: "New Data" };
            app.emit('event', 'dataReceived', data);
            app.emit('dataReceived', data);
            break;

        case 'fileUpload':
            app.emit('event', 'fileUpload', { file: "report.pdf" });
            app.emit('fileUpload', "report.pdf");
            break;

        case 'paymentSuccess':
            app.emit('event', 'paymentSuccess', { amount: 999 });
            app.emit('paymentSuccess', 999);
            break;

        case 'notification':
            app.emit('event', 'notification', { msg: "New Alert!" });
            app.emit('notification', "New Alert!");
            break;

        case 'error':
            app.emit('event', 'error', { error: "Something went wrong!" });
            app.emit('error', "Something went wrong!");
            break;
    }

    console.log('-----------------------------------');
    count++;

}, 2000);
