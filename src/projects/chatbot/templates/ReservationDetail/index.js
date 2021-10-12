// component
import { Box, Span } from '../../../../Path'

// css
import './index.css'

function ReservationDetail(props){
    const { movieInfo ,seatInfo } = props

    return (
        <Box boxClass={'reserv-detail-wrap'}>
            <Box boxClass={'image-wrap'}></Box>
            <Box boxClass={'info-wrap'}>
                <Box boxClass={'movie-info'}>
                    <Span spanClass={'movie-info-title'}>{movieInfo.split('_')[0]}</Span>
                    <Span spanClass={'movie-info-time'}>{movieInfo.split('_')[1]}</Span>
                </Box>
                <Box boxClass={'seat-info'}>
                    {
                        seatInfo.map((item,index) => {
                            if(index === 0){
                                return item
                            }
                            else {
                                return ', ' + item
                            }
                        })
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default ReservationDetail