import axios from 'axios';
import React, { useState } from 'react'
import Layout from '../../layout/Layout'

export default function Addroom() {
  const [formData,setFormData] = useState({});
  const [file, setFile] = useState(null);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    })
    
  }
  const handlePhoto = (e) => {
    setFormData({...formData, photo: e.target.files[0]});
  }

  const formSubmit = (e) => {
    e.preventDefault();

    const url = process.env.REACT_APP_API_URL;
    const res = axios.post('http://127.0.0.1:5000/api/rooms/add/63d4c3114f3097d74d011437',formData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    //formData.append({'photo':file})
    console.log(res);
  }

  return (
    <Layout>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add Room</h5>

          
              <form onSubmit={formSubmit} encType="mulitipart/form-data">
                <div className="row mb-3">
                  <label for="inputText" className="col-sm-2 col-form-label">Title</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" name='title' value={formData.title} onChange={handleChange} />
                  </div>
                </div>
          
                <div className="row mb-3">
                  <label for="inputNumber" className="col-sm-2 col-form-label">Rate</label>
                  <div className="col-sm-10">
                    <input type="number" className="form-control" name='price' value={formData.price} onChange={handleChange}/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputNumber" className="col-sm-2 col-form-label">Image</label>
                  <div className="col-sm-10">
                    <input className="form-control" type="file"  onChange={handlePhoto} id="formFile"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputNumber" className="col-sm-2 col-form-label">Max Person</label>
                  <div className="col-sm-10">
                    <input type="number" className="form-control" name='maxPerson'  onChange={handleChange}/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputNumber" className="col-sm-2 col-form-label">Desccription</label>
                  <div className="col-sm-10">
                    <input type="number" className="form-control" name='desc' onChange={handleChange}/>
                  </div>
                </div>
      
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label">Submit Button</label>
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Submit Form</button>
                  </div>
                </div>

              </form>

            </div>
          </div>
      </div>
    </Layout>
 

  )
}
