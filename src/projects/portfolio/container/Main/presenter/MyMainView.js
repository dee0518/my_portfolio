import { useState } from 'react'

// component
import { Box, Menu, ContentView } from '../../../../../Path'
import Introduce from './Introduce'
import TheLatestList from './TheLatestList'

// css
import './index.css'

function MyMainView(props){
    const { lists } = props
    const [listType, setListType] = useState('card')
    const [loadStatusClass, setLoadStatusClass] = useState('end-ani')

    const onClickListTypeBtn = (val) => {
        setListType(val)
    }

    return (
        <Box boxClass="main-wrap">
            <Menu loadStatusClass={loadStatusClass}/>
            <ContentView viewClass={''}>
                <Introduce/>
                <TheLatestList
                    listType={listType}
                    lists={lists}
                    onClickBtn={onClickListTypeBtn}
                />
            </ContentView>
        </Box>
    )
}

export default MyMainView