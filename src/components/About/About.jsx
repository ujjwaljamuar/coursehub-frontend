import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import introVideo from '../../assets/videos/intro.mp4';
import termsAndCondition from '../../assets/docs/termsAndCondition';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://avatars.githubusercontent.com/ujjwaljamuar"
        boxSize={['40', '48']}
      />
      <Text children="Co-Founder" opacity={'0.7'} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Ujjwal Jamuar" size={['md', 'xl']} />
      <Text
        children="Hi I am a MERN Stack Developer. Goal is to provide well optimized web application on reasonable prices."
        textAlign={['center', 'left']}
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      src={introVideo}
      autoPlay
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
    ></video>
  </Box>
);

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & Condition"
      textAlign={['center', 'left']}
      my="4"
    />

    <Box h="sm" p="4" overflowY={'scroll'}>
      <Text
        fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['justify', 'justify']}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my="4"
        size={'xs'}
        children="Refund only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container padding={'16'} maxWidth={'container.lg'} boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />

      <Stack margin={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text
          children="This is a video streaming platform with premium courses available only for premium users"
          fontFamily={'cursive'}
          margin={'8'}
          textAlign={['center', 'left']}
        />

        <Link to={'/subscribe'}>
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout our Plans
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />

      <TandC termsAndCondition={termsAndCondition} />
      <HStack marginY={'4'} padding={'4'}>
        <RiSecurePaymentFill />
        <Heading
          children="Payment is secured by RazorPay"
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          size={'xs'}
        />
      </HStack>
    </Container>
  );
};

export default About;
