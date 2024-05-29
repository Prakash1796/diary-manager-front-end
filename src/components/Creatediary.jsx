import React, { useState } from 'react';
import Navbar from './Navebar';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/ApiService';
import '/src/Diary.css';
import { toast } from 'react-toastify';
function Creatediary() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const clearFields = () => {
    setTitle('');
    setDate('');
    setDescription('');
  };
  

  let creatediary = async (e) => {
    e.preventDefault();
    try {
      let res = await AxiosService.post('/diary/create', {
        title,
        date,
        description,
      });
      if (res.status === 201) {
        toast.success('Diary created successfully. Go and check My diaries');
        setTitle('');
        setDate('');
        setDescription('');
        // navigate('/mydiarys');
     
      } else {
        toast.error('Please fill all the required fields');
      }
    } catch (error) {
      toast.error(error.message);
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
            <b> Create Diary </b>
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
              <input className='inp'
                
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
            <div className='btcr' style={{ marginLeft: '350px' }}>
              <button onClick={clearFields} className="btn-danger" id="bt" type="reset">
                {' '}
                Clear
              </button>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <button
                className="btn-success"
                id="bt"
                onClick={(e) => creatediary(e)}
               
              >
                {' '}
                Save{' '}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Creatediary;