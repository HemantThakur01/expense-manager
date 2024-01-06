import Navbar from "./Components/Navbar"
import Mainsection from "./Components/Mainsection"
import Amount from "./Components/Amount"
import Listgroup from "./Components/Listgroup"
import { useState } from "react"

function App() {

const[transactions , setTransactions] = useState([
  // {
  //   id : 1,
  //   text : "Salary",
  //   amount : 10000
  // },
  // {
  //   id : 2,
  //   text : "Rent",
  //   amount : -1000
  // }
])

//save transactions 

const saveTransactions = (text , amount) =>{
  const newTransactions = {
    id : crypto.randomUUID(),
    amount : parseInt(amount),
    text : text
}

setTransactions([...transactions , newTransactions])
}
const dltTransactions = (id) => {
  setTransactions(transactions.filter(item => item.id !== id))
}

// const totalTransaction = (value) =>{

// }
  return (
    <>
  <Navbar/>
  <Mainsection transactions={transactions} saveTransactions={saveTransactions}/>
  <Amount transactions={transactions} />
  <Listgroup transactions={transactions} dltTransactions={dltTransactions}/>
    </>
  );
}

export default App;
