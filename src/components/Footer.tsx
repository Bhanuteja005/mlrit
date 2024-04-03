
export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            
AIM Club is dedicated to exploring the cutting-edge field of 
artificial intelligence. We nurture curiosity from the ground up, fostering a vibrant community of AI enthusiasts.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/events"
                className="hover:text-white transition-colors duration-300"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="hover:text-white transition-colors duration-300"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/people/Aim-club/100083085411093/?mibextid=ZbWKwL"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/i/flow/login?redirect_after_login=%2FAimclub_mlrit"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/aim_mlrit/?igsh=azJ4cWxwNGg4NnZy"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Hyderabad, India</p>
          <p>Dundigal</p>
          <p>Email: aim@gmail.com</p>
          <p>Phone: 99999999999</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 AIM. All rights reserved.</p>
    </footer>
  )
}
