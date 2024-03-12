import AsyncStorage from "@react-native-async-storage/async-storage";
import { TasksDTO } from "../dtos/TasksDTO";

export default async function DeleteTask(task: TasksDTO) {
    try {

        const currentTasks = await AsyncStorage.getItem('tasks')
        const parsedTasks = currentTasks ? JSON.parse(currentTasks) : []
        const filteredTasks = parsedTasks.filter((tasks: TasksDTO) => tasks.task !== task.task)
        
        await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks))
        
        return filteredTasks

    } catch (error) {
        throw error
    }
}