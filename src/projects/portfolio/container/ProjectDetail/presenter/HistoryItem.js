import { Box } from '../../../../../Path'

function HistoryItem(props){
    const { content, date } = props

    return (
        <Box boxClass={"history-item "}>
            <Box boxClass="content">{content}</Box>
            <Box boxClass="date">{date}</Box>
        </Box>
    )
}

export default HistoryItem