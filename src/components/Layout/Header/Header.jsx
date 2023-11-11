import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link to={url} onClick={onClose}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuth = true;

  const user = {
    role: 'admin',
  };

  const logoutHandler = () => {
    // setIsAuth = false;
    console.log('Logout');
    onclose();
  };
  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width={'12'}
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'6'}
        left={'6'}
        zIndex={'overlay'}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'} textAlign={'center'}>
            COURSE BUNDLER
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={'4'}>
              <LinkButton url="/" title="Home" onClose={onClose} />
              <LinkButton
                url="/courses"
                title="All Courses"
                onClose={onClose}
              />
              <LinkButton
                url="/request"
                title="Request a Course"
                onClose={onClose}
              />
              <LinkButton url="/contact" title="Contact Us" onClose={onClose} />
              <LinkButton url="/about" title="About Us" onClose={onClose} />
            </VStack>

            <HStack
              justifyContent={'space-evenly'}
              position={'absolute'}
              bottom={'2rem'}
              width={'80%'}
            >
              {isAuth ? (
                <>
                  <VStack>
                    <HStack>
                      <Link to={'/profile'} onClick={onClose}>
                        <Button colorScheme={'yellow'} variant={'ghost'}>
                          Profile
                        </Button>
                      </Link>

                      <Button variant={'ghost'} onClick={logoutHandler}>
                        <RiLogoutBoxLine />
                        Logout
                      </Button>
                    </HStack>

                    {user && user.role === 'admin' && (
                      <Link to={'/admin/dashboard'} onClick={onClose}>
                        <Button colorScheme="purple" variant={'ghost'}>
                          <RiDashboardFill style={{ margin: '4px' }} />{' '}
                          Dashboard
                        </Button>
                      </Link>
                    )}
                  </VStack>
                </>
              ) : (
                <>
                  <Link to={'/login'} onClick={onClose}>
                    <Button colorScheme={'yellow'}>Log In</Button>
                  </Link>

                  <p>OR</p>

                  <Link to={'/register'} onClick={onClose}>
                    <Button colorScheme={'yellow'}>Sign Up</Button>
                  </Link>
                </>
              )}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
