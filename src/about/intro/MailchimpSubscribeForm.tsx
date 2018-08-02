import * as React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const MailchimpSubscribeForm = ({
  formVisibility,
  toggleForm,
  url }: {
    formVisibility: boolean,
    toggleForm: () => void,
    url: string
  }) => {
  return formVisibility ?
    (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => {
        if (message && message.includes('0 - ')) {
          message = message.split('0 - ')[1];
        }
        return (
          <div className="subscribe-form">
            <input
              className="subscribe-input"
              type="email"
              placeholder="Enter your email"
            />
            <input
              className="subscribe-input"
              type="submit"
              onClick={e => subscribe({ EMAIL: 'todo' })}
            />
            <span className="subscribe-exit" onClick={toggleForm}>&times;</span>
            {status === 'sending' &&
              <div className="subscribe-status yellow">sending...</div>}
            {status === 'error' &&
              <div className="subscribe-status pink" dangerouslySetInnerHTML={{ __html: message || '' }}/>}
            {status === 'success' &&
              <div className="subscribe-status blue">Subscribed!</div>}
          </div>
        );
      }}
    />) :
    null;
};

export default MailchimpSubscribeForm;