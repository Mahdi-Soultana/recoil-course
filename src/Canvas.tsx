import {atom, useRecoilValue, useSetRecoilState} from 'recoil'
import {PageContainer} from './PageContainer'
import {Toolbar} from './Toolbar'
import {Rectangle} from './components/Rectangle/Rectangle'

export const elementsAtom = atom<number[]>({
    key: 'elementsAtom',
    default: [],
})
export const selectedElementAtom = atom<number | null>({
    key: 'selectedElementAtom',
    default: null,
})
function Canvas() {
    const elements = useRecoilValue(elementsAtom)

    const setSelectedElement = useSetRecoilState(selectedElementAtom)

    return (
        <PageContainer
            onClick={() => {
                setSelectedElement(null)
            }}
        >
            <Toolbar />
            {elements.map((id, index) => (
                <Rectangle key={index} id={id} />
            ))}
        </PageContainer>
    )
}

export default Canvas
