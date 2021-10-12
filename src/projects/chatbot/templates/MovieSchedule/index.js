// component
import { Box, Button, Span, Image } from '../../../../Path'

// css
import './index.css'

// img
import { chatbotImages } from '../../../../assets/ImportImages'

function MovieSchedule(props){
    const { selectedDate, selectedMovieTime, movieList } = props

    // date 변경
    const onClickDateBtn = (date) => {
        props.onClickDateBtn(date)
    }

    // 영화 & 영화시간 변경
    const onClickMovieTimeBtn = (time) => {
        props.onClickMovieTimeBtn(time)
    }

    return (
        <Box boxClass={'movie-schedule'}>
            <Box boxClass={'top'}>
                <Button buttonClass={'prev-btn'} onClick={onClickDateBtn} value={'-1'}>
                    <Image
                        imgSource={chatbotImages['arrow.svg']}
                        imgTitle={'이전'}
                    />
                </Button>
                <Span>{selectedDate}</Span>
                <Button buttonClass={'next-btn'} onClick={onClickDateBtn} value={'1'}>
                <Image
                        imgSource={chatbotImages['arrow.svg']}
                        imgTitle={'다음'}
                    />
                </Button>
            </Box>
            <Box boxClass={'movie-list'}>
                {
                    movieList.length > 0 && movieList.map((item,index) => {
                        return (
                            <MovieItem
                                key={'movie'+ index}
                                title={item.title}
                                times={item.times}
                                selectedMovieTime={selectedMovieTime}
                                onClick={onClickMovieTimeBtn}
                            />
                        )
                    })
                }
            </Box>
        </Box>
    )
}

function MovieItem(props){
    const { title, times, selectedMovieTime } = props

    const onClick = (value) => {
        props.onClick(value)
    }

    return (
        <Box boxClass={'movie-item'}>
            <Box boxClass={'movie-title'}>{title}</Box>
            <Box boxClass={'movie-time-list'}>
                {
                    times.length > 0 && times.map((time,index) => {
                        let btnClass = ''

                        if(selectedMovieTime.includes(title) && selectedMovieTime.includes(time)){
                            btnClass = 'selected'
                        }

                        return (
                            <Button
                                key={'time'+index}
                                buttonClass={btnClass}
                                children={time}
                                value={title + '_' + time}
                                onClick={onClick}
                            />
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default MovieSchedule