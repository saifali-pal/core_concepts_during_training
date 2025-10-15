//enable functional component to perform side effects

//side effect are operations that interact with the outside world, or havee an impact beyond the component render cycle

// data-fetching making api call's to retrieve data
// directly updating the browser DOM
//timers: setting up settimeout, setinterval
//subscription: subscribing to external data sources or events

//useEffect accept two arguement
//callback function this function contains the side effect logic
//optional dependency array,this array controls when the effect should re-run

//execution:
//by default, effect run after every render, including the initial mount
//If a dependency array is provided, the effect will only re-run if any of the values in the array have changed between renders.
//An empty dependency array ([]) ensures the effect runs only once after the initial mount, similar to componentDidMount in class components.


//clean up:
//The callback function passed to useEffect can optionally return another function, known as the cleanup function
//This cleanup function runs before the component unmounts and also before the effect re-runs due to a change in dependencies.
//It is used to clean up resources created by the effect, such as clearing timers, unsubscribing from event listeners, or canceling network requests, preventing memory leaks.


// import { useState, useEffect } from 'react'

// function Timer() {
//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         const intervalID = setInterval(() => {
//             setCount(prevCount => prevCount + 1)
//         }, 1000)

//         //cleanup function
//         return () => {
//             clearInterval(intervalID)
//         }
//     }, []) //// Empty dependency array means this effect runs only once on mount and cleans up on unmount

//     return <h1>I have rendered {count}</h1>

// }


//React hook use syncrhonize a component with an external system
