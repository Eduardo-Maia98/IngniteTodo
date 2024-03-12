import { Box, Center, Text, VStack } from "native-base";

export default function EmptyList() {
    return (
        <VStack mt={6} borderTopWidth={1} borderColor={'gray.400'}>
            <Center mt={32}>

                <Text
                    fontFamily={'heading'}
                    fontSize={14}
                    color={'gray.300'}
                >
                    Você ainda não tem tarefas cadastradas
                </Text>
                <Text
                    fontFamily={'body'}
                    fontSize={14}
                    color={'gray.300'}
                >
                    Crie tarefas e organize seus itens a fazer
                </Text>
            </Center>

        </VStack>
    )
}