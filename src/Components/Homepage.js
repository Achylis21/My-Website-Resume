import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './Styles/Homepage.css';
import HomeContent from './homeContent';
import Profile from './img/Profile.jpg';

function Homepage() {
    const handleClick = (url) => {
        if(url === 1){
            window.open('https://linkedin.com/in/daniel-ivan-francisco-5a439b263', "_blank", "noreferrer");
        }
        if(url === 2){
            window.open('https://github.com/Achylis21', "_blank", "noreferrer");
        }
    }
    return(
        <div id='Homepage'>
            <div id='wavyImage'>
                <div className='container'>
                    <div class="card mb-3" id='sentence'>
                        <div class="row">
                            <div class="col-md-8">
                                <div class="card-body bg-transparent">
                                    <h1>Hi! I am Daniel,</h1>
                                    <p>A graduate with a degree in Computer Science. I am an aspiring MERN developer.</p>
                                    <button className='btn btn-outline-light' onClick={() => {handleClick(1)}}>LinkedIn</button>
                                    <button className='btn btn-outline-light' onClick={() => {handleClick(2)}}>Github</button>
                                    <button className='btn btn-outline-light'>Contact me!</button>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <img src={ Profile } class="img-fluid" alt="Profile" width={300} height={500}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='aboutme'>
                <div className='card'>
                    <div className='card-header-primary'>
                        <h2 className='card-title'>About me!</h2>
                    </div>
                    <div className='card-body'>
                        <p className='card-text'><HomeContent /></p>
                    </div>
                </div>
            </div>
            <div id='Personal'>
                <div className='container'>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </div>
            </div>
    </div>
    );
}
export default Homepage;