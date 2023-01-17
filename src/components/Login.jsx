import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { ChatIcon } from "@chakra-ui/icons";
import { Button, Box, Center, Stack, Heading } from "@chakra-ui/react";
import { auth } from "../firebaseConfig";
import { Flex, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Login = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("blackAlpha.100", "blue.900");
  const modeColor = useColorModeValue("orange.50", "gray.500");

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <>
      <Center h="100vh">
        <Stack align="center" bg={bgColor} p="16" rounded="3xl" spacing="12" boxShadow="lg">
          <Flex>
            <Heading px={3}> 聊天GO</Heading>
            <IconButton icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />} isRound="true" size="lg" alignSelf="flex-end" onClick={toggleColorMode} bg={modeColor} />
          </Flex>
          <Box bgColor="purple.300" w="fit-content" p={5} rounded="3xl">
            <ChatIcon w="100px" h="100px" color="white" />
          </Box>
          <Button boxShadow="md" onClick={() => signInWithGoogle("", { prompt: "select_account" })}>
            使用Google帳號登入
          </Button>
        </Stack>
      </Center>
    </>
  );
};

export default Login;
