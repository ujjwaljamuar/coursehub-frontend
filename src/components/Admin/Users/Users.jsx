import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.png';
import SideBar from '../SideBar';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const Users = () => {
  const users = [
    {
      _id: 'dnedc',
      name: 'Ujjwal',
      email: 'ujjwal@gmail.com',
      role: 'admin',
      subscription: {
        status: 'active',
      },
    },
  ];

  const updateHandler = userID => {
    console.log(userID);
  };
  const deleteHanlder = userID => {
    console.log(userID);
  };

  return (
    <Grid
      minHeight={'100dvh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{ cursor: `url(${cursor}), default` }}
    >
      <Box padding={['0', '16']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          marginY={'16'}
          textAlign={['center', 'left']}
          children={'ALL USERS'}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available users in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {users &&
                users.map(item => (
                  <Row
                    updateHandler={updateHandler}
                    deleteHandler={deleteHanlder}
                    key={item._id}
                    item={item}
                    // loading={loading}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <SideBar />
    </Grid>
  );
};

export default Users;

const Row = ({ item, updateHandler, deleteHandler }) => (
  <Tr>
    <Td>#{item._id}</Td>
    <Td>{item.name}</Td>
    <Td>{item.email}</Td>
    <Td>{item.role}</Td>
    <Td>
      {item.subscription && item.subscription.status === 'active'
        ? 'Active'
        : 'Not Active'}
    </Td>

    <Td isNumeric>
      <HStack justifyContent={'flex-end'}>
        <Button
          onClick={() => updateHandler(item._id)}
          variant={'outline'}
          color="purple.500"
          // isLoading={loading}
        >
          Change Role
        </Button>

        <Button
          onClick={() => deleteHandler(item._id)}
          color={'purple.600'}
          // isLoading={loading}
        >
          <RiDeleteBin7Fill />
        </Button>
      </HStack>
    </Td>
  </Tr>
);
