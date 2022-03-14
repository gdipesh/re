// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
// import TextareaAutosize from '@mui/base/TextareaAutosize';
import {  Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// import {} from "react-icon/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import  {  faHeart, faUsers}  from "@fortawesome/free-solid-svg-icons";

import { FcCollaboration } from 'react-icons/fc';
import { ValidationError, useForm } from '@formspree/react';

const ContactForm =() => {
  const [state, handleSubmit] = useForm("xgedyeya");
  if (state.succeeded) {

      return ( <><Link to='/'><Button variant='outlined' color='red'>Back</Button></Link>
                        <Container className='text-center text-dark row d-flex align-item-center justify-content-center mx-auto py-5 '>
                        <Typography variant='h1'  >Thanks For Joining us !! <FcCollaboration />  </Typography>
                        </Container>
              
      </>);
  }
  return (
      <>
      <Container  style={{backgroundImage: "url('https://picsum.photos/1024')" ,
                                       backgroundRepeat: 'no-repeat', backgroundSize: 'cover', 
                                       backgroundPosition: 'center center',
                                      }} 
                                       maxWidth="sm" 
                                       className="card-4 text-center row d-flex align-item-center justify-content-center mx-auto py-5  display-4">

      <form onSubmit={handleSubmit} >
        <div className="form-floating">
        <input  placeholder='  '  className='form-control mb-3' 
       id="text"
       type="text" 
       name="Name"
     />
      <label htmlFor="text" className='label'>
       Full Name
     </label>
     <ValidationError 
       prefix="Name" 
       field="name"
       
       errors={state.errors}
     />
        </div>
               
  
        
         
          <div className="form-floating">
  <input type="email" className="form-control mb-3" name="emaill"  id="Email" placeholder="  "  />
  <label htmlFor="Email">Email</label>
</div>
      <ValidationError   prefix="Email"  field="email"  errors={state.errors} />
          
          <div className="form-floating">
  <textarea className="form-control mb-3 textbg" name='Massage'  placeholder="  " id="floatingTextarea"></textarea>
  <label htmlFor="floatingTextarea">Massage </label>
</div>
  
   
      <ValidationError prefix="floatingTextarea"  field="message" errors={state.errors} />
  
      <Container className="text-center my-2 g-3 rounded">
      <Button color='success' variant='contained' name='submit'  type="submit" className="btn btn-outline-danger" disabled={state.submitting}  >Send</Button>
        
      
      </Container>
    </form>
      </Container>
       
      </>
  );
}
  export default  ContactForm;