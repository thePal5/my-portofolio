// src/components/Sections/Contact.jsx
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  SimpleGrid, 
  Icon, 
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaGithub, FaArrowRight } from 'react-icons/fa';

const MotionBox = motion(Box);

const ContactCard = ({ icon, title, value, href, color, delay }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <Link href={href} isExternal style={{ textDecoration: 'none' }}>
        <Box
          p={8}
          bg="whiteAlpha.50"
          border="1px solid"
          borderColor="whiteAlpha.100"
          borderRadius="2xl"
          transition="all 0.3s"
          _hover={{
            borderColor: color,
            bg: 'whiteAlpha.100',
            transform: 'translateY(-5px)',
            boxShadow: `0 10px 30px -10px ${color}66`
          }}
          role="group"
          cursor="pointer"
        >
          <VStack spacing={4} align="flex-start">
            <Box 
              p={3} 
              bg="whiteAlpha.100" 
              borderRadius="lg" 
              color={color}
              _groupHover={{ bg: color, color: 'white' }}
              transition="all 0.3s"
            >
              <Icon as={icon} w={6} h={6} />
            </Box>
            
            <Box>
              <Text fontSize="sm" color="gray.400" fontWeight="medium">
                {title}
              </Text>
              <Heading size="md" color="white" mt={1}>
                {value}
              </Heading>
            </Box>

            <Box 
                opacity={0} 
                transform="translateX(-10px)" 
                _groupHover={{ opacity: 1, transform: "translateX(0)" }}
                transition="all 0.3s"
                color={color}
            >
                <Icon as={FaArrowRight} />
            </Box>
          </VStack>
        </Box>
      </Link>
    </MotionBox>
  );
};

const Contact = () => {
  return (
    <Box py={24} bg="blackAlpha.900" position="relative" overflow="hidden">
      
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="600px"
        height="600px"
        bg="purple.900"
        filter="blur(150px)"
        opacity="0.2"
        zIndex="0"
      />

      <Container maxW="6xl" position="relative" zIndex="1">
        
        <VStack spacing={4} textAlign="center" mb={16}>
            <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Text color="purple.400" fontWeight="bold" letterSpacing="wide">
                    CONTACT
                </Text>
            </MotionBox>
            
            <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                <Heading size="2xl" mb={4}>
                    Let's work together
                </Heading>
                <Text fontSize="xl" color="gray.400" maxW="2xl" mx="auto">
                    Have an interesting project idea or just want to say hello? 
                    I'm always open to discussing new projects or collaboration opportunities.
                </Text>
            </MotionBox>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            
            {/* WhatsApp */}
            <ContactCard 
                icon={FaWhatsapp}
                title="Chat via WhatsApp"
                value="+62 811 9856 969" 
                href="https://wa.me/628119856969"
                color="#25D366"
                delay={0.2}
            />

            {/* Email */}
            <ContactCard 
                icon={FaEnvelope}
                title="Drop an Email"
                value="nopalelham@gmail.com" // Ganti email Anda
                href="mailto:nopalelham@gmail.com"
                color="#E53E3E" // Warna Merah/Orange
                delay={0.3}
            />

            {/* GitHub */}
            <ContactCard 
                icon={FaGithub}
                title="Check my Code"
                value="github.com/thePal5" // Ganti username Anda
                href="https://github.com/thePal5"
                color="#FFFFFF" // Putih untuk GitHub Dark Mode
                delay={0.4}
            />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;