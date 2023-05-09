import React from 'react'

const Homepage = () => {
  return (
	<>
  <div className="purple_div" />
  <div className="iphone">
    <div className="iphone_grey">
      <div className="iphone_head">
        <div className="iphone_head_white_section" />
        <div className="photo_name_dots">
          <i className="arrow left area" />
          <img src="./images/avatar.jpg" className="avatar_jpg area" alt="" />
          <div className="name_and_status area">
            Samuel Green
            <p>Available to Walk</p>
          </div>
          <div className="three_dots area" />
        </div>
      </div>
      <div className="messages">
        <p className="left_messages">
          That sounds great. I'd be happy with that
        </p>
        <p className="left_messages">
          Could you send over some pictures of your dog, please?
        </p>
        <div className="dog_images">
          <img src="./images/dog-image-3.jpg" className="dog 1" />
          <img src="./images/dog-image-2.jpg" className="dog 2" />
          <img src="./images/dog-image-1.jpg" className="dog 3" />
        </div>
        <p className="right_messages">
          Here are a few pictures! She's a happy girl!
        </p>
        <p className="right_messages">Can you make it?</p>
        <p className="left_messages">
          She looks so happy! The time we discussed works. How long shall I take
          her out for?
        </p>
      </div>
      <div className="purple_order">
        <p className="little_circle" />
        <span id="span_time">30 minute walk</span>{" "}
        <span id="span_price">$29</span>
      </div>
      <div className="purple_order">
        <p className="little_circle" />
        <span id="span_time">1 hour walk</span> <span id="span_price">$49</span>
      </div>
      <div className="form_button">
        <div className="arrow_background">
          <i className="arrow_right_button" />
        </div>
      </div>
    </div>
  </div>
  <div className="writings">
    <h1>Simple booking</h1>
    <p>
      Stay in touch with our dog walkers through the chat interface. This makes
      it easy to discuss arrangements and make bookings. Once the book has been
      completed you can rate your walker and book again all through the chat.
    </p>
  </div>
  <div className="grey_div" />
</>

  )
}

export default Homepage