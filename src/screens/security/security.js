import React, { useEffect } from 'react';
import { Container, Card, CardBody, CardHeader, CardFooter, Text, Avatar, Flex, VStack, Heading, Button, Wrap, Tag, TagLabel } from '@chakra-ui/react';
import { colors } from '../../theme';
import SecurityCodesFetch from "./securityCodesApi"

const SecurityCodes = () => {

  const sampleCards = [
    {
      name: "Spider NITT",
      app_name: "lynx",
      avatar_name: "dan abramov",
      avatar_url: "https://bit.ly/dan-abramov",
      data: [ "Name", "Password", "Address", "DoB", "ATM Pin", "Social Security Number", "Mother's Maiden Name", "Legal Background", "Preferred Deodorant" ],
      otp: "123456"
    },
    {
      name: "Delta Force",
      app_name: "dauth",
      avatar_name: "jane doe",
      avatar_url: "https://i.pravatar.cc/150?img=3",
      data: [ "Username", "Password", "Email", "Date of Birth", "Credit Card Number", "CVV", "Mother's Maiden Name", "Favorite Color", "Pet's Name" ],
      otp: "654321"
    },
    {
      name: "Technical Council",
      app_name: "nittgo",
      avatar_name: "john smith",
      avatar_url: "https://i.pravatar.cc/150?img=4",
      data: [ "Full Name", "Password", "Home Address", "Phone Number", "Bank Account Number", "PIN", "Security Question Answer", "Favorite Food", "Childhood Nickname" ],
      otp: "987654"
    },
    {
      name: "RMI NITT",
      app_name: "bots",
      avatar_name: "mary jane",
      avatar_url: "https://i.pravatar.cc/150?img=5",
      data: [ "Account Username", "Password", "Mailing Address", "Social Media Handle", "Credit Card Number", "Expiration Date", "Security Code", "First Pet's Name", "High School Mascot" ],
      otp: "456789"
    }
  ]

  useEffect(() => {
    const SecurityCodesList = SecurityCodesFetch();
  });

  return (
    <Flex height={"100vh"} direction={"column"}>
      <Heading textAlign={"center"} fontWeight={800} mx={0} py={30} fontSize={"1.5rem"}>
        Security Codes
      </Heading>
      <Container w={["100%", "80%", "50%"]} overflow={"auto"}>
      { sampleCards.map((card, index) => (
          <Card key={index} mt={4} borderRadius={"24px"} pt={2} boxShadow={"0px 0px 20px rgba(0, 0, 0, 0.15)"}>
            <CardHeader py={2}>
              <Flex alignItems='center' gap='2'>
                <Avatar name={card.avatar_name} src={card.avatar_url} />
                <VStack alignItems={"flex-start"} mx={1} spacing={0}>
                  <Heading fontSize={"1.5rem"} my={0}>
                    {card.name}
                  </Heading>
                  <Text>
                    '{card.app_name}' requires access to the following information
                  </Text>
                </VStack>
                <Button colorScheme='brand' size={"xs"} paddingX={5} paddingY={"13px"} borderRadius={18}>
                  <Text fontWeight={500}> 
                    Finish
                  </Text>
                </Button>
              </Flex>
            </CardHeader>
            <CardBody py={1}>
            <Wrap>
                { card.data.map((data, index) => (
                  <Tag
                    key={index}
                    size="sm"
                    borderRadius='full'
                    variant='outline'
                    border={"1px solid"}
                    borderColor={colors.tagGrey}
                  >
                    <TagLabel >{data}</TagLabel>
                  </Tag>
                ))}
            </Wrap>
            </CardBody>
            <CardFooter py={5}>
              <Text> Your OTP is <Text as={"b"}> {card.otp} </Text> </Text>
            </CardFooter>
          </Card>
        )) }
      </Container>
    </Flex>
  );
}

export default SecurityCodes;