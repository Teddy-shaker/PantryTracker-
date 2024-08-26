
import InventoryList from '../components/InventoryList'; 
import AddItem from '../components/AddItem'; 

export default function Home() { 
    return ( 
        <div className='min-h-screen bg-gray-100 p-8'> 
            <AddItem /> 
            <InventoryList /> 
        </div> 
    ); 
}
