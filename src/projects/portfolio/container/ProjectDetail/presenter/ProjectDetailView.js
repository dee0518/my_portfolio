import { Link } from 'react-router-dom'

// component
import { Box, ContentView, Menu, PageTopForm, ListTitleForm } from '../../../../../Path'
import HistoryItem from './HistoryItem'

// css
import './index.css'

function ProjectDetailView(props){
    const { project } = props
    
    return (
        <Box boxClass="project-detail-wrap">
            <Menu loadStatusClass="end-ani"/>
            <ContentView viewClass={''}>
                <PageTopForm
                    title={project.title}
                    text={project.description}
                />
                <Link className="url-btn" to={project.url}>웹사이트로 이동</Link>
                <ListTitleForm
                    title={'History'}
                    children={''}
                />
                <Box boxClass={'history-table'}>
                    {
                        project.history.length > 0 && project.history.map((item) => {
                            return (
                                <HistoryItem
                                    key={item.id}
                                    content={item.content}
                                    date={item.createdAt}
                                />
                            )
                        })
                    }
                </Box>
            </ContentView>
        </Box>
    )
}

export default ProjectDetailView