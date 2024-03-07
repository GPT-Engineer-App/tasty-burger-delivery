import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart, FaMotorcycle } from "react-icons/fa";

const burgers = [
  {
    id: 1,
    name: "Classic Burger",
    description: "A classic burger with cheese, lettuce, tomato, and our special sauce.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1693915862455-a83d49302acc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYnVyZ2VyfGVufDB8fHx8MTcwOTgyMzQyOXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Bacon Burger",
    description: "A juicy burger with crispy bacon, cheddar cheese, and BBQ sauce.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1561758033-7e924f619b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYWNvbiUyMGJ1cmdlcnxlbnwwfHx8fDE3MDk4MjM0Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Veggie Burger",
    description: "A delicious veggie patty with avocado, sprouts, and a vegan aioli.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2ZWdnaWUlMjBidXJnZXJ8ZW58MHx8fHwxNzA5ODIzNDMwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (burger) => {
    setCart([...cart, burger]);
  };

  const total = cart.reduce((acc, burger) => acc + burger.price, 0).toFixed(2);

  return (
    <Container maxW="container.lg">
      <VStack spacing={8} py={10}>
        <Image src="https://img.freepik.com/premium-wektory/streszczenie-kolorowy-ptak_621127-276.jpg" alt="Logo" width="150px" marginBottom="2rem" />
        <Heading>Sklep z Burgerami</Heading>
        <Text>Witamy w naszym sklepie z burgerami. Wybierz swojego ulubionego burgera i zamów dostawę do domu!</Text>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" wrap="wrap">
          {burgers.map((burger) => (
            <Box key={burger.id} p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" m={2}>
              <VStack>
                <Image src={burger.image} alt={burger.name} borderRadius="md" />
                <Heading size="md">{burger.name}</Heading>
                <Text>{burger.description}</Text>
                <Text fontWeight="bold">${burger.price}</Text>
                <Button leftIcon={<FaShoppingCart />} colorScheme="teal" onClick={() => addToCart(burger)}>
                  Dodaj do koszyka
                </Button>
              </VStack>
            </Box>
          ))}
        </Flex>
        <Box w="full" bg="gray.100" p={5} borderRadius="md">
          <Heading size="lg">Twój Koszyk</Heading>
          <Stack spacing={4} mt={4}>
            {cart.length === 0 ? (
              <Text>Twój koszyk jest pusty.</Text>
            ) : (
              cart.map((item, index) => (
                <Flex key={index} justify="space-between" align="center">
                  <Text>{item.name}</Text>
                  <Text>${item.price}</Text>
                </Flex>
              ))
            )}
            <Flex justify="space-between" borderTop="1px" borderColor="gray.300" pt={2} mt={2}>
              <Text fontWeight="bold">Suma:</Text>
              <Text fontWeight="bold">${total}</Text>
            </Flex>
            <Button leftIcon={<FaMotorcycle />} colorScheme="orange" isDisabled={cart.length === 0}>
              Zamów
            </Button>
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
