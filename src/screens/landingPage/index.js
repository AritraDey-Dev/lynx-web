import React from 'react';
import { Container, VStack, Button, Center, Image, HStack, useBreakpointValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import logo from '../../res/LynxAuthLogo.png';
import { ReactComponent as LynxSplash } from '../../res/lynx_spash.svg';

const OptionScreen = () => {

    const navigate = useNavigate();

    const splashRender = useBreakpointValue({ base: false, lg: true });

    return (
        <HStack justify={"center"} spacing={0} h={"100vh"}>
            <Container overflowX={"hidden"} h={"full"} m={0} p={0}>
                <HStack style={{ transition: "1s" }}>
                    <Container h="100vh" w="100%" mx={0} px={0}>
                        <Center h="full">
                            <VStack spacing={12}>
                                <Image src={logo} />
                                <VStack spacing={4} w="100%">
                                    <Button
                                        w={"full"}
                                        colorScheme={"brand"}
                                        marginTop={5}
                                        borderRadius={"4px"}
                                        onClick={() => { navigate('/login'); }}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        w={"full"}
                                        variant={"ghost"}
                                        borderRadius={"4px"}
                                        onClick={() => { navigate('/register-rollNo'); }}
                                    >
                                        Sign Up
                                    </Button>
                                </VStack>
                            </VStack>
                        </Center>
                    </Container>
                </HStack>
            </Container >
            {splashRender && (
                <Center h={"full"} m={0} p={0}>
                    <LynxSplash style={{ height: "90%" }} />
                </Center>
            )}
        </HStack >
    );
};

export default OptionScreen;
