import { Center, HStack, IButtonProps, Icon, IconButton, Button as NativeBaseButton } from "native-base";
import { AntDesign, Feather } from '@expo/vector-icons'


type Props = IButtonProps & {
    variant: 'create' | 'delete';
    onPress: (event: MouseEvent) => void
}

export function Button({ onPress, variant, ...rest }: Props) {

    return (

        <IconButton
            onPress={onPress}
            h={variant == 'create' ? 14 : 33}
            w={variant == 'create' ? 14 : 33}
            bg={variant == 'create' ? 'blue_dark' : 'gray.500'}
            icon={variant == 'create' ?
                <Icon as={AntDesign} name="pluscircleo" color={"gray.100"} /> :
                <Icon as={Feather} name="trash-2" color={"gray.300"} />

            }
            _hover={{
                bg: "orange.600:alpha.20"
            }}
            _pressed={{
                bg: variant == 'create' ? 'blue_light' : 'gray.400',
                _icon: {
                    color: variant == 'create' ? 'gray.100' : 'alert',
                }

            }} />

    )
}