import React from 'react'

function TransactionList() {
  return (
    <div className='w-full px-3'>
      <h3 className='text-xl font-semibold'>History</h3>
      <div className='border-2 border-gray-400 my-2'></div>
      <ul className=''>
        <li className='text-lg'>
            Cash <span><button>x</button></span>
        </li>
      </ul>
    </div>
  )
}

export default TransactionList