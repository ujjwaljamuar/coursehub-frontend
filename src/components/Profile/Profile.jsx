import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { fileUploadCss } from '../Auth/SignUp';
import { useState } from 'react';

const Profile = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const removeFromPlaylistHandler = async id => {
    // await dispatch(removeFromPlaylist(id));
    // dispatch(loadUser());
  };

  const changeimageSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log(image);
  };
  return (
    <Container maxWidth={'container.lg'} minHeight={'95dvh'} paddingY={'8'}>
      <Heading
        margin={'8'}
        textTransform={'uppercase'}
        children="Your Profile"
      />
      <Stack
        direction={['column', 'row']}
        justifyContent={'flex-start'}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button colorScheme="yellow" variant={'ghost'} onClick={onOpen}>
            Change Photo
          </Button>
        </VStack>

        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text fontWeight={'bold'} children="Name: " />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text fontWeight={'bold'} children="Email: " />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text fontWeight={'bold'} children="Created At: " />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>

          {user.role !== 'admin' && (
            <HStack>
              <Text fontWeight={'bold'} children="Subscription" />
              {user.subscription.status === 'active' ? (
                <Button color="yellow.500">Cancel Subsciption</Button>
              ) : (
                <Link to={'/subscribe'}>
                  <Button colorScheme="yellow">Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to={'/updateprofile'}>
              <Button>Update Profile</Button>
            </Link>
            <Link to={'/changepassword'}>
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading size={'md'} marginY={'8'} children="Playlist" />

      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          padding={'4'}
        >
          {user.playlist.map(element => (
            <VStack width={'48'} margin={'2'} key={element.course}>
              <Image
                width={'full'}
                objectFit={'contain'}
                src={element.poster}
              />

              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button variant={'ghost'} colorScheme="yellow">
                    Watch Now
                  </Button>
                </Link>

                <Button
                  //   isLoading={loading}
                  onClick={() => removeFromPlaylistHandler(element.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangePhotoBox
        changeimageSubmitHandler={changeimageSubmitHandler}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Container>
  );
};

function ChangePhotoBox({ isOpen, onClose, changeimageSubmitHandler }) {
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler = () => {
    onClose();
    setImagePrev('');
    setImage('');
  };
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blue(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeimageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar boxSize={'48'} src={imagePrev} />}
                <Input
                  type="file"
                  css={{ '&::file-selector-button': fileUploadCss }}
                  onChange={changeImage}
                />
                <Button width={'full'} colorScheme="yellow" type="submit">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button marginRight={'3'} onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

const user = {
  name: 'Ujjwal Jamuar',
  email: 'ujjwaljamuar@outlook.com',
  createdAt: String(new Date().toISOString()),
  role: 'user',
  subscription: {
    status: 'active',
  },

  playlist: [
    {
      course: 'dcdc',
      poster:
        'https://cdn.pixabay.com/photo/2023/06/27/10/51/man-8091933_1280.jpg',
    },
  ],
};

export default Profile;
