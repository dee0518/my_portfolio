// component
import { Box, Button } from '../../../../Path'

// css
import './index.css'

function OptionButton(props){
    const { options } = props

    const onClick = (value) => {
        props.onClickOptionButton(value)
    }

    return (
        <Box boxClass={'option-button-group'}>
            {
                options.length > 0 && options.map((item,index) => {
                    return (
                        <Button
                            key={'ob'+index}
                            buttonClass={item.class} 
                            children={item.label} 
                            value={index}
                            onClick={onClick}
                        />
                    )
                })
            }
        </Box>
    )
}

export default OptionButton