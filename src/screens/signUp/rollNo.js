import React, { useEffect, useState } from 'react';
import { Container, VStack, Heading, Text, FormControl, FormLabel, Input, Button, Center, Flex, Box } from '@chakra-ui/react';
import { colors } from '../../theme/index';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../state';
import { useNavigate } from 'react-router-dom';
// Import statements for Google reCAPTCHA
// import {
//     useGoogleReCaptcha,
//     GoogleReCaptchaProvider,
// } from "react-google-recaptcha-v3";
import SendOtp from './signUpApi/sendOTPApi';

const Login = () => {
    // Hook for executing Google reCAPTCHA
    // const { executeRecaptcha } = useGoogleReCaptcha();
    const [rollNo, setRollNo] = React.useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleStatusChange = () => {
            setIsOnline(navigator.onLine);
        };
        window.addEventListener("online", handleStatusChange);
        window.addEventListener("offline", handleStatusChange);
        return () => {
            window.removeEventListener("online", handleStatusChange);
            window.removeEventListener("offline", handleStatusChange);
        };
    }, [isOnline]);

    const handleContinue = async () => {
        dispatch(signUpUser({ rollNo }));
        if (!isOnline) {
            return;
        } else {
            if (rollNo.length !== 9 || rollNo.replace(/[^0-9]/g, "").length !== 9) {
                return;
            }
            
            let reCaptchaToken = "";
            // Check if executeRecaptcha function is available
            // if (!executeRecaptcha) {
            //     console.log("Cannot execute reCAPTCHA");
            // } else {
            //     reCaptchaToken = await executeRecaptcha();
            //     if (!rollNo || !reCaptchaToken) {
            //         console.log("Please fill in all the fields.");
            //         return;
            //     }
            // }
            
            if (!rollNo /* || !reCaptchaToken */) {
                console.log("Please fill all fields.");
            } else {
                try {
                    const sendOtpResponse = await SendOtp(rollNo, reCaptchaToken);
                    console.log(sendOtpResponse);
                    localStorage.setItem("rollNo", rollNo);
                    navigate("/register-otp");
                } catch (error) {
                    // Handle errors
                }
            }
        }
    };

    return (
        <Container h="100vh" w="100%" mx={0} px={0}>
            <Center h="full">
                <VStack spacing={12}>
                    <VStack spacing={[0.1, 0.5, 1]}>
                        <Heading fontWeight={700}>
                            Sign Up for Lynx
                        </Heading>
                        <Flex direction="row">
                            <Text color={colors.secondary} fontWeight={400} fontSize={"0.85em"}>
                                Already Registered?
                            </Text>
                            <Box width="3px" />
                            <Button as="i" textDecoration="underline" variant="link" onClick={() => {
                                navigate('/login');
                            }}>
                                <Text color={colors.secondary} fontWeight={400} fontSize={"0.85em"}>
                                    Login
                                </Text>
                            </Button>
                        </Flex>
                    </VStack>
                    <VStack spacing={4} w="100%">
                        <FormControl>
                            <FormLabel>ROLL NUMBER</FormLabel>
                            <Input
                                pr="4.5rem"
                                type="number"
                                variant="filled"
                                borderRadius="4px"
                                onChange={(e) => setRollNo(e.target.value)}
                                value={rollNo}
                            />
                        </FormControl>
                        <Button
                            w="full"
                            colorScheme="brand"
                            borderRadius="4px"
                            onClick={handleContinue}
                        >
                            Continue
                        </Button>
                    </VStack>
                </VStack>
            </Center>
        </Container>
    );
}

// Function to render the Login component with Google reCAPTCHA provider
export default function RollScreen() {
    const SITE_KEY = process.env.REACT_APP_SITE_KEY;
    return (
      // Commenting out the GoogleReCaptchaProvider
      // <GoogleReCaptchaProvider
      //   reCaptchaKey={SITE_KEY}
      //   scriptProps={{ async: true }}
      // >
        <Login />
      // </GoogleReCaptchaProvider>
    );
}
