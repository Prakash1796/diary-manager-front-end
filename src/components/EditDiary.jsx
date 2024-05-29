import React, { useEffect, useState  } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navebar';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/ApiService';
import { toast } from 'react-toastify';

function EditDiary() {
  const params = useParams();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  let navigate = useNavigate()

  const getDiary = async () => {
    try {
      const res = await AxiosService.get(`/diary/${params.id}`);
      if (res.status === 200) {
        setDate(res.data.diary.date);
        setTitle(res.data.diary.title);
        setDescription(res.data.diary.description);
        console.log(res.data)
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (params.id) {
      getDiary();
    }
  },[])

  const editDiary = async () => {
    try {
      const res = await AxiosService.put(`/diary/edit/${params.id}`, {
        date,
        title,
        description,
      });
  
      if (res.status === 200) {
        toast.success('Diary updated successfully');
        
       
  
        
      } else {
        toast.error('Diary is not found');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>

<nav style={{ position: 'absolute', top: '0px' }}>
        <Navbar />
      </nav>

     <div id='created' className='created-fluid'>
        <div id='creatediarypg' className="container" >
          <h1 className="heading">
            <b> Edit Diary </b>
          </h1>
          <form className="entry-form">
            <div className="form-group">
              <label className="text-black" htmlFor="date">
                Date:
              </label>
              <input
                style={{ width: '300px' }}
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="text-black" htmlFor="title">
                Title:
              </label>
              <input
                style={{ width: '500px' }}
                type="text"
                id="title"
                name="title"
                value={title}
                 onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                required
              />
            </div>
            <div className="form-group">
              <label className="text-black" htmlFor="content">
                Your Thoughts:
              </label>
              <textarea
                id="content"
                name="content"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write your entry here..."
                required
              ></textarea>
            </div>
            <div style={{ marginLeft: '350px' }}>
              <button onClick={()=>navigate('/mydiarys')} className="btn-danger" id="bt" type="reset">
                {' '}
                Cancel
              </button>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <button
              onClick={()=>editDiary(navigate('/mydiarys')) }
                className="btn-success"
                id="bt"
                 
               
              >
                {' '}
                update{' '}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditDiary;