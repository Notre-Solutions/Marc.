import React from 'react';

class SubscribePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      fNameValue: '',
      lNameValue: '',
    };
  }

  render() {
    return (
      <form
        action="https://gmail.us18.list-manage.com/subscribe/post"
        method="POST"
        noValidate
      >
        <h1>Subscribe to our Newsletter!</h1>
        <div className="newsletter-form">
          <input
            type="hidden"
            name="u"
            value="266effae0b8f2985e9e0b3e6e"
          />
          <input type="hidden" name="id" value="bc71e34aee" />
          <div className="row">
            <label htmlFor="MERGE0">
              <input
                type="email"
                placeholder="Email"
                name="EMAIL"
                id="MERGE0"
                value={this.state.emailValue}
                onChange={(e) => {
                  this.setState({ emailValue: e.target.value });
                }}
                autoCapitalize="off"
                autoCorrect="off"
              />
            </label>
          </div>
          <div className="row">
            <label htmlFor="MERGE1">
              <input
                type="text"
                placeholder="First name"
                name="FNAME"
                id="MERGE1"
                value={this.state.fNameValue}
                onChange={(e) => {
                  this.setState({ fNameValue: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="row">
            <label htmlFor="MERGE2">
              <input
                type="text"
                placeholder="Last name"
                name="LNAME"
                id="MERGE2"
                value={this.state.lNameValue}
                onChange={(e) => {
                  this.setState({ lNameValue: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="row">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
          {/* <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden="true"
            aria-label="Please leave the following three fields empty"
          >
            <label htmlFor="b_name">Name: </label>
            <input
              type="text"
              name="b_name"
              tabIndex="-1"
              value=""
              placeholder="Freddie"
              id="b_name"
            />

            <label htmlFor="b_email">Email: </label>
            <input
              type="email"
              name="b_email"
              tabIndex="-1"
              value=""
              placeholder="youremail@gmail.com"
              id="b_email"
            />

            <label htmlFor="b_comment">Comment: </label>
            <textarea
              name="b_comment"
              tabIndex="-1"
              placeholder="Please comment"
              id="b_comment"
            ></textarea>
          </div> */}
        </div>
      </form>
    );
  }
}

export default SubscribePage;
