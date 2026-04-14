import {
  Box,
  IconButton,
  Button,
  Stack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>

      <Box 
        position="fixed" 
        top="20px" 
        right="20px" 
        zIndex={9999}
      >
        <IconButton
        boxShadow="0 4px 12px rgba(0,0,0,0.15)"
          aria-label="Open Menu"
          size="lg"
          variant="solid" 
          colorScheme="gray" 
          bg="white"
          shadow="md" 
          _hover={{ bg: 'gray.50', shadow: 'lg' }}
          icon={<HiMenuAlt3 size="28px" />}
          onClick={onOpen}
          borderRadius="full" 
        />
      </Box>

   
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay backdropFilter="blur(4px)" />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" fontSize="sm" color="gray.500">
            MENU
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing={4} mt={8}>
              <Button 
                as={NavLink} 
                to="/" 
                variant="ghost" 
                justifyContent="flex-start" 
                onClick={onClose}
                _activeLink={{ color: "blue.500", bg: "blue.50" }} 
              >
                Home
              </Button>
              <Button 
                as={NavLink} 
                to="/Projects" 
                variant="ghost" 
                justifyContent="flex-start" 
                onClick={onClose}
                _activeLink={{ color: "blue.500", bg: "blue.50" }}
              >
                Projetos
              </Button>
              
              <Box pt={10}>
                 <Text fontSize="xs" fontWeight="bold" color="gray.400" mb={4}>CONTATO</Text>
                 <Stack spacing={3}>
                    <Button as="a" href="#" variant="link" size="sm" color="gray.600" justifyContent="flex-start">LinkedIn</Button>
                    <Button as="a" href="#" variant="link" size="sm" color="gray.600" justifyContent="flex-start">GitHub</Button>
                 </Stack>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;