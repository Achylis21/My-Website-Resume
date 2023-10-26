import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './Styles/Homepage.css';
import Profile from './img/Profile.jpg'

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
        <div id='wavyImage'>
            <div className='container'>
                <div class="card mb-3" id='sentence'>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="card-body bg-transparent">
                                <h1>Hi! I am Daniel,</h1>
                                <p>An undergraduate aspiring developer.</p>
                                <button className='btn btn-outline-light' onClick={() => {handleClick(1)}}>LinkedIn</button>
                                <button className='btn btn-outline-light' onClick={() => {handleClick(2)}}>Github</button>
                                <button className='btn btn-outline-light'>Email Me!</button>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <img src={ Profile } class="img-fluid" alt="Profile" width={300} height={500}/>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
}
export default Homepage;