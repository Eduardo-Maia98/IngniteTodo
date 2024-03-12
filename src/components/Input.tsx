import { Center, HStack, Input as NativeBaseInput } from "native-base";

import { Button } from "./Button";
import CreateNewTask from "../storage/CreteNewTask";
import { useState } from "react";

export function Input({ setTask }: any) {
    const [newTask, setNewTask] = useState('')

    async function handleCreateNewTask() {
        console.log(newTask)
        const tasks = await CreateNewTask(newTask)
        setTask(tasks);
    }

    return (
        <Center position={'absolute'} mt={160} zIndex={10} flex={1}>
            <HStack space={1} justifyContent={"center"} px={16}>

                <NativeBaseInput
                    w={"100%"}
                    h={14}
                    bg={"gray.500"}
                    fontSize={"md"}
                    color={"gray.100"}
                    fontFamily={"body"}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={"gray.300"}
                    borderColor={"gray.700"}
                    borderWidth={1}
                    value={newTask}
                    onChangeText={setNewTask}
                    _focus={{
                        bg: "gray.500",
                        borderWidth: "1px",
                        borderColor: "purple_dark",
                    }}

                />

                <Button variant={'create'} onPress={handleCreateNewTask} />
            </HStack>
        </Center>


    )
}