import axios from 'axios';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react'

const ApiCallUsinguseEffect = () => {

  let[posts,setPost]=useState([]);
  
    useEffect( ()=>{
     
        const getPostData = async()=>{
            let postResponse
            try{

                postResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
                const jsonData = await postResponse.data();
                // if (Array.isArray(jsonData)) {
                  setPost(jsonData);
                // } else if (typeof jsonData === 'object') {
                  // If jsonData is an object, convert it to an array of objects
                  // setPost(Object.values(jsonData));
                // }
            }catch(error){
                console.log(error)
            }
           setPost(postResponse.data)
            console.log(postResponse.data)
        }


        getPostData();

    }, [])

  return (
    <>
      <h2> API Integration using useEffect </h2>
      {/* <ul>
{posts.map(item =>(
  <li >
    {item.userId} - {item.title} - {item.body}
  </li>
))}
      </ul> */}
      <div className="container">
    <h3> Users Data</h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>UserName</th>
          <th>email</th>
          <th>Address(Street)</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
      {posts.map((post) => (

            <tr >
                <td>{post.id}</td>
                <td> {post.name} </td>
                <td> {post.username} </td>
                <td> {post.email}</td>
                <td> {post.address.street}</td>
                <td> {post.phone}</td>
            </tr>      
        ))}
      </tbody>
    </Table>
    </div>
      
    </>
  )
}

export default ApiCallUsinguseEffect;
