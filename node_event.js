const event_emitter = require("events");

class my_emitter extends event_emitter{}

const m_emt = new my_emitter();

m_emt.on("Water Filled",()=>{
    console.log('Turn of the Water motor');
    setTimeout(() => {
        console.warn("Reminder turn of the Water motor. !!!");
    }, 3000);
});

m_emt.emit("event");

console.log('code done');

m_emt.emit("Water Filled");