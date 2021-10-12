import { useState, useEffect } from "react"

// css
import './index.css'

// data
import MovieList from "../../../virtualData/MovieList"

// component
import { Box } from '../../../../../Path'
import Chat from '../../../templates/Chat'
import OptionButton from '../../../templates/OptionButton'
import MovieSchedule from '../../../templates/MovieSchedule'
import SeatTable from "../../../templates/SeatTable"
import ReservationDetail from "../../../templates/ReservationDetail"

// utils
const utils = require('../../../../../utils/Utils')

function MainView(props){
    const { Steps } = props

    // STEP
    const [steps,setSteps] = useState(Steps)
    const [renderedSteps,setRenderedSteps] = useState([])
    const [previousSteps,setPreviousSteps] = useState([])
    const [currentStep,setCurrentStep] = useState()

    // 티켓 예매관련 정보
    const today = new Date()
    const setToday = utils.mm_dd_dot(today) + ' ('+ utils.weekDayInEng[today.getDay()] +')'
    const [selectedDate,setSelectedDate] = useState(setToday)
    const [selectedMovieTime,setSelectedMovieTime] = useState('')
    const [movieList, setMovieInfo] = useState(MovieList)
    const [peopleNum,setPeopleNum] = useState(0)
    const seatList = ['A','B','C','D','E','F']
    const [selectedSeat,setSelectedSeat] = useState([])
    
    // id와 type값으로 renderedSteps에 요소를 추가하는 함수
    const onSetChatbotState = (id, type) => {
        setPreviousSteps(renderedSteps)
        setCurrentStep(id)
    
        let child = ''
    
        steps.map((item) => {
            if(item.id === id){
                child = item
            }
    
             return item
        })
        
        if(type === 'add'){
            setRenderedSteps([...renderedSteps, child])
        }
    
        if(type.includes('delete')){
            let RefId;

            if(type === 'delete'){
                RefId = renderedSteps.length - 1
            }
            else {
                let splitGroup = type.split('_')
                
                RefId = Number(splitGroup[1]) + 1
            }
            
            setRenderedSteps(renderedSteps.filter((item) => { 
                return item.id < RefId
            })) 
        }  
    }

    // 옵션 버튼 클릭했을 경우
    const onClickOptionButton = (value) => {
        let lastIndex = renderedSteps.length - 1
        let triggerValue  = renderedSteps[lastIndex].options[value].trigger
        let callback = renderedSteps[lastIndex].options[value].callback
        
        if(callback === 'none'){
            onSetChatbotState(triggerValue, 'delete')
        }
        else if(callback.includes('delete')){
            if(currentStep === 8 && selectedMovieTime !== ''){
                setSteps(steps.map((item) => {
                    if(item.id === 9){
                        return {...item, message: selectedDate}
                    }
                    else if(item.id === 10){
                        let splitGroup = selectedMovieTime.split('_')

                        return {...item, message: splitGroup[0] + ' ' + splitGroup[1]}
                    }
                    else {
                        return item
                    }
                }))
                onSetChatbotState(triggerValue, callback)
            }

            if(currentStep === 13){
                if(value === 0 && selectedSeat.length > 0 && selectedSeat.length === peopleNum){
                    let selectedSeatList = ''
                    selectedSeat.map((item, index) => {
                        if(index === 0){
                            selectedSeatList += item
                        }
                        else {
                            selectedSeatList += ', ' + item
                        }
                    })

                    setSteps(steps.map((item) => {
                        if(item.id === 14){
                            return {...item, message: <Box>인원 : {peopleNum}명<Box>좌석 : {selectedSeatList}</Box></Box>}
                        }
                        else {
                            return item
                        }
                    }))

                    onSetChatbotState(triggerValue, callback)
                }

                if(value === 1) {
                    setSelectedDate(setToday)
                    setSelectedMovieTime('')
                    onSetChatbotState(triggerValue, callback)
                }
            }
        }
    }

    // 날짜 및 영화리스트 변경
    const onClickDateBtn = (date) => {
        const year = today.getFullYear()
        const currentDate = new Date(year + ' ' + selectedDate)
        const changeDate = currentDate.getDate() + Number(date)
        currentDate.setDate(changeDate)
        const setNewday = utils.mm_dd_dot(currentDate) + ' ('+ utils.weekDayInEng[currentDate.getDay()] +')'

        const newToday = new Date(year + ' ' + utils.mm_dd_dot(today))
        const afterThreeDate = new Date(year + ' ' + utils.mm_dd_dot(today))
        const chageAfterDate = afterThreeDate.getDate() + 3
        afterThreeDate.setDate(chageAfterDate)
        
        // 오늘 날짜부터 3일 이후로만 검색되도록 기간 설정
        if(currentDate >= newToday && currentDate <= afterThreeDate){
            setSelectedDate(setNewday)
        }  
    }

    // 선택한 영화와 시간 state값 설정
    const onClickMovieTimeBtn = (time) => {
        setSelectedMovieTime(time)
    }

    // 선택한 인원수 state값 변경
    const onClickPeopleNumBtn = (num) => {
        let newPeopleNum = peopleNum + Number(num)

        if(newPeopleNum >= 0 && newPeopleNum <= 7){
            setPeopleNum(newPeopleNum)
        }
    }

    // 선택한 좌석 state값 변경
    const onClickSelectedSeat = (seatNum) => {
        if(peopleNum > 0){
            if(selectedSeat.indexOf(seatNum) !== -1){
                setSelectedSeat(selectedSeat.filter((item) => { return item !== seatNum }))
            }
            else {
                if(selectedSeat.length < peopleNum){
                    setSelectedSeat([...selectedSeat,seatNum])
                }
            } 
        }
    }

    // 처음 렌더
    useEffect(() => {
        if(renderedSteps.length === 0){
            onSetChatbotState(0, 'add')
        }
    },[])

    // 출력할 단계 생성
    useEffect(() => {
        if(renderedSteps.length > 0){
          let lastIndex = renderedSteps.length - 1
          let renderedStepsLength = renderedSteps.length
          let previousStepsLength = previousSteps.length 
          
          if(renderedSteps[lastIndex].trigger !== 'none'){
            if(previousStepsLength < renderedStepsLength){
              setTimeout(() => {
                onSetChatbotState(renderedSteps[lastIndex].trigger, 'add')
              },300) 
            }
      
            if(previousStepsLength > renderedStepsLength){
              setTimeout(() => {
                onSetChatbotState(currentStep, 'add')
              },300) 
            }
          }
          else {
            if(previousStepsLength > renderedStepsLength){
              let lastIndex = renderedSteps.length - 1
    
              setRenderedSteps(renderedSteps.filter((item,index) => { return index !== lastIndex}))
            }
          }
        }
    
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight, 
            left: 0, 
            behavior: 'smooth'
          })
        },1000)
      },[renderedSteps])
    
    
    return (
        <Box boxClass={'chatbot-main-wrap'}>
            {/* header */}
            <Box boxClass={'chatbot-header'}>아이 티켓</Box>

            {/* chat */}
            {
                renderedSteps.length > 0 && renderedSteps.map((item,index) => {
                    if(item.type === 'button'){
                        return (
                            <OptionButton
                                key={index}
                                options={item.options}
                                onClickOptionButton={onClickOptionButton}
                            />
                        )
                    }

                    if(item.type === 'question' || item.type === 'answer'){
                        return (
                            <Chat
                                key={index}
                                type={item.type}
                                message={item.message}
                            />
                        )
                    }

                    if(item.type === 'movie'){
                        return (
                            <MovieSchedule
                                key={index}
                                selectedDate={selectedDate}
                                selectedMovieTime={selectedMovieTime}
                                movieList={movieList}
                                onClickDateBtn={onClickDateBtn}
                                onClickMovieTimeBtn={onClickMovieTimeBtn}
                            />
                        )
                    }

                    if(item.type === 'seat'){
                        return (
                            <SeatTable
                                key={index}
                                peopleNum={peopleNum}
                                seatList={seatList}
                                selectedSeat={selectedSeat}
                                onClickPeopleNumBtn={onClickPeopleNumBtn}
                                onClickSelectedSeat={onClickSelectedSeat}
                            />
                        )
                    }

                    if(item.type === 'complete'){
                        return (
                            <ReservationDetail
                                key={index}
                                movieInfo={selectedMovieTime} 
                                seatInfo={selectedSeat}
                            />
                        )
                    }
                })
            }
        </Box>
    )
}

export default MainView