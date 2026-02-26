import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Container,
  useColorModeValue,
  useDisclosure,
  Link,
} from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icon Hamburger & Close

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  // Hook untuk mengontrol buka/tutup menu mobile
  const { isOpen, onToggle, onClose } = useDisclosure();
  
  // Warna Glassmorphism
  const bg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(10, 10, 10, 0.8)');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');

  return (
    <Box
      position="fixed"
      top="0"
      w="100%"
      zIndex="1000"
      bg={bg}
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor={borderColor}
    >
      <Container maxW="container.xl">
        <Flex
          minH={'60px'}
          py={{ base: 2 }}
          align={'center'}
          justify={'space-between'}
        >
          {/* LOGO */}
          <Text
            fontSize="xl"
            fontWeight="bold"
            letterSpacing="tighter"
            cursor="pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            PORTOFOLIO<Text as="span" color="purple.500">.</Text>
          </Text>

          {/* DESKTOP MENU (Hidden on Mobile) */}
          <Flex display={{ base: 'none', md: 'flex' }} gap={4}>
            {NAV_ITEMS.map((navItem) => (
              <Button
                key={navItem.label}
                as="a"
                href={navItem.href}
                variant="ghost"
                fontSize="sm"
                fontWeight="medium"
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.100', 'whiteAlpha.200'),
                  color: 'purple.400',
                }}
              >
                {navItem.label}
              </Button>
            ))}
          </Flex>

          {/* MOBILE HAMBURGER BUTTON (Visible only on Mobile) */}
          <Flex display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <FaTimes w={5} h={5} /> : <FaBars w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              _hover={{ bg: 'whiteAlpha.200' }}
            />
          </Flex>
        </Flex>

        {/* MOBILE MENU COLLAPSE (Animasi Buka Tutup) */}
        <Collapse in={isOpen} animateOpacity>
          <MobileNav onClose={onClose} />
        </Collapse>
      </Container>
    </Box>
  );
};

const MobileNav = ({ onClose }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.900')}
      p={4}
      display={{ md: 'none' }}
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
      spacing={4}
      pb={6}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} onClick={onClose}> 
          <Link 
            href={navItem.href}
            py={2}
            display="block"
            fontWeight="semibold"
            _hover={{
              textDecoration: 'none',
              color: 'purple.400',
              pl: 2, // Efek geser sedikit saat hover
            }}
            transition="all 0.2s"
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
      
      {/* Tombol Tambahan di Menu Mobile */}
      <Button 
        w="full" 
        colorScheme="purple" 
        variant="outline"
        size="sm"
        as="a"
        href="mailto:nopalelham@gmail.com"
      >
        Hire Me
      </Button>
    </Stack>
  );
};

export default Navbar;