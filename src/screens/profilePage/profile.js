import React from 'react';
import { Avatar, Box, Button, Card, CardBody, Center, Container, Flex, Heading, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react';
import { colors } from '../../theme';
import ProfileUser from '../profilePage/profileApi.js'


const ProfileScreen = () => {

    const userProfile = ProfileUser();
    console.log(userProfile);

    const sampleData = {
          name: "Random Person",
          roll_no: "1121207",
          course: "BTech",
          dept: "Electrical and Electronics Engineering",
          following: [["Student Council", "240", ""], ["Spider R&D", "240", ""], ["Festember", "500", ""]],
          interested: [["Technical Council", "100", ""], ["NITTFest", "250", ""], ["Cipher", "50", ""]],
          photo: "https://bit.ly/dan-abramov"
    }
      
    return (
        <Flex height={"100vh"} direction={"column"}>
            <Center h="full">
                <Container w={"100%"} overflow={"auto"}>
                    <Flex direction="row" mx={"2%"}>
                        <Heading color='blue.500' fontSize="24" fontWeight="700" mx={0} py={30}>Lynx-Profile</Heading>
                    </Flex>
                    <VStack alignItems={"center"} my={"5%"} w="full">
                    <Avatar src={sampleData.photo} name={sampleData.name} size={"2xl"} />
                    <Text fontSize="36" fontWeight="800">{sampleData.name}</Text>
                    <Flex direction={"row"}>
                    <Box borderRadius={"md"} m={"1"} px={"4"} border='1px' borderColor={"blue.500"} color={"blue.500"}>{sampleData.roll_no}</Box>
                    <Box borderRadius={"md"} m={"1"} px={"4"} border='1px' borderColor={"green.500"} color={"green.500"}>{sampleData.course} - {sampleData.dept}</Box>
                    </Flex>
                    </VStack>
                    <VStack w="full" spacing={0}>
                    <Tabs variant='line' w={'full'} colorScheme='blue.500'>
                            <TabList>
                                <Tab>Following</Tab>
                                <Tab>Interested</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <VStack spacing={4} align="flex-start">
                                        {sampleData.following.map((item, index) => (
                                            <Card direction={"row"} key={index} w={'100%'} p={"2%"} m={'0'} align={'center'} borderRadius={15} size={'sm'}>
                                                <Avatar src={item[2]} name={item[0]} m={"2%"}/>
                                                <Stack>
                                                    <CardBody>
                                                        <Heading size={"xs"}>{item[0]}</Heading>
                                                        <Text color={colors.secondary} fontWeight={400} fontSize={12}>{item[1]} followers</Text>
                                                    </CardBody>
                                                </Stack>
                                                <Button colorScheme='blue' variant={'outline'} size={'sm'} align='right'>
                                                    Unfollow
                                                </Button>
                                            </Card>
                                        ))}
                                    </VStack>
                                </TabPanel>
                                <TabPanel>
                                    <VStack spacing={4} align="flex-start">
                                        {sampleData.interested.map((item, index) => (
                                            <Card direction={"row"} key={index} w={'100%'} p={"2%"} m={'0'} align={'center'} borderRadius={15} size={'sm'}>
                                                <Avatar src={item[2]} name={item[0]} m={"2%"}/>
                                                <Stack>
                                                    <CardBody>
                                                        <Heading size={"xs"}>{item[0]}</Heading>
                                                        <Text color={colors.secondary} fontWeight={400} fontSize={12}>{item[1]} interested</Text>
                                                    </CardBody>
                                                </Stack>
                                                <Button colorScheme='blue' variant={'outline'} size={'sm'} align='right'>
                                                    Uninterest
                                                </Button>
                                            </Card>
                                        ))}
                                    </VStack>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </VStack>
                </Container>
            </Center>
        </Flex>
    );
}

export default ProfileScreen;