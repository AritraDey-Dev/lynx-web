import React, { useEffect } from 'react';
import { Container, VStack, Heading, Text, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, Center } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { colors } from '../../theme/index';
// import { useDispatch } from 'react-redux';
// import { setUserPassword } from '../../state';
import { useNavigate } from 'react-router-dom';
import StudentDetails from './signUpApi/studentDetailsApi';

const SetPasswordScreen = ({ onNext, onPrev }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClick = () => setShowPassword(!showPassword);

  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const handleConfirmClick = () => setShowConfirmPassword(!showConfirmPassword);

  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (password === confirmPassword && password.length > 0) {
  //     dispatch(setUserPassword(password)); 
  //   }
  // }, [password, confirmPassword, dispatch]);

  const handleSetPassword = async () => {
    const studentRegisterResponse = await StudentDetails();
};

  const handlePrev = () => {
    navigate("/register-profile-images");
};

  return (
    <Container h={"100vh"} w={"100%"} mx={0} px={0}>
      <Center h={"full"}>
      <VStack spacing={12}>
        <VStack spacing={[0.1, 0.5, 1]}>
          <Heading color={colors.primary} fontWeight={700}>
            Set a password
          </Heading>
          <Text color={colors.secondary} fontWeight={400} fontSize={"0.85em"}>
            Enter Your App Password
          </Text>
        </VStack>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel color={colors.secondary} fontSize={"0.8em"} fontWeight={700}>
              ENTER PASSWORD
            </FormLabel>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={showPassword ? 'text' : 'password'}
                variant='filled'
                borderRadius={"4px"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <InputRightElement width='3rem'>
                {showPassword ? (
                  <ViewOffIcon onClick={handleClick} />
                ) : (
                  <ViewIcon onClick={handleClick} />
                )}
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel color={colors.secondary} fontSize={"0.8em"} fontWeight={700}>
              CONFIRM PASSWORD
            </FormLabel>
            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={showConfirmPassword ? 'text' : 'password'}
                variant='filled'
                borderRadius={"4px"}
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
              <InputRightElement width='3rem'>
                {showConfirmPassword ? (
                  <ViewOffIcon onClick={handleConfirmClick} />
                ) : (
                  <ViewIcon onClick={handleConfirmClick} />
                )}
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            w={"full"} 
            colorScheme={"brand"} 
            marginTop={5}
            borderRadius={"4px"}
            onClick={handleSetPassword}
          > 
            Continue
          </Button>
          <Button
            w={"full"} 
            variant={"ghost"}
            borderRadius={"4px"}
            onClick={handlePrev}
          >
            Back
          </Button>
        </VStack>
      </VStack>
      </Center>
    </Container>
  );
}

export default SetPasswordScreen;