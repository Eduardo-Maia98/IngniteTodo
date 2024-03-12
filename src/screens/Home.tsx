import { Box, FlatList, Image, Text, VStack } from "native-base";
import { Input } from "../components/Input";
import Counters from "../components/Counter";
import { useEffect, useState } from "react";
import { TasksDTO } from "../dtos/TasksDTO";
import EmptyList from "../components/EmptyList";


import Logo from '../assets/Logo.png'
import TaskCard from "../components/TaskCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
    const [tasks, setTasks] = useState<TasksDTO[]>([]);

    async function getTasks() {
        const storage = await AsyncStorage.getItem('tasks');
        const parsedTasks = storage ? JSON.parse(storage) : []
        setTasks(parsedTasks)
    }

    useEffect(() => {
        getTasks()
    },[])


    return (
        <VStack flex={1} >
            <Box h={"20%"} bgColor={"gray.700"} alignItems={'center'} justifyContent={"center"}>
                <Image source={Logo} />
            </Box>
            <Input setTask={setTasks} />

            <Box bgColor={"gray.600"} w={'100%'} flex={1} px={10} pt={20}>
                <Counters tasks={tasks} />

                <FlatList
                    data={tasks}
                    keyExtractor={(item: TasksDTO) => item.task}
                    renderItem={({ item }) => (
                        <TaskCard task={item} setTasks={setTasks} />
                    )}
                    ListEmptyComponent={() => (
                        <EmptyList />
                    )}

                />


            </Box>


        </VStack>

    )
}