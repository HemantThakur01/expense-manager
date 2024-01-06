import React from 'react'
import Listitem from './Listitem'

function Listgroup({transactions , dltTransactions}) {
  return ( 
    <ul className="listgroup">
   {
transactions.map(transactions => <Listitem key = {transactions.id} transactions={transactions} dltTransactions={dltTransactions}/>)
}
</ul>
  )
}

export default Listgroup
