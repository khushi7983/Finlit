
const Footer = () => (
  <footer className="py-12 bg-gray-800 text-white">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          {['Courses', 'Blog', 'Terms', 'Privacy Policy'].map(item => (
            <a key={item} href="#" className="block text-gray-400 hover:text-white">{item}</a>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <p>Email: support@finlit.com</p>
          <p>Phone: +91 123 456 7890</p>
          <p>Address: Mumbai, India</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {['Twitter', 'LinkedIn', 'Instagram', 'YouTube', 'WhatsApp'].map(item => (
              <a key={item} href="#" className="text-gray-400 hover:text-white">{item}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Download App</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-2">Play Store</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">App Store</button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
