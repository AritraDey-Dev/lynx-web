import React from 'react';
import { Container, VStack, Heading, Text, Button, Avatar, Center, Input } from '@chakra-ui/react';
import { colors } from '../../theme/index';
import { useDispatch, useSelector } from 'react-redux';
import { photoUser } from '../../state';

const PhotoScreen = ({ onNext, onPrev }) => {
    const [photo, setPhoto] = React.useState('');
    const dispatch = useDispatch();
    const photoUrl = useSelector(state => state.registration.user_photo);

    const handleContinue = () => {
        dispatch(photoUser({ photo }));
        onNext();
    };

    return (
        <Container h="100vh" w="100%" mx={0} px={0}>
            <Center h="full">
                <VStack spacing={12}>
                    <VStack spacing={[0.1, 0.5, 1]}>
                        <Heading fontWeight={700}>
                            Profile Photo
                        </Heading>
                            <Text color={colors.secondary} fontWeight={400} fontSize={"0.85em"}>
                                Upload a profile photo
                            </Text>
                            <Text color={colors.secondary} fontWeight={400} fontSize={"0.85em"}>
                                This will be used by NIT Trichy for official purposes
                            </Text>
                    </VStack>
                    <VStack spacing={4} w="100%">
                    <Avatar size='2xl' src={ photoUrl } />
                    <Input
                    type='file' 
                    onChange={(e) => setPhoto(e.target.value)}
                    value={ photo }
                    my="1.5%"
                    />
                    <Text color={colors.secondary} fontWeight={400} fontSize={"0.85em"} maxW="60%" textAlign="center">
                        This step is optional. Your profile picture can be changed at any time.
                    </Text>
                        <Button
                            w="full"
                            colorScheme="brand"
                            borderRadius="4px"
                            onClick={handleContinue}
                            mt="1%"
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

export default PhotoScreen;
