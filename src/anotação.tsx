// import { createContext, useContext, useState } from 'react'

// const CyclesContext = createContext({} as any)

// export function Countdown() {
//   const { activeCycle, setActiveCycle } = useContext(CyclesContext)

//   const handleActiveCycle = () => {
//     setActiveCycle(activeCycle + 1)
//   }
//   return (
//     <h1>
//       <button onClick={handleActiveCycle}>Contador</button>
//       Countdown :{activeCycle}
//     </h1>
//   )
// }
// export function NewCycleForm() {
//   const { activeCycle } = useContext(CyclesContext)
//   return <h1>NewCycleForm: {activeCycle}</h1>
// }

// export function Home() {
//   const [activeCycle, setActiveCycle] = useState(0)
//   return (
//     <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
//       <div>
//         <NewCycleForm />
//         <Countdown />
//       </div>
//     </CyclesContext.Provider>
//   )
// }
