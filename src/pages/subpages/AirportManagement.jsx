import React from 'react'
import "../css/subpagescss/airportmanagement.css"
import Getintouch from './Getintouch'

function AirportManagement() {
  return (
    <div>
       <div className="airportbanner">
            <h3>Airport Management Course</h3>
            <p>Home . Courses</p>
        </div>
          <h1  style={{textAlign:'center'}}>Certificate in Airport Management Course</h1>
        <div class="container airportmanagementcols">
           <div class="row">
              <div class="col-sm-6">Aviation, one of the most exciting profession in the world, requires the most talented and energetic staffs. In addition to punctuality, service quality levels also have to be met by those people. The staffs who working in an airport may remain unseen by most passengers, belong to what is known as ground handling; have got great impact on the success of each airline. Ground handling is an integral part of airline operations. Starting from the staffs at check-in counter to the staffs that putting their hands on aircrafts for its maintenance come under this advanced trained people. By means of its Airport Handling Manual (AHM), the International Air Transport Association (IATA) sets a series of standards for secure, efficient airport operations.</div>
              <div class="col-sm-6">We here at AUGUSTA Aviation academy is regularly monitoring and empowering our self to reach at those International standards. We have no compromise on the quality and standards assured for our courses. We are enabling our students to reach at the highest value of studies in aviation by giving the exposure to the wide range of scope of different job profiles in an airport. Our advanced syllabus of ground handling will provide the best results in overall performance and help them to grab the best in the field of their dream job.</div>
           </div>
        </div>
          <Getintouch courseName={"Airport Management"}></Getintouch>

    </div>
  )
}

export default AirportManagement