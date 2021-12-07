import { Box, Paragraph } from '../../../../Path'
import './index.css'

function PageTopForm(props){
    const { title, text } = props

    return (
        <Box boxClass={'page-top-form'}>
            <Box boxClass={'page-top-form-title'}>{title}</Box>
            <Paragraph pClass={'page-top-form-text'}>{text}</Paragraph>
        </Box>
    )
}

export default PageTopForm