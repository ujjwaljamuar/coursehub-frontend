import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.png';
import SideBar from '../SideBar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';

const AdminCourses = () => {
  const courses = [
    {
      _id: 'dnedc',
      poster: {
        url: 'https://cdn.pixabay.com/photo/2023/06/27/10/51/man-8091933_1280.jpg',
      },
      title: 'React Course',
      category: 'Web Dev',
      creator: 'Ujjwal Jamuar',
      views: 123,
      numOfVideos: 12,
    },
  ];

  const { isOpen, onClose, onOpen } = useDisclosure();

  const courseDetailsHandler = userID => {
    onOpen();
    console.log(userID);
  };

  const deleteHanlder = userID => {
    console.log(userID);
  };

  const deleteLectureButtonHanlder = (courseId, lectureId) => {
    console.log(courseId);
  };

  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
    console.log(courseId);
  };

  return (
    <Grid
      minHeight={'100dvh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{ cursor: `url(${cursor}), default` }}
    >
      <Box padding={['0', '8']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          marginY={'16'}
          textAlign={['center', 'left']}
          children={'ALL Courses'}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available Courses in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {courses.map(item => (
                <Row
                  courseDetailsHandler={courseDetailsHandler}
                  deleteHandler={deleteHanlder}
                  key={item._id}
                  item={item}
                  // loading={loading}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal
          lectures={['React Native']}
          isOpen={isOpen}
          onClose={onClose}
          id={'djwqndwk'}
          courseTitle="React Native"
          deleteButtonHandler={deleteLectureButtonHanlder}
          addLectureHandler={addLectureHandler}
        />
      </Box>
      <SideBar />
    </Grid>
  );
};

export default AdminCourses;

const Row = ({ item, courseDetailsHandler, deleteHandler }) => (
  <Tr>
    <Td>#{item._id}</Td>
    <Td>
      <Image src={item.poster.url} />
    </Td>
    <Td>{item.title}</Td>
    <Td textTransform={'uppercase'}>{item.category}</Td>
    <Td>{item.creator}</Td>
    <Td isNumeric>{item.views}</Td>
    <Td isNumeric>{item.numOfVideos}</Td>

    <Td isNumeric>
      <HStack justifyContent={'flex-end'}>
        <Button
          onClick={() => courseDetailsHandler(item._id)}
          variant={'outline'}
          color="purple.500"
          // isLoading={loading}
        >
          View Lectures
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
