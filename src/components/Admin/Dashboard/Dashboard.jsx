import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.png';
import SideBar from '../SideBar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';

const Dashboard = () => {
  return (
    <Grid
      minHeight={'100dvh'}
      templateColumns={['1fr', '5fr 1fr']}
      css={{ cursor: `url(${cursor}), default` }}
    >
      <Box boxSizing={'border-box'} paddingY={'16'} paddingX={['4', '0']}>
        <Text
          textAlign={'center'}
          opacity={'0.5'}
          children={`Last Changed on ${String(new Date()).split('G')[0]}`}
        />

        <Heading
          marginLeft={['0', '16']}
          marginBottom={'16'}
          textAlign={['center', 'left']}
          children={'Dashboard'}
        />

        <Stack
          direction={['column', 'row']}
          minHeight={'24'}
          justifyContent={'space-evenly'}
        >
          <Databox title="Views" qty={12321} qtypercentage={30} profit={true} />
          <Databox title="Users" qty={78} qtypercentage={23} profit={true} />
          <Databox
            title="Subscription"
            qty={10}
            qtypercentage={30}
            profit={false}
          />
        </Stack>

        <Box
          margin={['0', '16']}
          borderRadius={'lg'}
          padding={['0', '16']}
          marginTop={['4', '16']}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        >
          <Heading
            textAlign={['center', 'left']}
            size={'md'}
            paddingTop={['8', '0']}
            marginLeft={['0', '16']}
            children="Views Graph"
          />

          {/* Line Graph Here */}
          <LineChart
          // views={stats.map(item => item.views)}
          />
        </Box>

        <Grid templateColumns={['1fr', '2fr 1fr']}>
          <Box p="4">
            <Heading
              textAlign={['center', 'left']}
              size="md"
              children="Progress Bar"
              my="8"
              ml={['0', '16']}
            />

            <Box>
              <Bar profit={true} title="Views" value={122} />
              <Bar profit={true} title="Users" value={25} />
              <Bar profit={false} title="Subscription" value={1} />
            </Box>
          </Box>

          <Box p={['0', '16']} boxSizing="border-box" py="4">
            <Heading textAlign={'center'} size="md" mb="4" children="Users" />

            <DoughnutChart
            // users={[subscriptionCount, usersCount - subscriptionCount]}
            />
          </Box>
        </Grid>
      </Box>
      <SideBar />
    </Grid>
  );
};

export default Dashboard;

const Databox = ({ title, qty, qtypercentage, profit }) => (
  <Box
    width={['full', '20%']}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    padding={'8'}
    borderRadius={'lg'}
  >
    <Text children={title} />
    <HStack spacing={'6'}>
      <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />
      <HStack>
        <Text children={`${qtypercentage} %`} />"
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>

    <Text children={'Since Last Month'} opacity={0.6} />
  </Box>
);

const Bar = ({ title, value, profit }) => (
  <Box py="4" px={['0', '20']}>
    <Heading size="sm" children={title} mb="2" />

    <HStack w="full" alignItems={'center'}>
      <Text children={profit ? '0%' : `-${value}%`} />

      <Progress w="full" value={profit ? value : 0} colorScheme="purple" />
      <Text children={`${value > 100 ? value : 100}%`} />
    </HStack>
  </Box>
);
