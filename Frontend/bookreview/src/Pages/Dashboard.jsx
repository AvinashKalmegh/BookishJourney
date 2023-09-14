import { DeleteIcon } from '@chakra-ui/icons';
import { Box , Button, Flex, FormControl, Heading, Input, Show, Text} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AdminDashboard from '../Components/AdminDashboard';



const Dashboard = () => {
  const [review, setReview] = useState([]);

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [desc, setDesc] = useState("");

  const [book, setBook] = useState([]);

  const getBookData = async()=>{
    try {
      
   await axios
    .get(`http://localhost:3500/api/book/`)
    .then((res) => {
       setBook(res.data.result);
    })
    .catch((err) => {
       console.log(err);
    });
    } catch (error) {
      console.log(error);
    }
  }

  const getReviewData = async()=>{
    try {
       axios.get(`http://localhost:3500/api/review`)
      .then((res)=>{
        setReview(res.data.result);
      })
    } catch (error) {
      console.log(error);
    }
  }

  // let revId = review._id;
  const deleteReviewData = async(id)=>{
    try {
       axios.delete(`http://localhost:3500/api/review/deleteReview/${id}`)
      .then((res)=>{
        alert("Successfully Deleted");
        window.location.reload();
      })
      .catch((err)=>{
        console.log(err);
      })
    } catch (error) {
      console.log(error);
    }
  }
  
  const addBookData = async()=>{
    try {
      if(url.length<1 || title.length<1 || desc.length<1 || author.length<1){
        alert("Please Fill All The Fields !!!")
      }
      else{
        const bookObj={
          url,
          author,
          title,
          desc
  
        }
         axios.post(`http://localhost:3500/api/book/addBook`,bookObj)
        .then((res)=>{
          alert("Successfully Added The Book");
          setUrl("");
          setTitle("");
          setAuthor("");
          setDesc("");
        })
        .catch((err)=>{
          console.log(err);
        })
      }
      
    } catch (error) {
      console.log(error);
    }
  
  }

  const deleteBookData = async(Bookid)=>{
    try {
       axios.delete(`http://localhost:3500/api/book/${Bookid}`)
      .then((res)=>{
        alert("Successfully Deleted");
        window.location.reload();
      })
      .catch((err)=>{
        console.log(err);
      })
    } catch (error) {
      console.log(error);
    }
  }
  

    // console.log(review);
    useEffect(()=>{
      getReviewData();
      getBookData();
    },[]);

    let sum = 0;

    for(let i=0;i<review.length;i++){

      sum = sum + review[i].rating;
    }
     let total = review.length;
    let avgRating =  sum/total;

    // console.log( review);

    let numOfRev =0;
    let currentDate = new Date().getDate();
    // console.log(currentDate);
    for(let i=0;i<review.length;i++){
      if(review[i].createdAt == currentDate ){
        numOfRev++;
      }
    }
// console.log(new Date().getDate());

  return (
    <Box p={4} mt={"100px"} pb={"200px"}>
      {/* <Text fontSize="4xl" fontWeight="bold" mb={4}>
        Dashboard
      </Text> */}
      <Show above={"sm"}>

     <AdminDashboard/>
      </Show>
      <Flex  m={"auto"} mt={{base:"0px",md:"50px",lg:"50px"}} flexDirection={{base:"column", md:"column",lg:"row"}}  w={{base:"100%", md:"70%",lg:"51%"}}  justifyContent={{base:"center",lg:"space-around"}} alignItems={{base:"center",lg:"baseline"}}>
      <Flex gap={2} flexDirection={{base:"column", md:"column",lg:"row"}} justifyContent={{base:"center",lg:"space-around"}} alignItems={{base:"center",lg:"baseline"}} >
      <Box boxShadow="rgba(168, 242, 210, 0.8) 0px 30px 60px -12px inset,rgba(168, 242, 210, 0.8) 0px 18px 36px -18px inset" width={"40px"} height={"200px"} border={"3px solid rgba(168, 242, 210, 0.8)"} ></Box>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
          Reviews Added Per Day : {numOfRev}
        </Text>
      </Flex>


        <Flex flexDirection={{base:"column", md:"column",lg:"row"}}  gap={2} justifyContent={"space-around"} alignItems={{base:"center",lg:"baseline"}} >
      <Box boxShadow="rgba(168, 242, 210, 0.8) 0px 30px 60px -12px inset,rgba(168, 242, 210, 0.8) 0px 18px 36px -18px inset" width={"40px"} height={"100px"} border={"3px solid rgba(168, 242, 210, 0.8)"} ></Box>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
          Average Ratings : {avgRating.toFixed(2)}
        </Text>
        </Flex>
      </Flex>
      
      
      <Box w={{base:"100%",lg:"80%"}} m={"auto"} mt={8} border={"2px solid rgba(168, 242, 210, 0.8)"}  p={4} boxShadow="md" borderRadius="md">
         
        <Box 
         maxH="500px" 
         overflowY="auto" 
         p="2" 
         m={"auto"}
         mt={19}
         h={"500px"} w={{base:"100%",lg:"60%"}}>
            <Heading mb={4}>All Book's Reviews</Heading>
          {review.length > 0 && review.map((el)=>{
            return (
              <Box  w={{base:"100%",lg:"90%"}} fontSize={20} m={"auto"} mt={3}  border={"0px solid blue"}>
               <Text p={4} w={"100%"} textAlign={"left"} fontFamily={"Fredoka"}  border={"2px solid rgba(168, 242, 210, 0.8)"} boxShadow={"rgba(168, 242, 210, 0.8) 2.4px 2.4px 3.2px"}>
                  <Flex justify={"space-between"}>
                  <Flex justifyContent={"space-between"} w={{base:"100%",lg:"70%"}}>
                      <Text>{el.comment}</Text>
                      <Text>Ratings: {el.rating}</Text>
                    </Flex>
                      <Button onClick={()=>deleteReviewData(el._id)}><DeleteIcon color={"red"}  /></Button>

                  </Flex>
               </Text>
                </Box>
                )
            })}
        </Box>
      </Box>

      <Box w={{base:"100%",lg:"70%"}} m={"auto"} mt={10} border={"2px solid rgba(168, 242, 210, 0.8)"}  p={4} boxShadow="md" borderRadius="md">
      <Heading mb={4} >Add Books</Heading>
      <Box w={{base:"100%",lg:"60%"}} m={"auto"} >
        <FormControl>
        <Input mt={2} border={"2px solid rgba(168, 242, 210, 0.8)"} type='url' placeholder='Enter Image Url' value={url} onChange={(e)=>setUrl(e.target.value)} />
      <Input mt={2} border={"2px solid rgba(168, 242, 210, 0.8)"} type='text' placeholder='Enter Book Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
      <Input mt={2} border={"2px solid rgba(168, 242, 210, 0.8)"} type='text' placeholder='Enter Author Name' value={author} onChange={(e)=>setAuthor(e.target.value)}/>
      <Input mt={2} border={"2px solid rgba(168, 242, 210, 0.8)"} type='text' placeholder='Enter image Description' value={desc} onChange={(e)=>setDesc(e.target.value)} />
      <Input cursor={"pointer"} fontWeight={"500"}  type='button' value={"ADD BOOK"}  mt={4} backgroundColor={"rgba(117, 250, 181, 0.8)"} onClick={addBookData}></Input>
        </FormControl>
      
      </Box>
      
      </Box>

      <Box w={{base:"100%",lg:"70%"}} m={"auto"} mt={10} border={"2px solid rgba(168, 242, 210, 0.8)"}  p={4} boxShadow="md" borderRadius="md">
      <Heading mb={4} >List of Books</Heading>
      {book.length > 0 && book.map((el,index)=>{
        return <Box mt={5} w={{base:"100%",lg:"70%"}} m={"auto"} border={"2px solid rgba(168, 242, 210, 0.8)"} >
          
          <Flex p={2} alignItems={"center"} justifyContent={"space-between"} textAlign={"left"}>
            <Text fontFamily={"Fredoka"} fontWeight={500} >{index+1}.</Text>
          <Text fontFamily={"Fredoka"} fontWeight={500}>{el.title}</Text>
          <Button onClick={()=>deleteBookData(el._id)}><DeleteIcon color={"red"} /></Button>
         
          </Flex>
          
        
      
        </Box>
      })}
      
      
      </Box>
      
      
          </Box>
  );
}

export default Dashboard;