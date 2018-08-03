import * as React from 'react';

import urls from '../../assets/urls';
import * as Email from '../../assets/email-icon.png';
import * as Gitter from '../../assets/gitter-icon.png';

import MailchimpSubscribeForm from './MailchimpSubscribeForm';

const Buttons = ({ formVisibility, 
  toggleForm }: {
    formVisibility: boolean, 
    toggleForm: () => void}) => {
    return (
    <div>
       <div className="subscribe">
        <button className="mail-button" onClick={toggleForm}>
          Join Our Mailing List <img src={Email} alt="email icon"/>
        </button>

        <a href={urls.gitter}>
          <button className="gitter-button">
            Join Our Gitter Channel <img src={Gitter} alt="gitter icon"/>
          </button>
        </a>
      </div>

      <MailchimpSubscribeForm 
        formVisibility={formVisibility} 
        toggleForm={toggleForm} 
        url={urls.mailchimp}
      />
      </div>
    );
};

export default Buttons;