import "./style.css";

/**
 * Setup
 */
const appDiv: HTMLElement = document.getElementById("app");

/**
 * Helpers
 */
const print = (v: any): void => {
  const node = document.createElement("H1");
  node.innerText = v;
  appDiv.appendChild(node);
};

/**
 * SET
 */
const mySet: Set<number> = new Set([1, 2, 3]);

// Add / remove
mySet.add(4);
mySet.delete(1);

print("**** Sets ****");
// mySet.forEach(v => print(v));

// print(`Does set contain the number 2? - ${mySet.has(2)}`)

// Convert set to array
// const myArray: number[] = Array.from(mySet);
const myArray: number[] = [...mySet]
// myArray.forEach(v => print(v))

// Create set from array
const backToSet: Set<number> = new Set(myArray)

// Remove duplicates from an array
const noDuplicates = [...new Set([1,2, 3])]



/**
 * MAP
 */
// print("**** Maps ****");

// const myMap: Map<string, string> = new Map([
//   ["key", "value"],
//   ["anotherKey", "anotherValue"]
// ]);

// const a = myMap.get("anotherKey");
// print(a);
// myMap.forEach(v => print(v));

// print(myMap.size);
