import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Subscribe = () => {
  return (
    <Container height={'90dvh'} padding={'16'}>
      <Heading marginY={'8'} textAlign={'center'} children="Welcome" />
      <VStack
        boxShadow={'lg'}
        spacing={'0'}
        alignItems={'stretch'}
        borderRadius={'lg'}
      >
        <Box
          backgroundColor={'yellow.400'}
          padding={'4'}
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text
            color={'black'}
            children={`Pro Pack - 299.00`}
            textAlign={'center'}
          />
        </Box>

        <Box padding={'4'}>
          <VStack
            textAlign={'center'}
            paddingX={'8'}
            marginTop={'4'}
            spacing={'8'}
          >
            <Text
              children="Join Pro Pack and Get Access to All Content"
            />
            <Heading size={'md'} children={'$299.99 Only /-'} />
          </VStack>

          <Button marginY={'8'} width={'full'} colorScheme="yellow">
            Buy Now
          </Button>
        </Box>

        <Box
          backgroundColor={'blackAlpha.600'}
          padding={'4'}
          css={{ borderRadius: '0 0 8px 8px' }}
        >
          <Heading
            size={'sm'}
            color={'white'}
            textTransform={'uppercase'}
            children="100% Refund at Cancellation"
          />

          <Text
            fontSize={'xs'}
            color={'white'}
            children="*Terms & Conditions Apply"
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
