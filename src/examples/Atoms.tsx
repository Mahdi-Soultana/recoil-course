import {atom, useRecoilState, useRecoilValue} from 'recoil'
const darkModeAtom = atom({
    default: false,
    key: 'darkMode',
})

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeAtom)
    return (
        <label>
            <input
                type="checkbox"
                checked={darkMode}
                name="checkbox"
                id="checkbox"
                onChange={(e) => setDarkMode(e.target.checked)}
            />
            darkMode
        </label>
    )
}
const Button = () => {
    const darkMode = useRecoilValue(darkModeAtom)
    return (
        <button
            style={{
                display: 'block',
                width: '130px',
                color: darkMode ? 'white' : 'black',
                background: darkMode ? 'black' : '#f6f6f6',
                padding: '.4rem',
            }}
        >
            My UI Button
        </button>
    )
}

function Atoms() {
    return (
        <div>
            <DarkModeSwitch />
            <Button />
        </div>
    )
}

export default Atoms
