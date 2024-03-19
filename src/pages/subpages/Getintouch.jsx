import React from 'react'
import '../css/subpagescss/getintouch.css'
function Getintouch({courseName}) {
  return (
    <div>
                <div class="container">
<div class="contact-section">
<h2 class="ct-section-head">
   Get Intouch With Us
</h2>
<div class="row contact-fields">
<div class="col-md-8 left-form">
   <form method="POST" action="https://formspree.io/f/xzbnagkk">
      <div class="form-group">
         <label class="sr-only" for="fname">First Name *</label>
         <input class="required form-control" id="fname" name="fname" placeholder="First Name&nbsp;*" type="text" />
      </div>
      <div class="form-group">
         <label class="sr-only" for="lname">Last Name *</label>
         <input class="required form-control" id="lname" name="lname" placeholder="Last Name&nbsp;*" type="text" />
      </div>
      <div class="form-group">
         <label class="sr-only" for="contactEmail">Email *</label>
         <input class="required form-control h5-email" id="contactEmail" name="contactEmail" placeholder="Email&nbsp;*" type="text" />
      </div>
      <div class="form-group">
         <label class="sr-only" for="contactPhone">Phone *</label>
         <input class="required form-control h5-phone" id="contactPhone" name="contactPhone" placeholder="Phone&nbsp;*" type="text" />
      </div>
      <div class="form-group">
         <label class="sr-only" for="contactCourse">Course Name *</label>
         <input class="required form-control h5-phone" id="contactCourse" name="contactCourse" placeholder="Enter Interested Course" value ={courseName}/>
      </div>
      <div class="form-group">
         <label class="sr-only" for="comment">Type your message here</label>
         <textarea class="required form-control" id="comment" name="comment" placeholder="Type your message here&nbsp;*" rows="3"></textarea>
      </div>
      <button class="btn23 btn-accent " type="submit">Submit</button>  
   </form>
</div>

</div>
</div>
</div>
    </div>
  )
}

export default Getintouch