import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate=useNavigate()
    const [createData, setCreateData] = useState({
        id: '',
        product_name: '',
        product_price: '',
        product_description: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setCreateData((preData) => ({
          ...preData,[name]:value
        }))
    }
     const handleSubmit = async(e) => {
        e.preventDefault()
        await axios.post('https://65db438b3ea883a152916b63.mockapi.io/products', createData)
        .catch((err)=>console.log(err))
        navigate('/products')
    }
    return (
        <div>
            <div className="card w-50 " >
            <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div><label>id : <input type='text' name='id' value={createData.id} onChange={handleChange} /></label></div><br/>
                <div><label>product_name : <input type='text' name='product_name' value={createData.product_name} onChange={handleChange} /></label></div><br/>
                <div><label>product_price : <input type='text' name='product_price' value={createData.product_price} onChange={handleChange} /></label></div><br/>
                <div><label>product_description : <input type='text' name='product_description' value={createData.product_description} onChange={handleChange} /></label></div><br/>
                <button type='submit' className='bg-success'>Create</button>
            </form>
            </div>
            </div>
        </div>
    );
};

export default Create;