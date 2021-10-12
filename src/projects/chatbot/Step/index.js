import React from 'react'
import { Span } from '../../../Path'

const steps = [{
    id: 0,
    type: 'question',
    message : <Span><Span spanClass={'block'}>안녕하세요! 아이티켓 챗봇입니다.</Span>무엇을 도와드릴까요?</Span>,
    trigger: 1
},{
    id: 1,
    type: 'button',
    options: [
        { label: '문의할래요', trigger: 2, class: 'red', callback: 'none' },
        { label: '영화 예매할래요', trigger: 5, class: 'red', callback: 'none' }
    ],
    trigger: 'none'
},{
    id: 2,
    type: 'question',
    message : '문의할 내용을 작성해주세요.',
    trigger: 3
},{
    id: 3,
    type: 'answer',
    message : '영화관 운영시간을 문의합니다.',
    trigger: 4
},{
    id: 4,
    type: 'question',
    message : <Span><Span spanClass={'block'}>문의 내용이 전송되었습니다.</Span>담당자가 곧 답변을 보내드리겠습니다.</Span>,
    trigger: 'none'
},{
    id: 5,
    type: 'answer',
    message : '영화 예매할래요.',
    trigger: 6
},{
    id: 6,
    type: 'question',
    message : <Span><Span spanClass={'block'}>현재 상영하고 있는 영화입니다.</Span>영화를 선택해주세요.</Span>,
    trigger: 7
},{
    id: 7,
    type: 'movie',
    options : '',
    trigger: 8
},{
    id: 8,
    type: 'button',
    options: [
        { label: '선택한 영화를 보고 싶어요!', trigger: 9, class: 'red', callback: 'delete_6' }
    ],
    trigger: 'none'
},{
    id: 9,
    type: 'answer',
    message : '영화 날짜',
    trigger: 10
},{
    id: 10,
    type: 'answer',
    message : '영화 제목 및 시간',
    trigger: 11
},{
    id: 11,
    type: 'question',
    message : '영화를 보고 싶은 인원과 좌석을 선택해주세요.',
    trigger: 12
},{
    id: 12,
    type: 'seat',
    options : '',
    trigger: 13
},{
    id: 13,
    type: 'button',
    options: [
        { label: '다음 단계로 진행할래요', trigger: 14, class: 'red', callback: 'delete_11' },
        { label: '영화를 다시 선택할래요!', trigger: 6, class: 'gray', callback: 'delete_5' }
    ],
    trigger: 'none'
},{
    id: 14,
    type: 'answer',
    message : '좌석과 인원 표시',
    trigger: 15
},{
    id: 15,
    type: 'question',
    message : '예매가 완료되었습니다.',
    trigger: 16
},{
    id: 16,
    type: 'complete',
    trigger: 'none'
}]

export default steps