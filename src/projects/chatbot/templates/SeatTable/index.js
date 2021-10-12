// component
import { Box, Button, Span, Image } from '../../../../Path'

// css
import './index.css'

// img
import { chatbotImages } from '../../../../assets/ImportImages'

function SeatTable(props){
    const { peopleNum, seatList, selectedSeat } = props

    const onClickPeopleNumBtn = (num) => {
        props.onClickPeopleNumBtn(num)
    }

    const onClickSelectedSeat = (seatNum) => {
        props.onClickSelectedSeat(seatNum)
    }

    return (
        <Box boxClass={'seat-table-wrap'}>
            <Box boxClass={'people'}>
                <Box boxClass={'people-title'}>인원</Box>
                <Box boxClass={'num-wrap'}>
                    <Button buttonClass={'minus-btn'} onClick={onClickPeopleNumBtn} value={'-1'}>-</Button>
                    <Span>{peopleNum}</Span>
                    <Button buttonClass={'puls-btn'} onClick={onClickPeopleNumBtn} value={'1'}>+</Button>
                </Box>
            </Box>
            <Box boxClass={'seat-wrap'}>
                <Box boxClass={'screen'}>screen</Box>
                <Box boxClass={'all-seat'}>
                    {
                        seatList.length > 0 && seatList.map((item,index) => {
                            return (
                                <SeatRow
                                    key={'row' + index}
                                    rowNum={item}
                                    selectedSeat={selectedSeat}
                                    onClick={onClickSelectedSeat}
                                />
                            )
                        })
                    }
                </Box>
            </Box>
        </Box>
    )
}

function SeatRow(props){
    const { rowNum, selectedSeat } = props

    const columns = [1,2,3,4,5,6,7]

    const onClick = (number) => {
        props.onClick(number)
    }

    return (
        <Box boxClass={'seat-row'}>
            <Span>{rowNum}</Span>
            {
                columns.map((item,index) => {
                    let btnClass = ''
                    let seatNum = rowNum + item

                    if(selectedSeat.includes(seatNum)){
                        btnClass = 'selected'
                    }

                    return (
                        <Button
                            key={'seat' + index}
                            buttonClass={btnClass}
                            value={seatNum}
                            children={seatNum}
                            onClick={onClick}
                        />
                    )
                })
            }
        </Box>
    )
}

export default SeatTable