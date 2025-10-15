//optimize performance by memorizing(caching) the result of function calculation
// it prevents unecassary re-comuputation of values during re-renders if the dependencies of that value have not changed


//how it works:
//useMemo takes two arguements, a function that calculates the value you want to memorize, an array of dependencies

//Dependency Check: React will only re-execute the provided function and recalculate the value if any of the values in the dependency array have changed since the last render. If the dependencies remain the same, useMemo returns the previously cached value


//when to use usememo:
// Expensive computations: When you have a function that performs a complex or time-consuming calculation, useMemo can prevent it from running on every re-render, thus improving performance.
// Referential equality: useMemo is useful for ensuring that the reference of an object or array remains the same across re-renders, as long as its internal content (as determined by the dependencies) hasn't changed. This is crucial for preventing unnecessary re-renders of child components that rely on referential equality for their own memoization (e.g., with React.memo).



// import React, { useState, useMemo } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);
//   const [items, setItems] = useState([]);

//   // This calculation will only re-run if 'count' changes
//   const expensiveCalculation = useMemo(() => {
//     console.log('Performing expensive calculation...');
//     // Simulate a time-consuming operation
//     let result = 0;
//     for (let i = 0; i < count * 1000000; i++) {
//       result += i;
//     }
//     return result;
//   }, [count]);

//   const addItem = () => {
//     setItems(prevItems => [...prevItems, 'New Item']);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <p>Expensive Calculation Result: {expensiveCalculation}</p>

//       <p>Items: {items.length}</p>
//       <button onClick={addItem}>Add Item</button>
//     </div>
//   );
// }

// export default MyComponent;

// In this example, expensiveCalculation will only be re-executed when the count state changes. If you click "Add Item," the items state changes and the component re-renders, but expensiveCalculation will not run again because its dependency (count) has not changed.

//Considerations:
// Overhead: useMemo itself has a small performance and memory overhead. Do not use it for every value; only apply it when truly necessary for performance optimization.
// Dependencies: Incorrectly specifying dependencies can lead to stale values or unnecessary re-computations. Ensure your dependency array accurately reflects all values that the memoized calculation relies on.

