import { useContext } from 'react'
import { ThemeContext } from '../App'

function Paragraph() {

    const theme = useContext(ThemeContext)

    return (
        <div>
            <p className={theme}>
                Xin chào moi nguoi
            </p>
        </div>
    )
}

export default Paragraph