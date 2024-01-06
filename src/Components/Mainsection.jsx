import React, { useState } from 'react'

function Mainsection({ transactions, saveTransactions }) {

  const [text, setText] = useState("")
  const [amount, setAmount] = useState("")

  const balance = transactions.reduce((p, c) => {
    return p + c.amount
  }, 0)



  const handleSubmit = (e) => {
    e.preventDefault()
    saveTransactions(text, amount)
    setAmount("")
    setText("")

  }

  return (
    <div className="main-div">
      <div className="current">
        <h3>CURRENT BALANCE</h3>
        <h1>₹{balance}</h1>
      </div>
      <div className="form-div ">
        <form onSubmit={(e) => handleSubmit(e)} >
          <div className="mb-3">
            <input value={text} type="text" className="form-control rounded-0 " placeholder="Enter transactions" onChange={(e) => setText(e.target.value)} />
          </div>
          <div className="mb-4">
            <input value={amount} type="number" className="form-control rounded-0 " placeholder="Enter Amount" id='number' onChange={(e) => setAmount(e.target.value)} />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">Save Transactions</button>
        </form>
      </div>

    </div>
  )
}

export default Mainsection


