import { Box } from '../../../../Path'
import './index.css'

function ListTitleForm(props){
    const { title, children } = props

    return (
        <Box boxClass={'list-title-form'}>
            <Box boxClass={'list-title'}>{title}</Box>
            {children}
        </Box>
    ) 
}

export default ListTitleForm