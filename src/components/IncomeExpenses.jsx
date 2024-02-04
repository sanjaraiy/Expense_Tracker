import React from 'react'

function IncomeExpenses() {
  return (
    <div className='shadow-xl bg-white w-[80%] flex justify-evenly my-4 py-3'>
        <div className='text-xl font-semibold'>
            <h4>INCOME</h4>
            <p className='text-green-400'>+$0.00</p>
        </div>
        <div className='border-2 h-12 my-auto'></div>
        <div className='text-xl font-semibold'>
            <h4>EXPENSE</h4>
            <p className='text-red-700'>-$0.00</p>
        </div>
    </div>
  )
}

export default IncomeExpenses