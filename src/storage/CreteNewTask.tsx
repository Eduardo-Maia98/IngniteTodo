import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function CreateNewTask(task: string) {
    try {
        //await AsyncStorage.clear()
        const currentTasks = await AsyncStorage.getItem('tasks')
        const parsedTasks = currentTasks ? JSON.parse(currentTasks) : []
        const newTask = {
            task: task,
            done: false
        }
        parsedTasks.push(newTask)
        console.log(parsedTasks)
        await AsyncStorage.setItem('tasks', JSON.stringify(parsedTasks))
        console.log(parsedTasks, 'asdas')
        return parsedTasks


    } catch (error) {
        throw error
    }
}