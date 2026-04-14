import {
    Container, Heading, Text, Box, VStack,
    Divider, Badge, Flex, Tag, TagLabel, Button, SimpleGrid, Icon
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom'; 
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FaGraduationCap, FaCode, FaTerminal } from 'react-icons/fa';

const Home = () => {
    return (
        <Container maxW="container.md" py={20} w='full'>
   
            <VStack spacing={6} align="flex-start" mb={24}>
                <Box>
                    <Text
                        fontFamily="mono"
                        color="blue.500"
                        fontSize="xs"
                        fontWeight="bold"
                        mb={3}
                        letterSpacing="0.2em"
                    >
                        {`// SOFTWARE ENGINEER STUDENT`}
                    </Text>
                    <Heading
                        size="3xl"
                        fontWeight="black"
                        letterSpacing="tight"
                        color="slate.900"
                        mb={4}
                    >
                        Yoohei Haga<Text as="span" color="blue.500">.</Text>
                    </Heading>
                    <Text
                        fontSize="xl"
                        color="gray.600"
                        fontWeight="medium"
                        lineHeight="tall"
                    >
                        Desenvolvedor focado em <Text as="span" color="orange.400" fontWeight="bold">Back-end</Text> e <Text as="span" color="purple.500" fontWeight="bold">RPA/Automação</Text>. 
                        Atualmente transformando processos complexos em soluções automatizadas.
                    </Text>
                </Box>
            </VStack>

            <Box mb={24}>
                <Flex align="center" mb={10}>
                    <Box w="2px" h="20px" bg="blue.500" mr={4} />
                    <Heading size="xs" textTransform="uppercase" letterSpacing="0.3em" color="gray.400">
                        01. Experiência
                    </Heading>
                </Flex>

                <Box
                    p={8}
                    borderWidth="1px"
                    borderRadius="2xl"
                    bg="white"
                    _hover={{ borderColor: 'blue.200', shadow: 'sm' }}
                    transition="all 0.3s"
                >
                    <Flex justify="space-between" align="start" wrap="wrap" gap={4}>
                        <VStack align="flex-start" spacing={1}>
                            <Heading size="md" color="slate.800">Integrada Cooperativa</Heading>
                            <Text fontWeight="bold" color="blue.600" fontSize="sm" fontFamily="mono">Estágiario TI/ RPA</Text>
                        </VStack>
                        <Badge variant="subtle" colorScheme="gray" px={3} py={1} borderRadius="full">
                            ABR 2025 — PRESENTE
                        </Badge>
                    </Flex>
                    <Text mt={6} color="gray.600" fontSize="md" lineHeight="relaxed">
                        Responsável pelo desenvolvimento de fluxos de automação de alta complexidade e manutenção de sistemas, utlizando de tecnologias como 
                        Python, PostgresSQL, Docker, Java, e React.
                    </Text>
                </Box>
            </Box>


            <Box mb={24}>
                <Flex align="center" mb={10}>
                    <Box w="2px" h="20px" bg="blue.500" mr={4} />
                    <Heading size="xs" textTransform="uppercase" letterSpacing="0.3em" color="gray.400">
                        02. Formação & Stack
                    </Heading>
                </Flex>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    {/* Educação */}
                    <VStack align="flex-start" spacing={4}>
                        <Flex align="center" gap={3}>
                            <Icon as={FaGraduationCap} color="blue.500" />
                            <Text fontWeight="bold" fontSize="sm" color="slate.700">EDUCAÇÃO</Text>
                        </Flex>
                        <Box>
                            <Text fontWeight="bold" color="slate.800">Formando em Engenharia de Software</Text>
                            <Text fontSize="sm" color="gray.500">UniCesumar • Conclusão em 2027</Text>
                        </Box>
                    </VStack>

             
                    <VStack align="flex-start" spacing={4}>
                        <Flex align="center" gap={3}>
                            <Icon as={FaCode} color="blue.500" />
                            <Text fontWeight="bold" fontSize="sm" color="slate.700">CORE STACK</Text>
                        </Flex>
                        <Flex gap={2} flexWrap="wrap">
                            {["Python", "PostgresSQL", "FastAPI", "Docker", "Selenium", "PyAutoGUI"].map(skill => (
                                <Tag key={skill} size="sm" variant="subtle" colorScheme="blue" borderRadius="full">
                                    <TagLabel fontFamily="mono">{skill}</TagLabel>
                                </Tag>
                            ))}
                        </Flex>
                    </VStack>
                </SimpleGrid>
            </Box>

        
            <Divider mb={12} />
            <Flex direction="column" align="center" textAlign="center">
                <Text color="gray.500" mb={6}>
                    Quer ver como eu aplico esses conhecimentos na prática?
                </Text>
                <Button
                    as={NavLink}
                    to="/Projects"
                    size="lg"
                    colorScheme="blue"
                    rightIcon={<ArrowForwardIcon />}
                    variant="outline"
                    px={10}
                    borderRadius="full"
                    _hover={{ bg: 'blue.50', transform: 'translateY(-2px)' }}
                >
                    Explorar Projetos e Automações
                </Button>
            </Flex>
        </Container>
    );
};

export default Home;