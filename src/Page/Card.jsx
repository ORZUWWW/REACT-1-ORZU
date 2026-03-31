import React from "react";

export const Card = React.memo(({ onClick, count }) =>{
const memmoizedCount = React. useMemo (() => {
console.log("Calculating memoized value");
return count + 1 ;
}, [count]);
console. log("Child render");
return (
<div>

<p>Memoized Count: {memmoizedCount}</p>
<button onClick={onClick}>Click me</button>;
</div>




);
});
