import React from 'react'
import { Avatar, Container, List, ListItem, Typography } from "@mui/material"
import { Face } from '@mui/icons-material'
import Img from "./meImg.jpg"


const Cv = () => {
  return (
    <>
       <Typography variant='h1' color='indigo' className='fs-1 fw-b text-center'>CURRICULAM   VITAE</Typography>
     <Container className="   ms-auto" >
                    <Avatar src={Img} alt=""   className='img-fluid right-0 right   ' maxWidth='sm'  sx={{ width: 400, height: 400 }}/>
              </Container>
            <Container maxWidth='xl' className='position-absolute '>
         
                    <List className='fw-bold' >
                        <ListItem > Name  :    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;     Dipesh Gautam  </ListItem>
                        <ListItem>Contact No :    &nbsp; &nbsp; &nbsp; &nbsp; <code>+977 9867993572</code></ListItem>
                        <ListItem>Address :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  Birtamod-8, Jhapa</ListItem>
                        <ListItem>E-mail :  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; gdipesh913@gmail.com</ListItem>
                        <Container component={"div"}>
                                <ListItem className='grey w-25 my-3'><Typography >CAREER OBJECTIVE </Typography></ListItem>
                                            <Container variant='p'  className="border-start border-danger border-5 mt-1 pale-red">
                                            To obtain a position to utilize my skill, knowledge and abilities in the respective field that offers professional growth while being resourceful, innovative and flexible.
                                            </Container>
                        </Container>

                      <List>
                      <Container component={"div"}>
                            <ListItem className='fw-b grey  w-25 '>PERSONAL DETAILS </ListItem>
                            <ListItem > Name  :    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;     Dipesh Gautam  </ListItem>
                        <ListItem>Date Of Birth : &nbsp; &nbsp; &nbsp; &nbsp; <code>2004-April-10</code></ListItem>
                        <ListItem>Father&#39;s Name :&nbsp; &nbsp; &nbsp; &nbsp;Hom Prasad Gautam </ListItem>
                        <ListItem>Gender :  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Male</ListItem>
                        <ListItem>Marital Status:&nbsp; &nbsp; &nbsp; &nbsp;Unmarried</ListItem>
                        <ListItem>Nationality :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nepali</ListItem>
                        <ListItem>Religion :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hindu</ListItem>
                        <ListItem>Language Known :&nbsp;Nepali, English, Hindi</ListItem>
                        <ListItem>Interests :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Web Designing</ListItem>
                        <ListItem className='fw-b grey  w-25 '>ACADEMIC QUALIFICATION </ListItem>
                        <ul type='circle'>
                                <ListItem><li><abbr title="Secondary Education Examination ">SEE</abbr></li></ListItem>
                        </ul>
                        <ListItem className='grey w-25'>TRAINING & DEVELOPMENT </ListItem>
                            <ListItem> <li>Computer Training(Computer Operator, photoshop CS6, HTML CSS,  Javascript, React )</li></ListItem>
                            </Container>
                            
                            
                            <Container component={"div"}>
                            <ListItem className='fw-b grey  w-25 '>DECLARATION</ListItem>
                        <ul type='circle'>
                                
                        
                        <ListItem className='fs-5   text-success'><i> I hereby declare that the above furnished information are true and correct to best of my knowledge and belief.<Face/></i> </ListItem>
                             
                        </ul>
                     
                        </Container>
                      
                      </List>
                        <ListItem></ListItem>
                    </List>
            </Container>
           
    </>
  )
}

export default Cv