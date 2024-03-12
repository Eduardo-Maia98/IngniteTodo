import { Box, Container, HStack, Text } from "native-base";
import { TasksDTO } from "../dtos/TasksDTO";
import { useEffect, useState } from "react";

type Props = {
    tasks: TasksDTO[]
}

export default function Counters({ tasks }: Props) {
    const [doneTasks, setDoneTasks] = useState(0)
    console.log(tasks, 'feitas')

    useEffect(() => {
        var dones = 0
        tasks.forEach(task => {
            if (task.done) {
                dones += 1
            }

        })
        setDoneTasks(dones)


    }, [tasks])
    
    return (
        <HStack justifyContent={'space-between'} w={'100%'}>
            <HStack alignItems={'center'} space={2}>

                <Text
                    fontFamily={'heading'}
                    fontSize={14}
                    color={'blue_light'}
                >
                    Criadas
                </Text>
                <Box w={25} h={19} bg={"gray.400"} alignItems={'center'} justifyContent={'center'} borderRadius={'full'}>
                    <Text
                        fontFamily={'heading'}
                        fontSize={12}
                        color={'gray.100'}
                    >
                        {tasks.length}
                    </Text>
                </Box>
            </HStack>

            <HStack alignItems={'center'} space={2}>
                <Text
                    fontFamily={'heading'}
                    fontSize={14}
                    color={'purple_light'}
                >
                    Concluídas
                </Text>

                <Box w={25} h={19} bg={"gray.400"} alignItems={'center'} justifyContent={'center'} borderRadius={'full'}>
                    <Text
                        fontFamily={'heading'}
                        fontSize={12}
                        color={'gray.100'}
                    >
                        {doneTasks}
                    </Text>
                </Box>
            </HStack>

        </HStack>
    )

}