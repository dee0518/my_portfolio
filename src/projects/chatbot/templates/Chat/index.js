// component
import { Box } from '../../../../Path'

// css
import './index.css'

function Chat(props){
    const { type, message } = props

    return (
        <Box boxClass={'chatbot-' + type + ' chat'}>
            {
                type === 'question' && <Box boxClass="back-img"></Box>
            }
            <Box boxClass="message">
                {message}
            </Box>
        </Box>
    )
}

export default Chat