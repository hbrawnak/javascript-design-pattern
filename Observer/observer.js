/* Observer pattern is used when there is one-to-many relationship between objects such as if one object is modified, 
 its depenedent objects are to be notified automatically. Observer pattern falls under behavioral pattern category. */

function createObservable() {
    return {
        subscribers: [],
        subcribe(fn) {
            this.subscribers.push(fn);
        },
        unsubscribe(fn) {
            this.subscribers = this.subscribers.filter((item) => item !== item);
        },
        broadcast(data) {
            for (let i = 0; i < this.subscribers.length; i++) {
                this.subscribers[i](data);
            }
        }
    }
}


const observer = createObservable();
const fn = (data) => {
    console.log("Callback was executed with data", data);
}

observer.subcribe(fn);
observer.broadcast("Hello World");

