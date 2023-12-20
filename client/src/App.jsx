import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Box, ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Registration } from './pages/Registration';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Container
        maxW="container.lg"
        mt="4"
        p="4"
        boxShadow="md"
        rounded="lg"
        bgGradient="linear(to-l, teal.200, purple.300)" // Use gradient background
      >
        <Box mb="4" textAlign="center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="registration" element={<Registration />} />
          </Routes>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
