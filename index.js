function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}
const drivers = [
  { name: 'Bobby' },
  { name: 'Sammy' },
  { name: 'Sally' },
  { name: 'Annette' },
  { name: 'Sarah' }
];

// findMatching
console.log(findMatching(drivers.map(d => d.name), 'Sally')); // ['Sally']
console.log(findMatching(drivers.map(d => d.name), 'sally')); // ['Sally']

// fuzzyMatch
console.log(fuzzyMatch(drivers.map(d => d.name), 'Sa')); // ['Sammy', 'Sally', 'Sarah']
console.log(fuzzyMatch(drivers.map(d => d.name), 'll')); // []

// matchName
console.log(matchName(drivers, 'Sally')); // [{ name: 'Sally' }]
