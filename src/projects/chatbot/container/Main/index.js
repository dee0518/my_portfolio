import MainView from "./presenter/MainView"

// Stesp
import Steps from '../../Step'

function MainContainer(){
    return (
        <>
            <MainView Steps={Steps}/>
        </>
    )
}

export default MainContainer