import { Link } from 'react-router-dom'

import { Box, Image, H1, Span } from '../../../../Path'
import { MAIN, RESUME, PROJECT } from '../../../../navigation/CONSTANTS'

// image
import { portfolioImages } from '../../../../assets/ImportImages'

// css
import './index.css'

function Menu(props){
    const { loadStatusClass } = props

    return (
        <Box boxClass={'main-menu'}>
            <Box boxClass={'loader ' + loadStatusClass}>
                <H1 h1Class={'logo'}>
                    <Image 
                        imgClass={'logo-icon'} 
                        imgSource={portfolioImages['logo.svg']} 
                        imgTitle={"doeun's logo"}
                    />
                </H1>
            </Box>
            {/* <Link to={MAIN}>
                <Span>메인으로 이동</Span>
                <Image 
                    imgClass={'menu-icon'} 
                    imgSource={portfolioImages['home.svg']} 
                    imgTitle={'home'}
                />
            </Link>
            <Link to={RESUME}>
                <Span>이력서로 이동</Span>
                <Image 
                    imgClass={'menu-icon'} 
                    imgSource={portfolioImages['resume.svg']} 
                    imgTitle={'resume'}
                />
            </Link>
            <Link to={PROJECT}>
                <Span>프로젝트로 이동</Span>
                <Image 
                    imgClass={'menu-icon'} 
                    imgSource={portfolioImages['project.svg']} 
                    imgTitle={'project'}
                />
            </Link> */}
        </Box>
    )
}

export default Menu