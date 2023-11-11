import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');

  const params = useParams();

  console.log(params.token)
  
  return (
    <Container paddingY={'16'} height={['80dvh', '85.5dvh']}>
      <form action="">
        <Heading
          children="Reset Password"
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
          marginY={'16'}
        />

        <VStack spacing={'8'}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="New password"
            type={'password'}
            focusBorderColor="yellow.500"
          />

          <Button type="submit" width={'full'} colorScheme="yellow">
            Update Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
