import { useState } from 'react';
import {
    Box, Flex, Text, Heading, Badge, VStack, HStack, Button,
    useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalCloseButton, ModalBody, ModalFooter, AspectRatio, Icon, Image
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FaGithub, FaExclamationTriangle } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


const carouselStyles = {
    ".carousel .slide img": {
        maxHeight: "400px",
        objectFit: "contain", 
        borderRadius: "8px"
    },
    ".carousel .control-dots .dot": {
        background: "#3182ce", 
    }
};

export default function Projectslist({ title, projects }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenProject = (project) => {
        setSelectedProject(project);
        onOpen();
    };

    if (!projects || projects.length === 0) return null;

    return (
        <Box w="full">
            <Flex align="center" mb={6}>
                <Box w="2px" h="20px" bg="blue.500" mr={4} />
                <Heading size="md" color="slate.800" textTransform="uppercase" letterSpacing="wider">
                    {title}
                </Heading>
            </Flex>

            <VStack spacing={0} align="stretch" borderTopWidth="1px" borderColor="gray.200">
                {projects.map((project) => (
                    <Flex key={project.id} p={6} borderBottomWidth="1px" borderColor="gray.200" align="center" justify="space-between" _hover={{ bg: 'gray.50', cursor: 'pointer', pl: 8 }} transition="all 0.2s" onClick={() => handleOpenProject(project)} role="group">
                        <Flex align="center" gap={8} w="full">
                            <Text fontFamily="mono" color="gray.400" fontSize="sm" w="12">{project.year}</Text>
                            <Box flex="1">
                                <Heading size="md" color="slate.800" _groupHover={{ color: 'blue.500' }} transition="color 0.2s">{project.title}</Heading>
                                <Text fontSize="sm" color="gray.500" mt={1}>{project.type}</Text>
                            </Box>
                            <HStack display={{ base: 'none', md: 'flex' }} spacing={2} flex="1">
                                {project.tags.map(tag => (
                                    <Badge key={tag} colorScheme="blue" variant="subtle" fontFamily="mono" textTransform="lowercase">{tag}</Badge>
                                ))}
                            </HStack>
                        </Flex>
                        <Icon as={ArrowForwardIcon} color="gray.300" boxSize={6} _groupHover={{ color: 'blue.500', transform: 'translateX(4px)' }} transition="all 0.2s" />
                    </Flex>
                ))}
            </VStack>

            <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
                <ModalOverlay backdropFilter="blur(4px)" />
                <ModalContent borderRadius="xl" overflow="hidden">
                    {selectedProject && (
                        <>
                            <ModalHeader pb={0}>
                                <Badge mb={2} colorScheme="purple">{selectedProject.type}</Badge>
                                <Heading size="lg" color="slate.800">{selectedProject.title}</Heading>
                            </ModalHeader>
                            <ModalCloseButton />
                            
                            <ModalBody pt={6} pb={8}>
                                <Box borderRadius="lg" overflow="hidden" shadow="md" mb={6} bg="gray.900">
                                    
    
                                    {selectedProject.videoUrl ? (
                                        <AspectRatio ratio={16 / 9}>
                                            <iframe title={selectedProject.title} src={selectedProject.videoUrl} allowFullScreen />
                                        </AspectRatio>
                                    ) : 
                                  
                                    (selectedProject.images && selectedProject.images.length > 0) ? (
                                        <Box sx={carouselStyles}>
                                            <Carousel 
                                                showArrows={true} 
                                                showStatus={false} 
                                                showThumbs={false} 
                                                infiniteLoop={true} 
                                                autoPlay={true}
                                                interval={5000}
                                            >
                                                {selectedProject.images.map((imgUrl, index) => (
                                                    <Image 
                                                        key={index} 
                                                        src={imgUrl} 
                                                        alt={`Screenshot ${index + 1} do projeto ${selectedProject.title}`} 
                                                    />
                                                ))}
                                            </Carousel>
                                        </Box>
                                    ) : 
                                    
                        
                                    (
                                        <Flex justify="center" align="center" h="250px" direction="column" gap={3}>
                                            <Icon as={FaExclamationTriangle} color="yellow.400" boxSize={10} />
                                            <Text color="gray.400" fontSize="sm">
                                                Visualização indisponível por motivos de confidencialidade corporativa.
                                            </Text>
                                        </Flex>
                                    )}
                                </Box>

                                <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                                    {selectedProject.description}
                                </Text>

                                <HStack mt={6} spacing={3} flexWrap="wrap">
                                    {selectedProject.tags.map(tag => (
                                        <Badge key={tag} colorScheme="gray" variant="outline" p={1.5} borderRadius="md">
                                            {tag}
                                        </Badge>
                                    ))}
                                </HStack>
                            </ModalBody>

                            <ModalFooter borderTopWidth="1px" borderColor="gray.100" bg="gray.50">
            
                                {selectedProject.githubUrl !== "#" && (
                                    <Button as="a" href={selectedProject.githubUrl} target="_blank" leftIcon={<FaGithub />} colorScheme="gray" variant="solid">
                                        Ver Código Fonte
                                    </Button>
                                )}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </Box>
    );
}