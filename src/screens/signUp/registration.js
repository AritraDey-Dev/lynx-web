import React from 'react';
import { Container, VStack, Heading, Text, FormControl, FormLabel, Input, Button, Center, Flex } from '@chakra-ui/react';
import { colors } from '../../theme/index';
import { useDispatch } from 'react-redux';
import { dobUser } from '../../state';

const DOBScreen = ({ onNext, onPrev }) => {
    const [dob, setDob] = React.useState('');
    const [address, setAddress] = React.useState('');
    const dispatch = useDispatch();

    const handleContinue = () => {
        dispatch(dobUser({ dob }));
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
                        </Flex>
                    </VStack>
                    <VStack spacing={4} w="100%">
                        <FormControl>
                            <FormLabel color={colors.secondary} fontSize={"0.8em"} fontWeight={700}>DATE OF BIRTH</FormLabel>
                            <Input
                                pr="4.5rem"
                                type="number"
                                variant="filled"
                                borderRadius="4px"
                                onChange={(e) => setDob(e.target.value)}
                                value={dob}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel color={colors.secondary} fontSize={"0.8em"} fontWeight={700}>PERMANENT ADDRESS</FormLabel>
                            <Input
                                pr="4.5rem"
                                type="number"
                                variant="filled"
                                borderRadius="4px"
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
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
        </Container>
    );
}

export default DOBScreen;
