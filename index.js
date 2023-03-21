const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers) {
   return drivers.slice(0,2);
}


function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

const createFareMultiplier = function(value) {
    return function(fare) {
        return fare * value;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
}