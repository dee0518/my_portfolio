import MyMainView from './presenter/MyMainView'

// data
import latestList from '../../LatestList'

function MyMainContainer(){
    return (
        <MyMainView lists={latestList}/>
    )
}

export default MyMainContainer