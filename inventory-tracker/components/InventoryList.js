
import { useState, useEffect } from 'react'; 
import { db } from '../firebase'; 
import { collection, getDocs } from 'firebase/firestore'; 

export default function InventoryList() { 
    const [items, setItems] = useState([]); 
    
    useEffect(() => { 
        const fetchData = async () => { 
            const querySnapshot = await getDocs(collection(db, 'inventory')); 
            setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))); 
        }; 
        fetchData(); 
    }, []); 
    
    return ( 
        <div className='container mx-auto p-4'> 
            <h1 className='text-2xl font-bold mb-4'>Inventory</h1> 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'> 
                {items.map(item => ( 
                    <div key={item.id} className='border p-4 rounded-lg shadow-md'> 
                        <h2 className='text-xl font-semibold'>{item.name}</h2> 
                        <p>Quantity: {item.quantity}</p> 
                    </div> 
                ))} 
            </div> 
        </div> 
    ); 
}
