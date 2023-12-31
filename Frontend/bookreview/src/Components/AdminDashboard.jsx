import React from 'react'
import styled from 'styled-components'

import { RiHome7Fill } from "react-icons/ri";
import Chart from './Chart';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';


const AdminDashboard = () => {
  const TotalNumberOfProducts = useSelector((store) => store.bookReducer.books.length);

  // const TotalNumberOfProducts = useSelector((store)=>{
  //   return store.adminProduct.books.length
  // })
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getProduct)
  // },[TotalNumberOfProducts])

  const navigate = useNavigate()
  const goToProduct = () => {
    navigate("/AllProducts")
    // alert("working")
  }

  
 
  return (
    <Maindiv>
      <h2 style={{fontSize:"25px",display:"flex",paddingLeft:"1rem"}}> <RiHome7Fill />Dashboard </h2>
      <div style={{ padding: "2rem" }}>
        <div style={{ display: "flex" }}>
          <DetailsDiv style={{ width: "60%" }}>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/6815/6815043.png" alt="" />
              <h2>Orders</h2>
              <h3>231</h3>
            </div>
            <div onClick={goToProduct}>
              <img src="https://cdn-icons-png.flaticon.com/512/2875/2875878.png" alt="" />
              <h2>Products</h2>
              <h3>{TotalNumberOfProducts}</h3>
            </div>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/7245/7245051.png" alt="" />
              <h2>Delivered</h2>
              <h3>65</h3>
            </div>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/3500/3500899.png" alt="" />
              <h2>Cancelled</h2>
              <h3>12</h3>
            </div>
          </DetailsDiv>
          <ChartDiv style={{ width: "40%" }}>
            <Chart />
          </ChartDiv>
        </div>
      </div>
    </Maindiv>
  )
}

export default AdminDashboard

const Maindiv = styled.div`
    width: 95%;
    height: auto;
    margin: auto;
    margin-top:2rem;
    /* background-color: rgba(255, 255, 255, .15);   */
    background-color: #def8e3;
    border-radius:2rem;
    & > h2 {
      text-align: left;
      margin-left:2rem;
      padding-top:2rem;
    }
    
`
const DetailsDiv = styled.div`
  display: grid;
  grid-template-columns:repeat(2,1fr);
  grid-template-rows:200px 200px;
  gap: 2rem;
  
  & img {
    width: 20%;
    margin: auto;
  }& div {
    
    cursor:pointer;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #c0fcc0;
  }& div:hover {
    cursor:pointer;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #b4fcb4;
  }
  & h2 {
    color: grey;
    margin-top:1rem;
    font-size:27px;
  }& h3 {
    color:#000080;
    font-size:25px;
  }& :nth-child(1){
      
    }
`

const ChartDiv = styled.div`
  display: grid;
  padding: 1rem;
  margin-top:15rem;
  margin: auto;
  padding: 1rem;
  border-radius:2rem;
  margin-left:1rem;
  background-color: #c5f8f5;

`