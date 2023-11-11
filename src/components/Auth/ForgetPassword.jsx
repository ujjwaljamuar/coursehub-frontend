import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container paddingY={'16'} height={['80dvh',"85.5dvh"]}>
      <form action="">
        <Heading
          children="Forget Password"
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
          marginY={'16'}
        />

        <VStack spacing={'8'}>
          <Input
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            type={'email'}
            focusBorderColor="yellow.500"
          />

          <Button type="submit" width={'full'} colorScheme="yellow">
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
