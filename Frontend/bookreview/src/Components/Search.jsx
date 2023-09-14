import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { BookCard } from "./BookCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = ({searchInput}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const books = useSelector((store) => store.bookReducer.books);


    const [searcharr, setSearchArr] = useState([]);
    const handleSearch = ()=>{
    
     let data = books.filter((el)=>{
       return el.title.toLowerCase().includes(searchInput.toLocaleLowerCase());
     })
     // arr.push(data)
     setSearchArr(data);
     
   }
   useEffect(()=>{
    handleSearch()
   },[searchInput]);
  //  console.log(searcharr);
    return (
      <>
        <Button onClick={onOpen} size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">Search</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            
            <ModalBody>
              {searcharr.length > 0 && searcharr.map((el)=>{

                return <Link to={`/books/${el._id}`}><Text fontWeight={500}  cursor={"pointer"} mt={2}>{el.title}</Text></Link>
              })}
            </ModalBody>
  
            
          </ModalContent>
        </Modal>
      </>
    );
}

export default Search;