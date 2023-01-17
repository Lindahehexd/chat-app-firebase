import { Button, Flex, FormControl, Input, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const BottomBar = ({ scroll }) => {
  const [input, setInput] = useState("");
  const formcolor = useColorModeValue("gray.200", "gray.600");
  const btncolor = useColorModeValue("gray.600", "pink.400");
  const btntxt = useColorModeValue("gray.50", "gray.50");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      photo: photoURL,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <FormControl as="form" p={3} onSubmit={sendMessage} bg={formcolor}>
      <Flex>
        <Input placeholder="輸入訊息..." onChange={(e) => setInput(e.target.value)} value={input} autoComplete="off" mr={2} maxLength="40" />
        <Button type="submit" bg={btncolor} color={btntxt} _hover={{ bg: "gray.500" }}>
          送出
        </Button>
      </Flex>
    </FormControl>
  );
};

export default BottomBar;
