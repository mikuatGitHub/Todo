"use client"
import { useState } from 'react';
import { List } from './List';

import { Heading, Input, Button, VStack, HStack } from '@chakra-ui/react';

export type Todo = {
  id: number;
  text: string;
};

export default function Page(){
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Todo1" },
    { id: 2, text: "Todo2" },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    setTodos([...todos, { id: todos.length + 1, text: inputText }]);
    setInputText("");
  };

  return (
    <>
      <VStack p="10" spacing="10">
        <Heading color="blue.200" fontSize="5xl">
          Todoリスト
        </Heading>

        <HStack>
        <Input
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="Todoを入力"
          _placeholder={{ opacity: "0.3", color: "gray.500" }}
          size="lg"
          p={3}
          bgColor="white"
          variant="flushed"
        />

        <Button
          colorScheme="blue"
          size="md"
          bgColor="white"
          variant="outline"
          px={7}
          type="button"
          onClick={handleClick}
        >
          追加
        </Button>
        </HStack>

        <List todos={todos} />
      </VStack>
    </>
  );
}
