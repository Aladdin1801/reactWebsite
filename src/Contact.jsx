import React, { useState } from 'react';

const Contact = () =>{
  const [data, setData] = useState(
    {
      fullname:"",
      contact:"",
      email:"",
      msg:""
    }
  );

const InputEvent = (event) => {
  const {name,value} = event.target;

  setData((preVal) => {
    return{
      ...preVal,
      [name]:value,
    }
  })
};

const formSubmit = (e) => {
    e.preventDefault();
    alert(`Name:-${data.fullname}, Mobile Number:-${data.contact}, E-mail:-${data.email}, msg:-${data.msg} `);
};

  return (
    <>
      <div classNameName="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div className="form-group">
              <label for="exampleFormControlInput1">Full Name</label>
              <input type="text" className="form-control"
              name = "fullname"
              value = {data.fullname}
              onChange = {InputEvent}/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Mobile Number</label>
              <input type="number" className="form-control"
              name = "contact"
              value = {data.contact}
              onChange = {InputEvent}/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" className="form-control" placeholder="name@example.com"
              name="email"
              value = {data.email}
              onChange = {InputEvent}/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Comment</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
              name="msg"
              value = {data.msg}
              onChange = {InputEvent}/>
            </div>
            <div>
            <button className="btn btn-outline-primary mt-3" type="submit">Submit form</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;