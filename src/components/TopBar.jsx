import LogOut from "./LogOut";
import { Heading, Flex, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const TopBar = () => {
  const title = useColorModeValue("gray.700", "blue.900");
  const txt = useColorModeValue("gray.50", "gray.50");

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex bg={title} h="80px" w="100%" align="center" justifyContent="space-between" p={5}>
      <IconButton icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />} isRound="true" size="lg" alignSelf="flex-end" onClick={toggleColorMode} />
      <Heading color={txt}>來聊天吧！</Heading>
      <LogOut />
    </Flex>
  );
};

export default TopBar;
