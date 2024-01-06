import React from 'react'

function Amount({transactions}) {

const totalIncome = transactions.filter(item => item.amount > 0).reduce((p,c) =>{
 return p + c.amount
},0)

const totalExpense = transactions.filter(item => item.amount < 0).reduce((p,c) =>{
  return p + c.amount
 },0)

 const NO_Off_Transactions = transactions.length

 
 
  return (
    <div className="hero-div">
    <div className="current-two">
      <h3>CURRENT Income</h3>
      <h1>₹{totalIncome}</h1>
    </div>

    <div className="expense">
      <h3>CURRENT EXPENSE</h3>
      <h1>₹{totalExpense}</h1>
    </div>

    
    <div className="total">
      <h3> Number Of Transictions </h3>
      <h1>{NO_Off_Transactions}</h1>
    </div>
  </div>
  )
}

export default Amount
