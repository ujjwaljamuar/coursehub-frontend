import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const submitHandler = () => {};

  return (
    <Container paddingY={'16'} minHeight={'90dvh'}>
      <form onSubmit={submitHandler}>
        <Heading
          marginY={'16'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
          children="Change Password"
        />
        <VStack spacing={'8'}>
          <Input
            required
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Enter Old Password"
            type="Password"
            focusBorderColor="yellow.500"
            value={oldPassword}
          />
          <Input
            required
            onChange={e => setNewPassword(e.target.value)}
            placeholder="Enter New Password"
            type="Password"
            focusBorderColor="yellow.500"
            value={newPassword}
          />

          <Button width={'full'} colorScheme="yellow" type="submit">
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
