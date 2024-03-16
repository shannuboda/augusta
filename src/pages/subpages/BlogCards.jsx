import React from 'react';

const BlogCards = ({b1}) => {
  console.log(b1);
 
    return (
        <div>
           <div className="blog-card">
            <div className="bc-left">
                <img src={b1.im1} alt="" />
            </div>
            <div className="bc-right">
                <div className="bc-top">
                  <h4>{b1.date}</h4>
                  <h4>{b1.author}</h4>
                </div>
                <h1>{b1.title}</h1>
                <p>{b1.description}</p>
                <span><a href="#">Read More...</a></span>
            </div>
          </div> 
        </div>
    );
}

export default BlogCards;
