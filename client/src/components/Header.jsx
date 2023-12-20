import { Box, Heading } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box>
      <Heading
        size='lg'
        fontSize='6xl'
        textAlign='center'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontWeight='extrabold'
        color="white" // Set the color here
      >
        TICKET MASTER
      </Heading>
    </Box>
  );
};
