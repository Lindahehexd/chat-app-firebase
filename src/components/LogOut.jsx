import { auth } from "../firebaseConfig";
import { Button } from "@chakra-ui/react";

const LogOut = () => {

  return (
    <Button boxShadow="md" onClick={() => auth.signOut(auth)}>
      登出
    </Button>
  );
};

export default LogOut;
