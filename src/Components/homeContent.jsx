import STemp from './skillsTemp.jsx';
import './Styles/homeContent.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function allIcons(r){
    let svg = {};
    r.keys().forEach((item, index) => { svg[item.replace('./', '')] = r(item); });
    return svg;
}
const gif = allIcons(require.context('../Utils/gif', false, /\.(gif)$/));

const HomeContent = () => {
    return(
        <div className="About me">
            <p>
            I am a graduate of Bachelor of Science in Computer Science Major in Application Development at the University of Makati who want to pursue a career in software development and gain a challenging position that fully utilizes my skills and provides me with appropriate opportunities to grow my technical and communication skills
            <br/>
            <br/>
            </p>
        </div>
    );
};
const TechSkill = () => {
    return(
        <div className='container-fluid pd-0'>
            <div className='row text-center mb-5'>
                <h2>Technical Expertise</h2>
            </div>
            <div className="row mb-3 justify-content-center">
                {/* Java */}
                <div class="col-sm-2 px-0 mx-3">
                    <STemp value={50} year={1} level={1} logo={0} title={0}/>
                </div>
                {/* C# */}
                <div class="col-sm-2 px-0 mx-3">
                    <STemp value={50} year={2} level={1} logo={1} title={1}/>
                </div>
                {/* JavaScript */}
                <div class="col-sm-2 px-0 mx-3">
                    <STemp value={80} year={2} level={1} logo={2} title={2}/>
                </div>
                {/* HTML */}
                <div class="col-sm-2 px-0 mx-3">
                    <STemp value={100} year={2} level={2} logo={3} title={3}/>
                </div>
                {/* CSS */}
                <div class="col-sm-2 px-0 mx-3">
                    <STemp value={90} year={2} level={2} logo={4} title={4}/>
                </div>
            </div>
        </div>
    );
};
const DocSkills = () => {
    return(
        <div className='container-fluid pd-0'>
            <div className='row text-center mb-5'>
                <h2>Documentation Expertise</h2>
            </div>
            <div className="row mb-3 justify-content-center">
            {Array.from({ length: 3 }, (_, i) => (
                <div className="col-sm-2 px-0 mx-3" key={i + 5}>
                <STemp value={80} year={-1} level={1} logo={i + 5} title={i + 5} />
                </div>
            ))}
            </div>
        </div>
    );
}
const MyAchieve = () => {
    return(
        <div className='container-fluid pd-0'>
            <div className='row text-center mt-5 pt-5 mb-5'>
                <h2>Achievements</h2>
            </div>
            <div className='row mb-5 pb-5'>
                <VerticalTimeline lineColor='#5485ff'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'rgb(87, 101, 197)', border: '2px solid #395abb' }}
                        contentArrowStyle={{ borderRight: '7px solid #395abb' }}
                        date="2020 - 2023"
                        iconStyle={{ 
                            background: 'white', boxShadow:'0 0 0 4px #5485ff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)',
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center'
                        }}
                        icon={ <img src={ gif['badge.gif'] } alt="GIF Icon" style={{ width: '80%', height: 'auto' }}/> }
                    >
                        <h1 className="vertical-timeline-element-title">Dean's Lister</h1>
                        <h5 className="vertical-timeline-element-subtitle">University of Makati</h5>
                        <p>
                        Course: Bachelor of Science in Computer Science Major in Application Development
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ 
                            background: 'white', boxShadow:'0 0 0 4px #5485ff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)',
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center'
                        }}
                        icon={ <img src={ gif['to-be-cont.gif'] } alt="GIF Icon" style={{ width: '60%', height: 'auto' }}/> }
                    >
                        <h3 className="vertical-timeline-element-title">To be replaced</h3>
                        <p>
                        This section will be replaced if the developer acquired another achievement
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'white', boxShadow:'0 0 0 4px #5485ff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)'}}
                        // icon={<WorkIcon />}
                    />
                </VerticalTimeline>
            </div>
        </div>
    );
}
export{
    HomeContent, TechSkill, DocSkills, MyAchieve
}