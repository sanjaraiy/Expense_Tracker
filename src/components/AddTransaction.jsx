import React from 'react'

function AddTransaction() {
  return (
    <div className='mt-3 w-[100%] flex flex-col justify-center'>
        <h3 className='text-xl font-semibold pl-2'>Add new transaction</h3>
        <div className='border-2 border-gray-400 my-2 w-[93%] mx-auto'></div>
        <form action="">
            <div className='flex flex-col w-[93%] mx-auto'>
                <label className='text-lg font-semibold my-2' htmlFor="text">Text</label>
                <input className='p-1 mb-3' type="text" placeholder='Enter text...' />
            </div>
            <div className='flex flex-col w-[93%] mx-auto'>
                <label className='text-md font-semibold mt-5 pl-2 mb-1' htmlFor="amount">Amount <br/>  <span>(negative - expense, positive - income)</span></label>
                <input className='p-1' type="number" placeholder='Enter amount...' />
            </div>
        </form>
       
           <button className='my-3  mx-auto w-[90%] bg-violet-500 text-white text-xl font-semibold py-1 hover:bg-violet-600 rounded-sm'>Add transaction</button>
        
    </div>
  )
}

export default AddTransaction