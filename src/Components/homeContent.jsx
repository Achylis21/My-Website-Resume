import STemp from './skillsTemp.jsx';
import './Styles/homeContent.css';
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
}
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
}
export {
    HomeContent,
    TechSkill
}