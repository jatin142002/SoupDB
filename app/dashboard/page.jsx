import ProtectedRoute from "@/components/ProtectedRoute";
import Sidebar from "@/components/Sidebar";
import { Code, Container, Text } from "@mantine/core";

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export default function dashboard() {
  const passw = makeid(30);
  const dbname = makeid(20);
  return (
    <ProtectedRoute>
      <Sidebar />
      <Container p={20} px={40}>
        <Text sz="xl" fw={700}>
          Your Database URL
        </Text>
        <Code block mt={10}>
          postgres://admin:{passw}@mysuop.dev:5432/{dbname}
        </Code>
      </Container>
    </ProtectedRoute>
  );
}
