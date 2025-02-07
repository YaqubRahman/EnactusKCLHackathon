import '../components/StudentLogin.css';
import pfp from '../components/pfp.png';
import water from '../components/water.gif'

export default function StudentLogin() {
    return (
        <>
            <div className="container-wrapper">
                <div className="container">
                <img src={pfp} className="pfp" alt="pfp" />
                    
                    <div className="name">
                        <h1>George</h1>
                    </div>

                    <img src={water} className="water" alt="water" />
                    <div className="waternumber">
                        <h1>47%<br></br> Completed</h1>
                    </div>

                </div>

                <div className="line"></div>

                <div className="container2">
                    <div className='lefttext'>
                    <div className="rounded-box">
                        <h2>Start your <br></br> day</h2>
                    </div>
                    </div>
                </div>

                <div className="line2"></div>

                <div className="container3">
                    <div className='lefttext'>
                    <div className="rounded-box">
                        <h3>Activities</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

