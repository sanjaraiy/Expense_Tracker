import React from 'react'

function AddTransaction() {
  return (
    <>
        <h3>Add new transaction</h3>
        <form action="">
            <div>
                <label htmlFor="text">Text</label>
                <input type="text" placeholder='Enter text...' />
            </div>
            <div>
                <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                <input type="number" placeholder='Enter amount...' />
            </div>
        </form>
        <button>Add transaction</button>
    </>
  )
}

export default AddTransaction