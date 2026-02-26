// src/components/Sections/Hero.jsx
import { Container, Heading, Text, VStack, Button, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Hero = () => {
  return (
    <Container maxW="6xl" pt={32} pb={20}>
      <VStack spacing={6} alignItems="flex-start">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Text color="purple.400" fontWeight="bold" letterSpacing="wide">
            UI FRONTEND DEVELOPER
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Heading size="2xl" fontWeight="bold" letterSpacing="tight">
            Hi, I'm <Box as="span" color="purple.400">Naufal Ilham</Box> 👋
          </Heading>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Heading
            as="h1"
            size="4xl"
            fontWeight="extrabold"
            lineHeight="shorter"
          >
            Building digital products, <br />
            <Box as="span" bgGradient="linear(to-r, blue.400, purple.500)" bgClip="text">
              brands, and experiences.
            </Box>
          </Heading>
        </MotionBox>

        <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <Text fontSize="xl" color="gray.500" maxW="2xl">
              I am a developer who focuses on UI/UX details. 
              I create modern web solutions using React & Figma.
            </Text>
        </MotionBox>

        
        <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
          <Box display="flex" gap={4} flexWrap="wrap">
            <Button as="a" href="mailto:nopalelham@gmail.com" size="lg" colorScheme="purple" rounded="md" px={8} _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}>
              Hire Me
            </Button>


            <Button size="lg" variant="outline" rounded="md" px={8} _hover={{ transform: 'translateY(-2px)', shadow: 'lg', borderColor: 'purple.400', color: 'purple.200', border: '2px' }}>
              View Work
            </Button>
          </Box>
        </MotionBox>
      </VStack>
    </Container>
  );
};

export default Hero;