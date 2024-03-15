
import './App.css'
import Things from './components/Things'


function App() {


  return (
    <>
   <div className="w-[1100px] mx-auto ">
    
   <div className="flex justify-between ">
        <div className="w-2/3"> shoping cards 
<Things></Things>
        </div>
        <div className="w-1/3"> carts

        </div>
      </div>
   </div>
    </>
  )
}

export default App
