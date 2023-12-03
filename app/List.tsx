import type { Todo } from "./page";

import { VStack, StackDivider, HStack, Text } from "@chakra-ui/react";

type ListProps = {
  todos: Todo[];
};

export const List: React.FC<ListProps> = ({todos}) => {
  return (
    <>
    <VStack
      divider={<StackDivider />}
      width="80%"
      bgColor="white"
      // color={{ sm: 'red.600', md: 'blue.600', lg: 'green.500', xl: 'red.600' }}
      borderColor="blackAlpha.100"
      borderWidth="1px"
      borderRadius="3px"
      p={5}
      alignItems="start"
    >
        <ul>
          {todos.map((todo) => {
            return (
              <HStack key={todo.id} spacing="5">
                <Text>{todo.text}</Text>
              </HStack>
            );
          })}
        </ul>
    </VStack>
    </>
  );
};
