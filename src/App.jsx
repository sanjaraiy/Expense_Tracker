import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

function App() {
 return (
    <div className='flex flex-col justify-center items-center bg-gray-300 w-[30%] mx-auto my-[8%]'>
      <Header></Header>
      <div className='flex flex-col justify-start'>
        <Balance></Balance>
      </div>
      <IncomeExpenses></IncomeExpenses>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
    </div>
  )
}

export default App
