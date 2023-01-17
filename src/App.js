import Login from "./components/Login";
import Display from "./components/Display";
import { auth } from "./firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Spinner, Center } from "@chakra-ui/react";

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (!user) {
    return <Login />;
  }

  return (
    <Center h="100vh">
      <Display />
    </Center>
  );
};

export default App;
