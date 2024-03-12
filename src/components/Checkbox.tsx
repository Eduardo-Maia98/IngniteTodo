import { Box, Checkbox } from "native-base";
import { TasksDTO } from "../dtos/TasksDTO";

type Props = {
    task: TasksDTO;
    onCheck: (value: boolean) => void;
}

export default function CheckBox({ task, onCheck }: Props) {
    return (
        <Checkbox value="true"
            borderRadius={'full'}
            bg={"gray.500"}
            borderColor={'blue_light'}
            _checked={{
                bg: 'purple_dark',
                borderColor: 'purple_dark'
            }}
            _pressed={{
                bg: 'purple_dark',
                borderColor: 'purple_dark'
            }}
            isChecked={task.done}
            onChange={(value) => onCheck(value)}

        > <Box></Box></Checkbox>
    )

}