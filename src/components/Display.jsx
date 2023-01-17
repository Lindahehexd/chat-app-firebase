import { useState, useEffect, useRef } from "react";
import { db } from "../firebaseConfig";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { auth } from "../firebaseConfig";
import { Avatar, Flex, Text, useColorModeValue, Stack } from "@chakra-ui/react";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";

const Display = () => {
  const [message, setMessage] = useState([]);
  const scroll = useRef();

  const senderColor = useColorModeValue("gray.800", "gray.800");
  const timec = useColorModeValue("gray.800", "gray.50");
  const bg = useColorModeValue("blackAlpha.100", "gray.700");

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessage(messages);
    });
    return () => unsubscribe();
  }, []);

  const getMessages = () =>
    message.map((message) => {
      const date = new Date(message.timestamp?.seconds * 1000);
      const showMonthAndYear = {
        month: "long",
        day: "numeric",
      };
      let time = date.getHours() + ":" + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
      const newDate = date.toLocaleDateString("zh-TW", showMonthAndYear);
      const sender = message.uid === auth.currentUser.uid;
      return (
        <Stack key={message.timestamp}>
          <Flex direction={sender ? "row-reverse" : "flex-start"} mx={1} fontSize="sm" color={timec}>
            <Text>{`${newDate}  ${time}`}</Text>
          </Flex>
          <Flex direction={sender ? "row-reverse" : "flex-start"}>
            <Flex direction={sender ? "row-reverse" : "flex-start"} mx={1} mb={3} justifyContent="center" align="center">
              <Avatar src={message.photo} alt="user photo" />
              <Text bg={sender ? "green.200" : "pink.100"} borderRadius="lg" p={2} mx={3} color={senderColor}>
                {message.text}
              </Text>
            </Flex>
          </Flex>
        </Stack>
      );
    });

  return (
    <Flex w="100vh" h="100vh" direction="column" bg={bg} maxWidth="768px" minWidth="368px">
      <TopBar />
      <Flex flex={1} direction="column" pt={4} mx={5} overflowX="scroll" sx={{ "::-webkit-scrollbar": { display: "none" } }}>
        {getMessages()}
        <div ref={scroll}></div>
      </Flex>
      <BottomBar scroll={scroll} />
    </Flex>
  );
};

export default Display;
