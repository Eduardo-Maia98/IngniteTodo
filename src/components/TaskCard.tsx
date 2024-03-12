import { Center, HStack, Text, VStack } from "native-base";
import { Button } from "./Button";
import { TasksDTO } from "../dtos/TasksDTO";
import CheckBox from "./Checkbox";
import CheckTask from "../storage/CheckTask";
import DeleteTask from "../storage/DeleteTask";

type Props = {
    task: TasksDTO;
    setTasks: (task: TasksDTO) => void;
}

export default function TaskCard({ task, setTasks }: Props) {


    async function handleCheckTask() {
        const storage = await CheckTask(task)
        setTasks(storage)
    }
    async function handleDeleteTask() {
        const storage = await DeleteTask(task)

        setTasks(storage)
    }

    return (
        <VStack mt={3} p={10} bg={"gray.500"} borderRadius={8} borderWidth={1} borderColor={"gray.400"}>
            <HStack alignItems={'center'} justifyContent={"space-between"}>
                <HStack>
                    <CheckBox onCheck={handleCheckTask} task={task} />

                    <Text color={task.done ? 'gray.300' : "gray.100"} textDecorationLine={task.done ? 'line-through' : 'none'}  >
                        {task.task}
                    </Text>
                </HStack>

                <Button variant={"delete"} onPress={() => handleDeleteTask()} />
            </HStack>

        </VStack>


    )

}