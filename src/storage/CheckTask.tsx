import AsyncStorage from "@react-native-async-storage/async-storage";
import { TasksDTO } from "../dtos/TasksDTO";

export default async function CheckTask(task: TasksDTO) {
    try {

        const currentTasks = await AsyncStorage.getItem('tasks')
        const parsedTasks = currentTasks ? JSON.parse(currentTasks) : []
        const filteredTasks = parsedTasks.filter((tasks: TasksDTO) => tasks.task === task.task)
        filteredTasks[0].done =  !filteredTasks[0].done

        await AsyncStorage.setItem('tasks', JSON.stringify(parsedTasks))
        return parsedTasks

    } catch (error) {
        throw error
    }
}