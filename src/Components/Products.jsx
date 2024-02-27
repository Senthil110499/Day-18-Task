import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Products = ({setId}) => {
  const [products, setProducts] = useState([])
  const[deleteData,setDeleteData]=useState([])
    const navigate=useNavigate()
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios.get("https://65db438b3ea883a152916b63.mockapi.io/products")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
      });
    };
    const handleEdit = (id) => {
        setId(id)
        navigate(`/edit/${id}`)
  }
  const handleDelete = async(id) => {
    await axios.delete(`https://65db438b3ea883a152916b63.mockapi.io/products/${id}`)
      .then(res => setDeleteData(res.data))
    .catch((err)=>console.log(err))
  }
    return (
      <div>
        <div className="table-responsive">
          <table className="table align-middle table-success table table-bordered border-primary table-hover">
            <thead>
              <tr >
                <th scope="col">id</th>
                <th scope="col">product_name</th>
                <th scope="col">product_price</th>
                <th scope="col">product_description</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.product_name}</td>
                            <td>$ {item.product_price}/ kg</td>
                            <td>{item.product_description}</td>
                            <td><button onClick={()=>{handleEdit(item.id)}} className='bg-info'>Edit</button></td>
                            <td><button onClick={()=>{handleDelete(item.id)}} className="bg-danger">Delete</button></td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <button onClick={() => {navigate('/create')}} className='bg-success'>Create</button>
      </div>
    );
};

export default Products;