import {Icon, IconButton, VStack} from '@chakra-ui/react'
import {Square} from 'react-feather'
import {useSetRecoilState} from 'recoil'
import {elementsAtom} from './Canvas'

export const Toolbar = () => {
    const setElements = useSetRecoilState(elementsAtom)

    return (
        <VStack
            position="absolute"
            top="20px"
            left="20px"
            backgroundColor="white"
            padding={2}
            boxShadow="md"
            borderRadius="md"
            spacing={2}
        >
            <IconButton
                onClick={() => {
                    setElements((s) => [...s, s.length + 1])
                }}
                aria-label="Add rectangle"
                icon={<Icon style={{width: 24, height: 24}} as={Square} />}
            />
        </VStack>
    )
}
