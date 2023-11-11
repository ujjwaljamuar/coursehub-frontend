import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const UpdateProfile = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Container paddingY={'16'} minHeight={'90dvh'}>
      <form>
        <Heading
          marginY={'16'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
          children="Update Password"
        />
        <VStack spacing={'8'}>
          <Input
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type="text"
            focusBorderColor="yellow.500"
            value={name}
          />

          <Input
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            focusBorderColor="yellow.500"
            value={email}
          />

          <Button width={'full'} colorScheme="yellow" type="submit">
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
