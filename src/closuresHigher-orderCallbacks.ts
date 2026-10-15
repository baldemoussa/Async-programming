function applyDiscount(rate: number) {
    return function (price: number) {
        return price * (1 - rate);
    }
}

const tenPercentDiscount = applyDiscount(0.1);
console.log(tenPercentDiscount(100));

function makeCounter ( initialValue: number ) {
    let count = initialValue;
    return function () {
        count++;
        return count;
    }
}
const counter = makeCounter(3);
console.log(counter());
console.log(counter());
console.log(counter());

//Write a function called fetchUser that takes a username and a callback function. After a 1-second delay, it should call the callback with a user object containing the username and a generated ID.

function fetchUser(username: string, callback: (user: { username: string, id: number }) => void) {
    setTimeout(() => {
        callback({ username, id: Math.floor(Math.random() * 100) });
    }, 1000);
}

fetchUser("Alice", (user) => console.log("Fetched User:", user));