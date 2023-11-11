import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10dvh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'100%'}>
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            children="@ujjwaljamuar"
            color={'yellow.400'}
            fontFamily={'body'}
            size={'sm'}
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          color={'white'}
          fontSize={'50'}
        >
          <a href="https://www.youtube.com" target="blank">
            <TiSocialYoutubeCircular />
          </a>

          <a href="https://www.instagram.com/loneee_wolff_/" target="blank">
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com/ujjwaljamuar" target="blank">
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
