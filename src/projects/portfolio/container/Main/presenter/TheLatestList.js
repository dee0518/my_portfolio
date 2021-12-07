import { Box, Button, ListTitleForm } from '../../../../../Path'
import TheLatestItem from './TheLatestItem'

function TheLatestList(props){
    const { listType, lists } = props

    const onClickBtn = (value) => {
        props.onClickBtn(value)
    }

    return (
        <Box boxClass={'list-wrap'}>
            <ListTitleForm title={'The Latest'}>
                <Box boxClass={'right-layout'}>
                    <Button
                        buttonClass={listType === 'card'? 'type-btn on' : 'type-btn'}
                        value={'card'}
                        children={'card'}
                        onClick={onClickBtn}
                    />
                    <Button
                        buttonClass={listType === 'table'? 'type-btn on' : 'type-btn'}
                        value={'table'}
                        children={'table'}
                        onClick={onClickBtn}
                    />
                </Box>
            </ListTitleForm>
            <Box boxClass={'list-contents ' + listType}>
                {
                    lists.length > 0 && lists.map((item) => {
                        return <TheLatestItem
                            key={item.id}
                            id={item.id}
                            status={item.status} 
                            title={item.title} 
                            content={item.content} 
                            date={item.createdAt}
                        />
                    })
                }
            </Box>
        </Box>
    )
}

export default TheLatestList