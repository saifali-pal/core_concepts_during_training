//usememo caches the return value of a function, usecallback caches the function definition itself

// useMemo is used when you have an expensive calculation you want to avoid on every render. useCallback is used to cache a function to avoid re-creating it on every re-render.


// The useCallback hook in React is a built-in hook that allows you to memoize a callback function. This means it prevents the function from being recreated on every re-render of its parent component, unless its dependencies change. 

