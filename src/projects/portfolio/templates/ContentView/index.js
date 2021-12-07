import { Box } from '../../../../Path'
import './index.css'

function ContentView(props){
    const { viewClass, children } = props
    return (
        <Box boxClass={'content-view-wrap ' + viewClass}>
            {children}
        </Box>
    )
}

export default ContentView