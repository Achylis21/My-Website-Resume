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
        <div>
            <div className='row'>
                <h2>Technical Expertise</h2>
            </div>
            <div className="row">
                <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export {
    HomeContent,
    TechSkill
}