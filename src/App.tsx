import React from "react"
import ComputationHeavyComponent
  from "./react-compiler/compiler-test.jsx.tsx";



const App: React.FC = () => {
  
  return (
    <>
      <h1>MEMORA CARDS</h1>
      <ComputationHeavyComponent/>
    </>
  )
}

export default App