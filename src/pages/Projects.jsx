import Projectslist from '../components/ProjectsList';
import jsonData from '../data/projectsData.json';
import {
    Container, Heading, Text, Box, VStack,
} from '@chakra-ui/react';


export default function Projects() {
    return (
        <Box w="full" maxW="container.lg" mx="auto" py={8}>
            <VStack spacing={10} align="stretch">
                <Heading size="2xl" color="slate.800" textTransform="uppercase" letterSpacing="wider" mb={2}>
                    Projetos
                </Heading>
                
                <Projectslist 
                    title="Trabalho" 
                    projects={jsonData.Projects.Works} 
                />
                <Projectslist 
                    title="Estudos e Projetos Pessoais" 
                    projects={jsonData.Projects.MyProjects} 
                />

            </VStack>   
        </Box>
    );
}