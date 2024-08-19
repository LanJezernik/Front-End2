import React, {SyntheticEvent, useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import axios from "axios";

const styleTextarea = {
    height:"100%",
}

const CreatePost = () => {
    const[error, setError] = useState('');
    const[title, setTitle] = useState('');
    const[content,setContent] = useState('');
    const[redirect,setRedirect] = useState(false);
    const[subjectSelected,setSubjectSelected] = useState(1);

    const[subjects,setSubjects] = useState([]);

    const getSubjects = async () => {
        const req = await axios.get('http://localhost:8080/subject',{withCredentials:true});
        setSubjects(req.data);
    }

    useEffect(() => {
        getSubjects();
    }, []);

    const submit = async (e:SyntheticEvent) => {
      e.preventDefault();

      const data = {
          "title":title,
          "content":content,
          "subject_id":subjectSelected
      }

      if (redirect){
          return<Navigate to={'/Home'} />;
      }

      console.log(data);

      const res = await axios.post('http://localhost:8080/post',data,{withCredentials:true});

      if (res.status == 201) {
          setRedirect(true);
      }

    }

    if (redirect) {
        return <Navigate to='/Home' />;
    }

    return (
        <>
            <div className="mjau">
            <h2>{error}</h2>
            <form onSubmit={submit} className="form-signin w-100 m-auto">
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput"
                           placeholder="naslov"
                           onChange={(e) => setTitle(e.target.value)}/>
                    <label htmlFor="floatingInput">Naslov</label>
                </div>
                <div className="form-floating">
                    <select className="form-control" id="floatingSelect"
                    onChange={(e: any) => setSubjectSelected(e.target.value)}>
                        {subjects.map((subject:any, i) => {
                            return (<option value={subject.id} key={subject.id}>{subject.title}</option> );
                        })}

                    </select>
                    <label htmlFor="floatingSelect">Izberi predmet</label>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" id="floatingContent"
                              rows={8}
                              style={styleTextarea}
                              placeholder="Vnesi vsebino"
                              onChange={(e)=>setContent(e.target.value)}>
                    </textarea>
                    <label htmlFor="floatingContent">Vsebina</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Shrani</button>
            </form>
            </div>
        </>
    )
}

export default CreatePost;