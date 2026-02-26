import { useState } from 'react';
import { 
  Box, Container, Grid, GridItem, Heading, Text, Tag, Flex, Button, 
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter,
  useDisclosure, Image, VStack, HStack, Icon, Badge, Drawer, DrawerBody, DrawerContent, DrawerCloseButton
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaLayerGroup } from 'react-icons/fa';

// --- IMPORT DATA DARI FILE TERPISAH ---
import { projectsData } from '../data/projects';

const MotionGridItem = motion(GridItem);
const MotionBox = motion(Box);

// --- COMPONENT KECIL: CARD PROJECT ---
const ProjectCard = ({ project, onClick, isLarge = false }) => (
  <MotionGridItem
    colSpan={{ base: 1, md: isLarge ? 2 : 1 }}
    rowSpan={{ base: 1, md: isLarge ? 2 : 1 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
    borderRadius="2xl"
    overflow="hidden"
    position="relative"
    bg="gray.900"
    border="1px solid"
    borderColor="whiteAlpha.200"
    role="group"
    cursor="pointer"
    onClick={() => onClick(project)}
    h="full"
    minH={isLarge ? "400px" : "250px"}
  >
    {/* Background Image */}
    <Box
      position="absolute"
      top="0"
      left="0"
      w="100%"
      h="100%"
      bgImage={`url(${project.image})`}
      bgSize="cover"
      bgPos="center"
      opacity="0.6"
      transition="transform 0.5s ease"
      _groupHover={{ transform: 'scale(1.05)', opacity: 0.4 }}
    />
    
    {/* Content Overlay */}
    <Flex
      direction="column"
      justify="flex-end"
      h="100%"
      p={6}
      position="relative"
      zIndex="1"
      bgGradient="linear(to-t, gray.900 10%, transparent 90%)"
    >
      <Flex justify="space-between" align="center" mb={2}>
         <Badge colorScheme="purple" fontSize="xs">{project.category}</Badge>
         <Icon as={FaArrowRight} color="white" opacity={0} transform="translateX(-10px)" _groupHover={{ opacity: 1, transform: "translateX(0)" }} transition="all 0.3s" />
      </Flex>
      
      <Heading size={isLarge ? "xl" : "md"} mb={2} color="white" lineHeight="tall">
        {project.title}
      </Heading>
      
      <Text fontSize="sm" color="gray.300" noOfLines={2}>
        {project.desc}
      </Text>

      <Flex gap={2} mt={3} flexWrap="wrap">
        {project.tech.slice(0, 3).map((t) => (
             <Tag key={t} size="sm" variant="subtle" colorScheme="whiteAlpha">{t}</Tag>
        ))}
      </Flex>
    </Flex>
  </MotionGridItem>
);

// --- COMPONENT UTAMA: PROJECTS ---
const Projects = () => {
  // State Management
  const { isOpen, onOpen, onClose } = useDisclosure(); // Untuk Modal Detail
  const { 
    isOpen: isDrawerOpen, 
    onOpen: onDrawerOpen, 
    onClose: onDrawerClose 
  } = useDisclosure(); // Untuk Drawer All Projects
  
  const [selectedProject, setSelectedProject] = useState(null);

  // Event Handlers
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  // Logic: Ambil 3 project pertama untuk Featured
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <Box py={24} bg="blackAlpha.50">
      <Container maxW="6xl">
        
        {/* 1. HEADER */}
        <Flex justify="space-between" align="flex-end" mb={10} flexWrap="wrap" gap={4}>
            <Box>
                <Flex align="center" gap={2} mb={2}>
                    <Icon as={FaLayerGroup} color="purple.400" />
                    <Text color="purple.400" fontWeight="bold" letterSpacing="wide" fontSize="sm">
                        PORTFOLIO
                    </Text>
                </Flex>
                <Heading fontSize={{ base: "3xl", md: "4xl" }}>Featured Works</Heading>
            </Box>
            
            <Button 
                rightIcon={<FaArrowRight />} 
                variant="outline" 
                colorScheme="purple"
                onClick={onDrawerOpen}
                size="md"
                _hover={{ bg: 'purple.500', color: 'white', borderColor: 'purple.500' }}
            >
                View All Projects
            </Button>
        </Flex>
        
        {/* 2. GRID FEATURED PROJECTS */}
        <Grid
          templateRows={{ base: 'auto', md: 'repeat(2, 1fr)' }}
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={6}
          h={{ md: "600px" }}
        >
          {/* Main Hero Project (Index 0) */}
          {featuredProjects[0] && (
             <ProjectCard project={featuredProjects[0]} onClick={handleProjectClick} isLarge={true} />
          )}

          {/* Stacked Side Projects (Index 1 & 2) */}
          <GridItem colSpan={1} rowSpan={2} display="flex" flexDirection="column" gap={6}>
              {featuredProjects[1] && (
                 <Box flex="1"><ProjectCard project={featuredProjects[1]} onClick={handleProjectClick} /></Box>
              )}
              {featuredProjects[2] && (
                 <Box flex="1"><ProjectCard project={featuredProjects[2]} onClick={handleProjectClick} /></Box>
              )}
          </GridItem>
        </Grid>

      </Container>

      {/* 3. MODAL DETAIL POPUP */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered scrollBehavior="inside">
        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(5px)" />
        <ModalContent bg="gray.900" border="1px solid" borderColor="whiteAlpha.200">
          <ModalCloseButton />
          {selectedProject && (
              <>
                <Image 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    h="250px" 
                    w="100%" 
                    objectFit="cover" 
                    borderTopRadius="md"
                />
                <ModalHeader fontSize="2xl">{selectedProject.title}</ModalHeader>
                <ModalBody>
                    <HStack mb={4} spacing={2}>
                        {selectedProject.tech.map((t) => (
                            <Badge key={t} colorScheme="purple">{t}</Badge>
                        ))}
                    </HStack>
                    <Text color="gray.300" mb={4} fontSize="lg">
                        {selectedProject.desc}
                    </Text>
                    <Text color="gray.400" fontSize="md" lineHeight="tall">
                        {selectedProject.longDesc}
                    </Text>
                </ModalBody>
                <ModalFooter justifyContent="space-between">
                    <HStack>
                        <Button as="a" href={selectedProject.repoLink} target="_blank" leftIcon={<FaGithub />} variant="ghost">Source</Button>
                        <Button as="a" href={selectedProject.demoLink} target="_blank" leftIcon={<FaExternalLinkAlt />} variant="ghost">Live Demo</Button>
                    </HStack>
                    <Button colorScheme="purple" onClick={onClose}>Close</Button>
                </ModalFooter>
              </>
          )}
        </ModalContent>
      </Modal>

      {/* 4. DRAWER ALL PROJECTS */}
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose} size="full">
        <DrawerContent bg="gray.900">
            <DrawerCloseButton size="lg" mt={2} mr={2} zIndex={10} bg="blackAlpha.400" rounded="full" />
            <DrawerBody p={0}>
                <Container maxW="6xl" py={20}>
                    <VStack align="center" mb={16} spacing={4}>
                         <Badge colorScheme="purple" px={3} py={1} rounded="full">ARCHIVE</Badge>
                         <Heading size="3xl" textAlign="center">All Projects</Heading>
                         <Text color="gray.400" maxW="lg" textAlign="center">
                            Kumpulan seluruh pekerjaan saya dari eksplorasi awal hingga produk tingkat enterprise.
                         </Text>
                    </VStack>

                    <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={8}>
                        {projectsData.map((project) => (
                            <MotionBox 
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <ProjectCard project={project} onClick={(p) => {
                                    handleProjectClick(p);
                                }} />
                            </MotionBox>
                        ))}
                    </Grid>

                    <Flex justify="center" mt={20}>
                         <Button size="lg" variant="outline" onClick={onDrawerClose} rounded="full">
                            Kembali ke Home
                         </Button>
                    </Flex>
                </Container>
            </DrawerBody>
        </DrawerContent>
      </Drawer>

    </Box>
  );
};

export default Projects;