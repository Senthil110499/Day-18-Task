import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = ({ id }) => {
    const navigate=useNavigate()
    const [editData, setEditData] = useState({
        id: '',
        product_name: '',
        product_price: '',
        product_description: ''
    })
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        await axios.put(`https://65db438b3ea883a152916b63.mockapi.io/products/${id}`)
            .then(res => setEditData(res.data))
            .catch((err) => console.log(err))
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setEditData((preData) => ({
          ...preData,[name]:value
        }))
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        await axios.put(`https://65db438b3ea883a152916b63.mockapi.io/products/${id}`, editData)
        .catch((err)=>console.log(err))
        navigate('/products')
    }
    return (
        <div>
            <div className="card w-50" >
            <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div><label>id : <input type='text' name='id' value={editData.id} onChange={handleChange} /></label></div><br/>
                <div><label>product_name : <input type='text' name='product_name' value={editData.product_name} onChange={handleChange} /></label></div><br/>
                <div><label>product_price : <input type='text' name='product_price' value={editData.product_price} onChange={handleChange} /></label></div><br/>
                <div><label>product_description : <input type='text' name='product_description' value={editData.product_description} onChange={handleChange} /></label></div><br/>
                <button type='submit' className='bg-success'>Update</button>
            </form>
            </div>
            </div>
        </div>
    );
};

export default Edit;