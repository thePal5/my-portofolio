// src/components/Layout/Footer.jsx
import { 
  Box, 
  Container, 
  Stack, 
  SimpleGrid, 
  Text, 
  Link, 
  VisuallyHidden, 
  chakra, 
  useColorModeValue,
  IconButton,
  Flex
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaGithub , FaArrowUp, FaWhatsapp } from 'react-icons/fa';

// Komponen tombol sosial media kustom
const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target="_blank" // Buka tab baru
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        transform: 'translateY(-2px)',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

// Komponen Judul Kolom Link
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2} color="white">
      {children}
    </Text>
  );
};

// Komponen Item Link dengan Hover Effect
const FooterLink = ({ href, children }) => (
    <Link 
        href={href} 
        color="gray.400" 
        _hover={{ color: 'purple.400', textDecoration: 'none', paddingLeft: '5px' }}
        transition="all 0.2s"
    >
        {children}
    </Link>
);

const Footer = () => {
  // Fungsi scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      bg="gray.900"
      color="gray.200"
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
      mt={0}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          
          {/* KOLOM 1: Brand & Desc */}
          <Stack spacing={6}>
            <Box>
              <Text fontSize="2xl" fontWeight="bold" letterSpacing="tighter" color="white">
                Naufal Ilham<Text as="span" color="purple.500">.</Text>
              </Text>
              <Text fontSize={'sm'} color="gray.500" mt={2}>
                Building immersive and functional digital experiences.
                Focusing on quality and user satisfaction.
              </Text>
            </Box>
            <Stack direction={'row'} spacing={4}>
              <SocialButton label={'Github'} href={'https://github.com/naufal'}>
                <FaGithub />
              </SocialButton>
              <SocialButton label={'LinkedIn'} href={'https://linkedin.com/in/naufal'}>
                <FaWhatsapp />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://instagram.com/nopelham'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>

          {/* KOLOM 2: Navigation */}
          <Stack align={'flex-start'}>
            <ListHeader>Menu</ListHeader>
            <FooterLink href={'#home'}>Home</FooterLink>
            <FooterLink href={'#about'}>About</FooterLink>
            <FooterLink href={'#projects'}>Projects</FooterLink>
            <FooterLink href={'#contact'}>Contact</FooterLink>
          </Stack>

          {/* KOLOM 3: Services (Menambah kesan profesional) */}
          <Stack align={'flex-start'}>
            <ListHeader>Services</ListHeader>
            <FooterLink href={'#'}>Web Development</FooterLink>
            <FooterLink href={'#'}>Sales Marketing</FooterLink>
            <FooterLink href={'#'}>Video Editor</FooterLink>
            <FooterLink href={'#'}>Digital Marketing</FooterLink>
          </Stack>

          {/* KOLOM 4: Tech Stack (Opsional) */}
          <Stack align={'flex-start'}>
            <ListHeader>Tech Stack</ListHeader>
            <Text color="gray.500" fontSize="sm">React</Text>
            <Text color="gray.500" fontSize="sm"></Text>
            <Text color="gray.500" fontSize="sm">Adobe Illustrator</Text>
            <Text color="gray.500" fontSize="sm">Figma & Canva</Text>
            <Text color="gray.500" fontSize="sm">Capcut</Text>
          </Stack>

        </SimpleGrid>
      </Container>

      {/* COPYRIGHT AREA */}
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor="whiteAlpha.100"
      >
        <Container
          as={Stack}
          maxW={'container.xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text fontSize="sm" color="gray.500">
            © {new Date().getFullYear()} All rights reserved.
          </Text>
          
          <Flex alignItems="center" gap={2}>
             <Text fontSize="sm" color="gray.600">Built with passion.</Text>
             
             {/* Back to Top Button */}
             <IconButton 
                icon={<FaArrowUp />} 
                aria-label="Back to top"
                size="sm"
                colorScheme="purple"
                variant="outline"
                rounded="full"
                onClick={scrollToTop}
                _hover={{ bg: 'purple.500', color: 'white' }}
             />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;