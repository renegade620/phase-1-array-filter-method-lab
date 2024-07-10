// Code your solution here
function findMatching(drivers, driverName) {
    return drivers.filter(driver => driver.toLowerCase() === driverName.toLowerCase());
}

function fuzzyMatch(drivers, letter) {
    return drivers.filter(driver => driver.startsWith(letter));
}

function matchName(drivers, driverName) {
    return drivers.filter(driver => driver.name === driverName);
}