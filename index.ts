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
print("**** Sets ****");
mySet.forEach(v => print(v));

/**
 * MAP
 */
print("**** Maps ****");

const myMap: Map<string, string> = new Map([
  ["key", "value"],
  ["anotherKey", "anotherValue"]
]);

const a = myMap.get("anotherKey");
print(a);
myMap.forEach(v => print(v));

print(myMap.size);
