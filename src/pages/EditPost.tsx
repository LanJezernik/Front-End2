import React, { SyntheticEvent, useEffect, useState } from 'react';
import {Navigate, Route, useLocation, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';


const styleTextArea = {
    height:"100%"
}



const EditPost = () => {
   
    const[postData,setPosts] = useState([]);
    const[error, setError] = useState('');
    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const[redirect, setRedirect] = useState(false);
    const { id } = useParams();
    
    const location = useLocation()
    //const { title, vsebina } = location.state as LocationState
    const navigate = useNavigate()



    const loadPosts = async () => {
        const res = await axios.get('http://localhost:8080/post/postinfo/' + id, {withCredentials: true});
        if (res.status == 200){
            console.log(res.data);
            setPosts(res.data);
        }
    }

    useEffect(() => {
        loadPosts();
    }, []);

    const submit = async(e:SyntheticEvent) => {
        e.preventDefault();

        const data = {
            title,
            content
        }

        const res = await axios.patch('http://localhost:8080/post/edit/' + id, data, { withCredentials: true });

        if(res.status == 200){
            setRedirect(true);
        }

    }

    if(redirect){
        return <Navigate to='/Home' />
    }

    return (
        <>
            <div className="mjau">
            <h2>{error}</h2>
            <form onSubmit={submit} className="form-signin w-100 m-auto">
                <div className="form-floating">
                    <input type="text"
                           className="form-control"
                           id="floatingInput" 
                           placeholder = "naslovc"/*{setPosts} {loadPosts}*/
                           onChange={(e) => setTitle(e.target.value)}/>
                    <label htmlFor="floatingInput">Naslov</label>
                </div>
                <div className="form-floating">

          <textarea className="form-control" id="floatingContent" rows={8} style={styleTextArea} placeholder=""/*{vsebina}*/ onChange={(e)=>setContent(e.target.value)}>
          </textarea>

                    <label htmlFor="floatingContent">Vsebina</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
            </div>
        </>
    )
}

export default EditPost;