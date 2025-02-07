import  '../components/Start.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

function StartButtons(){
    const navigate = useNavigate();

    const handleParentClick = () => {
        navigate('/parent');
    };

    const handleStudentClick = () => {
        navigate('/student');
    };

    return (
        <>

        <div className="startcontainer">

        <div className="parentbutton"  onClick={handleParentClick}>
        <h1>Parent</h1>
        </div>

        <div className="studentbutton" onClick={handleStudentClick}>
        <h1>Student</h1>
        </div>

        </div>

        </>
    )

}


export default StartButtons;