import { Box, Span, PageTopForm } from '../../../../../Path'

function Introduce(){
    const title = <Span>Doeun's <Span spanClass="bg">Portfolio</Span></Span>
    const text = <Span>Hello! My name is Doeun, Hwang. My Portfolio consists mainly of the React projects.<Span>You can see my projects. if you want to contact me, please contact me at the email or phone.</Span></Span>

    return (
        <Box boxClass={'introduce-wrap'}>
            <PageTopForm
                title={title}
                text={text}
            />
            <Box boxClass="email">dehya0518@naver.com</Box>
            <Box boxClass="phone">010.8939.5018</Box>
        </Box>
    )
}

export default Introduce