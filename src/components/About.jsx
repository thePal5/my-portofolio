// src/components/Sections/About.jsx
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Image, 
  Flex, 
  Badge,
  VStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpeg';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

// Komponen Stat Kecil
const StatItem = ({ number, label }) => (
  <Box borderLeft="2px solid" borderColor="purple.400" pl={4}>
    <Heading size="lg" color="white">{number}</Heading>
    <Text fontSize="sm" color="gray.400">{label}</Text>
  </Box>
);

const About = () => {
  return (
    <Box py={20} bg="gray.900" position="relative" overflow="hidden">
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 20 }} alignItems="center">
          
          {/* KOLOM KIRI: Text & Story */}
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VStack align="start" spacing={6}>
              <Badge 
                colorScheme="purple" 
                variant="outline" 
                rounded="full" 
                px={3} 
                py={1}
                letterSpacing="wide"
              >
                ABOUT ME
              </Badge>

              <Heading size="2xl" lineHeight="short">
                A journey driven by curiosity and <br />
                <Box as="span" color="purple.400">lines of code.</Box>
              </Heading>

              <Text fontSize="lg" color="gray.400" lineHeight="tall">
                Hello! My name is Naufal Ilham. Currently, I am focused on building web applications that are not only functional but also have a visually appealing user experience (UX).

              </Text>

              <Text fontSize="lg" color="gray.400" lineHeight="tall">
                Not only that, I am also focused on video content editing, which is still in demand in today's industry. 
              </Text>

              {/* Stats Section */}
              <SimpleGrid columns={3} spacing={8} w="full" pt={4}>
                <StatItem number="1+" label="Years Exp." />
                <StatItem number="14+" label="Projects Done" />
                <StatItem number="90%" label="Satisfaction" />
              </SimpleGrid>
            </VStack>
          </MotionBox>

          {/* KOLOM KANAN: Foto & Dekorasi */}
          <Box position="relative" display="flex" justifyContent="center">
            
            {/* Dekorasi: Dot Pattern di belakang */}
            <Box
                position="absolute"
                top="-20px"
                right="-20px"
                zIndex="0"
                opacity="0.3"
            >
               <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                 <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                   <circle cx="2" cy="2" r="2" fill="currentColor" className="text-gray-500" />
                 </pattern>
                 <rect width="100" height="100" fill="url(#dots)" />
               </svg>
            </Box>

            {/* Gradient Border Wrapper */}
            <MotionBox
              position="relative"
              zIndex="1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Box Belakang (Aksen) */}
              <Box
                position="absolute"
                top="20px"
                right="20px"
                w="full"
                h="full"
                border="2px solid"
                borderColor="purple.500"
                borderRadius="2xl"
                zIndex="-1"
              />

              {/* Foto Utama */}
              <MotionImage
                src={profile} // Ganti URL ini dengan foto asli Anda
                alt="Naufal Ilham"
                borderRadius="2xl"
                boxShadow="2xl"
                w={{ base: "full", md: "400px" }}
                h={{ base: "300px", md: "500px" }}
                objectFit="cover"
                // Efek Floating (Melayang-layang sedikit)
                animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                filter="grayscale(20%)"
                _hover={{ filter: "grayscale(0%)" }} // Jadi berwarna saat di hover
              />
              
              {/* Floating Card Kecil (Optional decoration) */}
              <Box
                position="absolute"
                bottom="40px"
                left="-30px"
                bg="gray.800"
                p={4}
                borderRadius="xl"
                boxShadow="xl"
                border="1px solid"
                borderColor="whiteAlpha.200"
                display={{ base: "none", md: "block" }}
              >
                 <Flex alignItems="center" gap={3}>
                    <Box w={3} h={3} bg="green.400" borderRadius="full" />
                    <Text fontSize="sm" fontWeight="bold">Open for Work</Text>
                 </Flex>
              </Box>

            </MotionBox>
          </Box>

        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default About;