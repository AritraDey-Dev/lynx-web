import React from 'react';
import { Container, VStack, Heading, Text, Button, Center, PinInput, PinInputField, HStack, Spacer, Box, IconButton } from '@chakra-ui/react';
import { colors } from '../../theme/index';
import { useDispatch } from 'react-redux';
import { verifyUser } from '../../state';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';


const VerifyScreen = () => {
    const [otp, setOtp] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleContinue = () => {
        dispatch(verifyUser({ otp }));
        navigate("/register-details");
    };

    const handleView = () => {
        setShowPassword(!showPassword);
    };

    const handlePrev = () => {
        navigate("/register-rollNo");
    };

    return (
        <Container h="100vh" w="100%" mx={0} px={0}>
            <Center h="full">
                <VStack spacing={12}>
                    <VStack spacing={[0.1, 0.5, 1]}>
                        <Heading fontWeight={700}>
                            Verify your Account
                        </Heading>
                            <Text color={colors.secondary} fontWeight={400} fontSize={"0.85em"}>
                                Enter the OTP sent on your webmail
                            </Text>
                    </VStack>
                    <VStack spacing={4} w="100%">
                        <Box p='1%'>
                        <HStack>
                            <Center>
                            <PinInput 
                            size="md"
                            otp
                            mask={showPassword}
                            onChange={ (e) => setOtp(e) }
                            >
                                <PinInputField w="10%" mx="1%"/>
                                <PinInputField w="10%" mx="1%"/>
                                <PinInputField w="10%" mx="1%"/>
                                <PinInputField w="10%" mx="1%"/>
                                <PinInputField w="10%" mx="1%"/>
                                <PinInputField w="10%" mx="1%"/>
                            </PinInput>
                            <IconButton 
                            aria-label={showPassword? 'Show Password' : 'Hide Password'}
                            icon={showPassword? <ViewIcon/> : <ViewOffIcon/>}
                            size='md'
                            onClick={handleView}
                            />
                            </Center>
                        </HStack>
                        </Box>
                        <Spacer h='1%'/>
                        <Button
                            w="full"
                            maxW="50%"
                            colorScheme="brand"
                            borderRadius="4px"
                            onClick={handleContinue}
                        >
                            Continue
                        </Button>
                        <Button
                            w={"full"} 
                            maxW="50%"
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

export default VerifyScreen;
