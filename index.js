// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    const headQuarters = 42;
    return Math.abs(pickupLocation - headQuarters);
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetBlocks = 264;
    return blocks * feetBlocks;
}

function distanceTravelledInFeet(start, finish) {
    const blocksTravelled = Math.abs(finish - start);
    const feetBlocks = 264;
    return blocksTravelled * feetBlocks;
}

function calculatesFarePrice(start, finish) {
    const distance = distanceTravelledInFeet(start, finish);
    if (distance <= 400) {
        fare = 0;
    } else if (distance <= 2000) {
        fare = (distance - 400) * 0.02;
    } else if (distance <= 2500) {
        fare = 25;
    } else {
        return 'cannot travel that far';
    }
    return fare.toFixed(2);
}