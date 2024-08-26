
import { useState } from 'react'; 
import { db } from '../firebase'; 
import { collection, addDoc } from 'firebase/firestore'; 

export default function AddItem() { 
    const [name, setName] = useState(''); 
    const [quantity, setQuantity] = useState(''); 

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        if (name && quantity) { 
            await addDoc(collection(db, 'inventory'), { 
                name, 
                quantity: parseInt(quantity), 
            }); 
            setName(''); 
            setQuantity(''); 
        } 
    }; 
    
    return ( 
        <form onSubmit={handleSubmit} className='p-4 border rounded-lg shadow-md max-w-md mx-auto'> 
            <h1 className='text-2xl font-bold mb-4'>Add New Item</h1> 
            <input 
                type='text' 
                placeholder='Item Name' 
                className='border p-2 rounded w-full mb-4' 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            /> 
            <input 
                type='number' 
                placeholder='Quantity' 
                className='border p-2 rounded w-full mb-4' 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)} 
            /> 
            <button type='submit' className='bg-blue-500 text-white p-2 rounded'> 
                Add Item 
            </button> 
        </form> 
    ); 
}
