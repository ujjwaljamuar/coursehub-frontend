import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Container height={'92dvh'}>
      <VStack height="full" justifyContent={'center'} spacing={['8', '16']}>
        <Heading children="CONTACT US" />

        <form style={{ width: '100%' }}>
          <Box marginY={['3', '2']}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="abc"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box marginY={['3', '2']}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box marginY={['3', '2']}>
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your Message..."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box display={'flex'} justifyContent={'center'}>
            <Button
              marginY={['3', '2']}
              width={'full'}
              colorScheme={'yellow'}
              type="submit"
            >
              SEND
            </Button>
          </Box>

          <Box marginY={['3', '2']}>
            Request for a course ?{' '}
            <Link to="/request">
              <Button colorScheme={'yellow'} variant="link">
                Click
              </Button>{' '}
              Here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
