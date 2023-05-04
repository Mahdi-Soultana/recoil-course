import {selectedElementAtom} from '../../Canvas'
import {Drag} from '../Drag'
import {RectangleContainer} from './RectangleContainer'
import {RectangleInner} from './RectangleInner'

import {atomFamily, useRecoilState} from 'recoil'

export type ElementStyle = {
    position: {top: number; left: number}
    size: {width: number; height: number}
}

export type Element = {style: ElementStyle}

const elementAtom = atomFamily<Element, number>({
    key: 'elementAtom',
    default: {style: {position: {left: 200, top: 200}, size: {width: 100, height: 100}}},
})

export const Rectangle = ({id}: {id: number}) => {
    const [element, setElement] = useRecoilState(elementAtom(id))
    const [selectedElement, setSelectedElement] = useRecoilState(selectedElementAtom)

    return (
        <Drag
            position={element.style.position}
            onDrag={(position) => {
                setElement({
                    style: {
                        ...element.style,
                        position,
                    },
                })
            }}
        >
            <div>
                <RectangleContainer
                    position={element.style.position}
                    size={element.style.size}
                    onSelect={() => {
                        setSelectedElement(id)
                    }}
                >
                    <RectangleInner selected={id === selectedElement} />
                </RectangleContainer>
            </div>
        </Drag>
    )
}
