import { FaTrash} from "react-icons/fa";

function Listitem({transactions , dltTransactions}) {
  return (
  <>
  <li className="slry">
    <span className={transactions.amount > 0 ? "income":"myexpense"}> <h2 >₹{transactions.amount}</h2></span>
     <h1>{transactions.text}</h1>
   <button className="clr"onClick={()=>dltTransactions(transactions.id)} ><FaTrash/></button>
</li>
  </>
  )
}

export default Listitem
//