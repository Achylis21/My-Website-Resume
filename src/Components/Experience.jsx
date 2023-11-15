import './Styles/Experience.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import image from '../Utils/svg/Experience-Vector1.svg';


function allIcons(r){
    let svg = {};
    r.keys().forEach((item, index) => { svg[item.replace('./', '')] = r(item); });
    return svg;
}
const gif = allIcons(require.context('../Utils/gif', false, /\.(gif)$/));

function Experience(){
    return (
        <div>
            <div className='container-fluid text-center' id='firstDivExp'>
                <div className="row">
                    <div className="col mb-5">
                        <h1 className='text-light'>My Experience</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={ image } alt='' style={{width: '400px', height: 'auto'}}/>
                    </div>
                </div>
            </div>
            <div className='container-fluid pd-0 pt-5'>
                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-5" id='firstExpCol'>
                        <div className="container-fluid text-center" id='firstExp'>
                            <h1>University of Makati</h1>
                            <h5>Computer Science Student</h5>
                            <p className='pt-3 pb-0 mb-0'>Course: Bachelor of Science in Computer Science Major in Application Development</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-2">
                        <div className="container-fluid text-center">
                            <p style={{fontWeight: '600', color:'#8993d6'}}>University Year: 2019 - 2023</p>
                        </div>
                    </div>
                </div>
                <div className='row mb-5 pb-5 justify-content-center'>
                    <VerticalTimeline lineColor='#5485ff' className='vertical-timeline'>
                        <VerticalTimelineElement
                            iconStyle={{ 
                                background: 'white', boxShadow:'0 0 0 4px #5485ff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)',
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center'
                            }}
                            icon={<img src={ gif['graduate.gif'] } alt="GIF Icon" style={{ width: '70%', height: 'auto' }}/>}
                        />
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'rgb(87, 101, 197)', border: '2px solid #395abb' }}
                            contentArrowStyle={{ borderRight: '7px solid #395abb' }}
                            date="March 2020 - August 2023"
                            iconStyle={{ 
                                background: 'white', boxShadow:'0 0 0 4px #5485ff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)',
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center'
                            }}
                            icon={ <img src={ gif['bank.gif'] } alt="GIF Icon" style={{ width: '70%', height: 'auto' }}/> }
                        >
                            <h1 className="vertical-timeline-element-title">Eastwest Banking Corporation</h1>
                            <h5 className="vertical-timeline-element-subtitle">Software Quality Assurance</h5>
                            <p>
                            Duties and assignments for this position will be as follows:
                            </p>
                            <ul>
                                <li>Basic Technical Documentation</li>
                                <li>Test Planning Support and Documentation</li>
                                <li>Test Case Execution</li>
                                <li>Basic IT Project Management Support</li>
                                <li>other basic IT-Related Task</li>
                            </ul>
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
                            <h3 className="vertical-timeline-element-title">To be edited..</h3>
                            <p>
                            To be edited..
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    );
}

export default Experience;