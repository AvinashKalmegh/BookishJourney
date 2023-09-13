import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { BookCard } from "./BookCard";

const Search = ({searcharr}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    console.log(searcharr);
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            
            <ModalBody>
             <BookCard/>
            </ModalBody>
  
            
          </ModalContent>
        </Modal>
      </>
    );
}

export default Search;