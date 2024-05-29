import React, { useEffect, useState } from 'react';
import AxiosService from '../utils/ApiService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Mydiarys() {
  const [diary, setDiary] = useState([]);
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userDiary = async () => {
    try {
      let res = await AxiosService.get('/diary/user');
      if (res.status === 200) {
        setDiary(res.data.diary);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if(diary)
 
    userDiary();
  }, []);

  const deletediary = async (id) => {
    setLoading(true);
    try {
      let res = await AxiosService.delete(`/diary/delete/${id}`);
      if (res.status === 200) {
        // Remove the deleted diary entry from the state
        setDiary(prevDiary => prevDiary.filter(entry => entry._id !== id));
       
        toast.success('Diary deleted Successfully');
      }
    } catch (error) {
      toast.error(error);
    }
    finally{
      setLoading(false);
    }
  };
  
  const sortDiariesByDate = (diaries) => {
    return diaries.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });
  };
  


  

  return (
    <>
    {loading && (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    )}
    <div style={{paddingtop:'50px',position:'absolute',top:'100px'}}>

    <div id='search'>
<h1 className='search-h' >Search</h1>
<input type="search" id="s"
placeholder='Search your Diary'
onChange={(e) => setSearch(e.target.value)}
/>
</div>

      </div>
    
    <div className='cardfull' style={{ height: '100%', paddingTop: '120px' }}>
    

    {diary.length === 0 ? (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h3>No diaries created yet.</h3>
          </div>
        ) :(sortDiariesByDate(diary)
      .filter((entry)=>{
        return search.toLowerCase() === '' ? entry : entry.title.
        toLowerCase().includes(search)
        
      }).map((entry, index) =>  (
        
        <div key={index} style={{marginLeft:'150px'}} className="cards">
        
          <label id="features">
            <input className='inputli' type="checkbox" />
            <article>
              <div className="front">
                <header className='head'>
                  <button onClick={()=>navigate(`/edit/${entry._id}`)}  className='btn-info text-black'>Edit</button>
                  <button onClick={() => deletediary(entry._id)} className='btn-danger'>Delete</button>
                </header>
                <br />
                <var>{entry.date}</var>
                <br /> <br />
                <h1 style={{ fontSize: '50px' }}> "{entry.title}"</h1>
                <h4>Click Me to Read Diary</h4>
                <p style={{fontSize:'13px',marginTop:'10px'}}>
                  {entry.createdAt}
                </p>
              </div>
              <div style={{ overflowY: 'scroll' }} className="back">
                <header>
                  <h2 style={{ color: '#e46115' }}>{entry.title}</h2>
                  <p style={{ margin: '-30px 0px 0px 750px', backgroundColor: 'green', color: 'white', borderRadius: '8px' }}>Close</p>
                </header>
                <div>
                  <p style={{ marginTop: '15px' }}>{entry.description}</p>
                </div>
              </div>
            </article>
          </label>
        </div>
      
        ))
      
      
      )}
        
    </div>
    </>
  );
}

export default Mydiarys;