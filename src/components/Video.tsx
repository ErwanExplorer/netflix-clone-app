import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/video.scss';

const Video = () => {

    let id = useParams();
    console.log(id);

    return (
        <div className='video'>
            <video src={`http://localhost:8000/api/video?video=${id.id}.mp4&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o`}
                width="400" height="300" controls></video>
        </div>
    );
};

export default Video;