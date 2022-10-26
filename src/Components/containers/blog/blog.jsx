import React from 'react'
import Article from '../../Article/article'
import {blog01,blog02,blog03,blog04,blog05} from './import'
import './blog.css'

const Blog=() => {
    return(
        <div className='gpt2__blog section__padding' id='blog'>
         <div className='gpt2__blog-heading'>
            <h1 className='gradient__text'>
                A LOT OF BLOGGING IS HAPPENING
            </h1>
         </div>
         <div className='gpt2__blog-container'>
            <div className='gpt2__blog-container_groupA'>
               <Article imgUrl={blog01} date="08 October 2022" title= "SOME GEBRISH TITLE"  link= "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwi1i7SK6s_6AhW7RmwGHa-EDSkQPAgI"/>
            </div>
            <div className='gpt2__blog-container_groupB'>
               <Article imgUrl={blog02} date="08 October 2022" title= "SOME GEBRISH TITLE" link= "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwi1i7SK6s_6AhW7RmwGHa-EDSkQPAgI"/>
               <Article imgUrl={blog03} date="08 October 2022" title= "SOME GEBRISH TITLE" link= "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwi1i7SK6s_6AhW7RmwGHa-EDSkQPAgI"/>
               <Article imgUrl={blog04} date="08 October 2022" title= "SOME GEBRISH TITLE" link= "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwi1i7SK6s_6AhW7RmwGHa-EDSkQPAgI"/>
               <Article imgUrl={blog05} date="08 October 2022" title= "SOME GEBRISH TITLE" link= "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwi1i7SK6s_6AhW7RmwGHa-EDSkQPAgI"/>
            </div>
         </div>
        </div>
    )
}

export default Blog