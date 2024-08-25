import React from 'react';
import { Container, VStack, Heading, Text, FormControl, Input, Button, Center, Flex, Box } from '@chakra-ui/react';
import { colors } from '../../theme/index';
import { useDispatch } from 'react-redux';
import { dobUser } from '../../state';

const DetailsPage = ({ onNext, onPrev }) => {

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [countryCode, setCountryCode] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [countryOfOrigin, setCountryOfOrigin] = React.useState('');

  const dispatch = useDispatch();

  const handleContinue = () => {
    dispatch(dobUser({ firstName, lastName, department, countryCode, phoneNumber, gender, countryOfOrigin }));
    onNext();
  };

  return (
    <Container h="100vh" w="100%" mx={0} px={0}>
      <Center h="full">
        <VStack spacing={12}>
          <VStack spacing={[0.1, 0.5, 1]}>
            <Heading fontWeight={700}>
              Registration
            </Heading>
            <Flex direction="row">
              <Text color={colors.secondary} fontWeight={400} fontSize={"0.85em"}>
                Basic Information
              </Text>
              <Box width="3px" />
            </Flex>
          </VStack>
          <VStack spacing={4} w="100%">
            <FormControl>
              <Input
                placeholder='First Name'
                _placeholder={{ fontWeight: "600" }}
                pr="4.5rem"
                type="text"
                variant="filled"
                borderRadius="4px"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder='Last Name'
                _placeholder={{ fontWeight: "600" }}
                pr="4.5rem"
                type="text"
                variant="filled"
                borderRadius="4px"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder='Department'
                _placeholder={{ fontWeight: "600" }}
                pr="4.5rem"
                type="text"
                variant="filled"
                borderRadius="4px"
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
              />
            </FormControl>
            <Flex direction="row" justifyContent="center" alignItems="center">
              <FormControl marginLeft="17px">
                <Input
                  placeholder='+91'
                  _placeholder={{ fontWeight: "600" }}
                  type="number"
                  variant="filled"
                  borderRadius="4px"
                  onChange={(e) => setCountryCode(e.target.value)}
                  value={countryCode}
                  width="65px"
                />
              </FormControl>
              <Box width="10px" />
              <FormControl>
                <Input
                  placeholder='Phone Number'
                  _placeholder={{ fontWeight: "600" }}
                  type="number"
                  variant="filled"
                  borderRadius="4px"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  width='93%'
                />
              </FormControl>
            </Flex>
            <FormControl>
              {/* Add menu and radio components for gender */}
              <Input
                placeholder='Gender'
                _placeholder={{ fontWeight: "600" }}
                pr="4.5rem"
                type="text"
                variant="filled"
                borderRadius="4px"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder='Country of Origin'
                _placeholder={{ fontWeight: "600" }}
                pr="4.5rem"
                type="text"
                variant="filled"
                borderRadius="4px"
                onChange={(e) => setCountryOfOrigin(e.target.value)}
                value={countryOfOrigin}
              />
            </FormControl>
            <Button
              w="full"
              colorScheme="brand"
              borderRadius="4px"
              marginTop="15px"
              width="90%"
              onClick={handleContinue}
            >
              Continue
            </Button>
            <Button
              w={"full"}
              variant={"ghost"}
              borderRadius={"4px"}
              onClick={onPrev}
            >
              Back
            </Button>
          </VStack>
        </VStack>
      </Center>
    </Container >
  );
}

export default DetailsPage;
