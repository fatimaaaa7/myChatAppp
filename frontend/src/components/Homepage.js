import React from 'react'

const Homepage = () => {
  return (
    <>
  <title>Chat App</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <header>
    <h1>Chat App</h1>
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="hero">
      <h2>Connect with people</h2>
      <p>
        Join our chat app and start chatting with people from all over the
        world!
      </p>
      <a href="#" className="button">
        Join Now
      </a>
    </section>
    <section id="features">
      <h2>Features</h2>
      <ul>
        <li>
          <i className="fas fa-user" />
          Connect with people from all over the world
        </li>
        <li>
          <i className="fas fa-comment" />
          Chat with anyone, anytime
        </li>
        <li>
          <i className="fas fa-lock" />
          Private and secure conversations
        </li>
        <li>
          <i className="fas fa-mobile-alt" />
          Available on all devices
        </li>
      </ul>
    </section>
    <section id="pricing">
      <h2>Pricing</h2>
      <p>Our chat app is completely free to use!</p>
    </section>
  </main>
  <footer>
    <p>© 2023 Chat App. All rights reserved.</p>
  </footer>
</>

  )
}

export default Homepage