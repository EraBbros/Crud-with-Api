import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const Home = () => {
  
  const [dataUser, setDataUser] = useState([])
  const navigate = useNavigate()

  const UserEdit = (userid) => {
    navigate(`/user/edit/${userid}`);
  };

  const UserDelete = (id) => {
    if (window.confirm('Do you want to remove?')) {
      axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`, {})
      .then(res => {
          alert('Removed successfully.')
          setDataUser(dataUser.filter(item => item.id !== id))
      }).catch(error => {
          console.log(error.message)
      })
    }
  }

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setDataUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsersData();
  }, []);

  return (
    <div className='container mt-5'>
      <div className='card'>
        <div className='card-title'>
          <h2 className='mt-3'>User List</h2>
        </div>
        <div className='card-body'>
          <div>
            <Link to="user/create" className='btn btn-success'>Add User</Link>
          </div>
          <table className='table table-bordered'>
            <thead className='bg-dark text-white'>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Username</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {dataUser.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <button onClick={() => {UserEdit(item.id)}} className='btn btn-success edit'>Edit</button>
                    <button onClick={() => {UserDelete(item.id)}} className='btn btn-danger delete'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}