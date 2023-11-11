import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Courses.css';


// All COURSES CARDS LAYOUT
const CourseCard = ({
  views,
  title,
  imageSrc,
  id,
  addToPlayListHanlder,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        size={'sm'}
        textAlign={['center', 'left']}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />

      <Text children={description} noOfLines={2} />

      <HStack>
        <Text
          children={'created by: '}
          noOfLines={2}
          fontWeight={'bold'}
          textTransform={'uppercase'}
        />
        <Text
          children={creator}
          noOfLines={2}
          fontFamily={'body'}
          textTransform={'uppercase'}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Lectures - ${lectureCount}`}
        textTransform={'uppercase'}
      />
      <Heading
        size={'xs'}
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />

      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme="yellow"
          onClick={() => addToPlayListHanlder(id)}
        >
          Add To PlayList
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const categories = [
    'Web Dev',
    'AI',
    'DSA',
    'App Dev',
    'Data Sciences',
    'Game Dev',
  ];

  const addPlayListHanlder = () => {
    console.log('Added to playlist');
  };
  return (
    <Container minH={'95dvh'} maxWidth={'container.lg'} paddingY={'6'}>
      <Heading children="All courses" margin={'8'} textAlign={["center",""]}/>
      <Input
        value={keyword}
        type="text"
        focusBorderColor="yellow.500"
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a Course.."
      />

      <HStack overflowX={'auto'} paddingY={'8'}>
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <CourseCard
          views="0"
          title="Video1 "
          imageSrc={
            'https://cdn.pixabay.com/photo/2023/06/27/10/51/man-8091933_1280.jpg'
          }
          id="1"
          creator="ujjwal"
          description="des"
          lectureCount={1}
          addToPlayListHanlder={addPlayListHanlder}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
