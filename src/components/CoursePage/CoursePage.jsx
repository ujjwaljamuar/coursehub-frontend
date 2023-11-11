import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';

import introVideo from '../../assets/videos/intro.mp4';
import { useState } from 'react';

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  return (
    <Grid minHeight={'90dvh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          src={introVideo}
          // autoPlay
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>

        <Heading
          margin="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading margin="4" children="Description" />

        <Text margin="4" children={`${lectures[lectureNumber].description}`} />
      </Box>

      {/* Second element in GRID */}

      <VStack>
        {lectures.map((element, index) => (
          <button
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: '0',
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
            onClick={() => setLectureNumber(index)}
          >
            <Text noOfLines={1}>
              #{index} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

const lectures = [
  {
    _id: '1',
    title: 'Sample title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas reiciendis accusamus, obcaecati ullam laboriosam magnam suscipit consectetur ratione officiis odio saepe? Vitae, similique iusto?',
    video: {
      url: 'dcwedfdc',
    },
  },
  {
    _id: '2',
    title: 'Sample title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas reiciendis accusamus, obcaecati ullam laboriosam magnam suscipit consectetur ratione officiis odio saepe? Vitae, similique iusto?',
    video: {
      url: 'dcwedfdc',
    },
  },
  {
    _id: '3',
    title: 'Sample title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas reiciendis accusamus, obcaecati ullam laboriosam magnam suscipit consectetur ratione officiis odio saepe? Vitae, similique iusto?',
    video: {
      url: 'dcwedfdc',
    },
  },
  {
    _id: '4',
    title: 'Sample title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas reiciendis accusamus, obcaecati ullam laboriosam magnam suscipit consectetur ratione officiis odio saepe? Vitae, similique iusto?',
    video: {
      url: 'dcwedfdc',
    },
  },
  {
    _id: '5',
    title: 'Sample title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas reiciendis accusamus, obcaecati ullam laboriosam magnam suscipit consectetur ratione officiis odio saepe? Vitae, similique iusto?',
    video: {
      url: 'dcwedfdc',
    },
  },
  {
    _id: '6',
    title: 'Sample title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas reiciendis accusamus, obcaecati ullam laboriosam magnam suscipit consectetur ratione officiis odio saepe? Vitae, similique iusto?',
    video: {
      url: 'dcwedfdc',
    },
  },
  {
    _id: '7',
    title: 'Sample title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas reiciendis accusamus, obcaecati ullam laboriosam magnam suscipit consectetur ratione officiis odio saepe? Vitae, similique iusto?',
    video: {
      url: 'dcwedfdc',
    },
  },
  {
    _id: '8',
    title: 'Sample title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas reiciendis accusamus, obcaecati ullam laboriosam magnam suscipit consectetur ratione officiis odio saepe? Vitae, similique iusto?',
    video: {
      url: 'dcwedfdc',
    },
  },
];

export default CoursePage;
