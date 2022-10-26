import React from 'react'
import './header.css';
import ai from '../../../assets/ai.jpg'

const Header = () => {
    return (
        <div className="gpt2__header section__padding" id="home">
        <div className="gpt2__header-content">
          <h1 className="gradient__text">Lets Build Something amazing with GPT-3 OpenAI</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
    
          <div className="gpt2__header-content__input">
            <input type="email" placeholder="Your Email Address" />
            <button type="button">Get Started</button>
          </div>
        </div>
    
        <div className="gpt2__header-image">
          <img src={ai} />
        </div>
      </div>
    );    
}

export default Header