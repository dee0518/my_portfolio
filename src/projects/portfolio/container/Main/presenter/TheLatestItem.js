import { Box } from '../../../../../Path'
import { Link } from 'react-router-dom'

// navigation
import { PROJECT } from '../../../../../navigation/CONSTANTS'

function TheLatestItem(props){
    const { id, status, title, content, date } = props

    return (
        <Link className="list-item" to={PROJECT + '/' + id}>
            <Box boxClass="status">{status}</Box>
            <Box boxClass="title">{title}</Box>
            <Box boxClass="content">{content}</Box>
            <Box boxClass="date-alarm">{date}</Box>
        </Link>
    )
}

export default TheLatestItem