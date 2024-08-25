    // const registrationScreens = [
    //     <RollScreen key={1} onNext={onNext} onPrev={onPrev} />,
    //     // <VerifyScreen key={2} onNext={onNext} onPrev={onPrev} />,
    //     // <DetailsPage key={3} onNext={onNext} onPrev={onPrev} />,
    //     // <DOBScreen key={4} onNext={onNext} onPrev={onPrev} />,
    //     // <PhotoScreen key={5} onNext={onNext} onPrev={onPrev} />,
    //     // <SetPasswordScreen key={6} onNext={onNext} onPrev={onPrev} />,
    //     // <SetPasswordScreen key={7} onNext={onNext} onPrev={onPrev} />,
    // ];

import React from 'react';
import { Container, HStack, Center, useBreakpointValue } from '@chakra-ui/react';
import { ReactComponent as LynxSplash } from './lynx_spash.svg';
import RollScreen from './rollNo';

const SignUp = () => {
  const splashRender = useBreakpointValue({ base: false, lg: true });

  return (
    <HStack justify={"center"} spacing={0} h={"100vh"}>
      <Container overflowX={"hidden"} h={"full"} m={0} p={0}>
        <RollScreen />
      </Container>
      {splashRender && (
        <Center h={"full"} m={0} p={0}>
          <LynxSplash style={{ height: "90%" }} />
        </Center>
      )}
    </HStack>
  );
};

export default SignUp;

