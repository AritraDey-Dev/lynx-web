import React, { useState, useEffect } from 'react';
import { Container, VStack, HStack, Heading, Text, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, Center, Flex, Box, useBreakpointValue } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { colors } from '../../theme/index';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../state';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LynxSplash } from '../../res/lynx_spash.svg';
import LoginUser from "./loginApi"

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShowPassword(!showPassword);

  const [webmail, setWebmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // const recaptchaToken = window.grecaptcha.getResponse(); // Get the reCAPTCHA token
    // if (!recaptchaToken) {
    //   //alert("Please complete the reCAPTCHA.");
    //   return;
    // }
    
    dispatch(loginUser({ webmail, password }));
    navigate('/security');
  };

  useEffect(() => {
    // Initialize reCAPTCHA
    // if (window.grecaptcha && !document.getElementById('recaptcha-container').hasChildNodes()) {
    //   window.grecaptcha.render('recaptcha-container', {
    //     sitekey: '6LemFScqAAAAAOLGrOnhm80XXspBR1xgovxDWPUj',
    //   });
    // }
  }, []);

  const splashRender = useBreakpointValue({ base: false, lg: true });

  return (
    <HStack justify={"center"} spacing={0} h={"100vh"}>
      <Container overflowX={"hidden"} h={"full"} m={0} p={0}>
        <HStack style={{ transition: "1s" }}>
          <Container h="100vh" w="100%" mx={0} px={0}>
            <Center h="full">
              <VStack spacing={12}>
                <VStack spacing={[0.1, 0.5, 1]}>
                  <Heading fontWeight={700}>Login</Heading>
                  <Flex direction="row">
                    <Text color={colors.secondary} fontWeight={400} fontSize={"0.85em"}>
                      Not Registered?
                    </Text>
                    <Box width="3px" />
                    <Button as="i" textDecoration="underline" variant="link" onClick={() => {
                      navigate('/register-rollNo');
                    }}>
                      <Text color={colors.secondary} fontWeight={400} fontSize={"0.85em"}>
                        SignUp
                      </Text>
                    </Button>
                  </Flex>
                </VStack>
                <VStack spacing={4} w="100%">
                  <FormControl>
                    <FormLabel>Webmail</FormLabel>
                    <Input
                      pr="4.5rem"
                      type="email"
                      variant="filled"
                      borderRadius="4px"
                      onChange={(e) => setWebmail(e.target.value)}
                      value={webmail}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size="md">
                      <Input
                        pr="4.5rem"
                        type={showPassword ? 'text' : 'password'}
                        variant="filled"
                        borderRadius="4px"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                      <InputRightElement width="3rem">
                        {showPassword ? (
                          <ViewOffIcon onClick={handleClick} />
                        ) : (
                          <ViewIcon onClick={handleClick} />
                        )}
                      </InputRightElement>
                    </InputGroup>
                    <Button as="i" textDecoration="underline" variant="link" onClick={() => {
                      navigate('/forgotPassword');
                    }}>
                      <Text color={colors.forgotGrey} fontWeight={400} fontSize={"0.85em"}>
                        Forgot your Password?
                      </Text>
                    </Button>
                  </FormControl>
                 
                  <Button
                    w="full"
                    colorScheme="brand"
                    borderRadius="4px"
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                  {/* Commented out reCAPTCHA container */}
                  {/* <div id="recaptcha-container"></div> */}
                  
                  <Button
                    w={"full"}
                    variant={"ghost"}
                    borderRadius={"4px"}
                    onClick={() => { navigate('/'); }}
                  >
                    Back
                  </Button>
                </VStack>
              </VStack>
            </Center>
          </Container>
        </HStack>
      </Container>
      {splashRender && (
        <Center h={"full"} m={0} p={0}>
          <LynxSplash style={{ height: "90%" }} />
        </Center>
      )}
    </HStack>
  );
}

export default LoginScreen;
