import React from "react";

const expensiveCalculate = (iteration: number): number => {
  const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let count: number = 0;
  while (iteration--) {
    count += array.reduce((a: number, b: number) => (a + b));
  }

  return count;
}

const ComputationHeavyComponent: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);

  console.log(value);
  
  return (
    <>
      <div>{value}</div>
      <button onClick={() => setValue(expensiveCalculate(1_000_000_000))}>EXPENSIVE</button>
    </>
  )
}

export default ComputationHeavyComponent;