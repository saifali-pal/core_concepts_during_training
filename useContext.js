//provides a way for functional components to consume values from a react context
//enable sharing of data across multiple components 


//How it works:
// create a context: first a context object is created, React.createContext(). Serves as a container for the shared data


import { createContext } from 'react'
export const MyContext = createContext()


//provide the context:
//context.provider component, is then used to wrap the part of the component tree, where the context value need to be accessible
//the value prop of the provider sets the data that will be shared to the


// import React, { useState } from 'react';
// import { MyContext } from './MyContext';

// function App() {
//   const [data, setData] = useState('some data');
//   return (
//     <MyContext.Provider value={data}>
//       {/* Child components that need to access 'data' */}
//       <ChildComponent />
//     </MyContext.Provider>
//   );
// }

//Consume the context:

// In any functional component within the Provider's subtree that needs to access the shared data, the useContext hook is used. It takes the Context object (e.g., MyContext) as an argument and returns the current value of that context.

//     import React, { useContext } from 'react';
// import { MyContext } from './MyContext';

// function ChildComponent() {
//   const contextValue = useContext(MyContext);
//   return (
//     <div>
//       <p>Value from Context: {contextValue}</p>
//     </div>
//   );
// }

