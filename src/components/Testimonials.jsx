
const Testimonials = () => (
  <section id="testimonials" className="py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Priya Sharma', text: 'This app made finance so simple! 😊', img: 'https://via.placeholder.com/50' },
          { name: 'Ravi Kumar', text: 'Loved the Hindi courses! Truly inclusive.', img: 'https://via.placeholder.com/50' },
          { name: 'Anita Singh', text: 'Helped me start investing confidently! 🚀', img: 'https://via.placeholder.com/50' }
        ].map(item => (
          <div key={item.name} className="p-6 bg-white rounded-lg shadow-md">
            <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full mx-auto mb-4" />
            <p className="text-gray-600 mb-2">{item.text}</p>
            <p className="text-gray-800 font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
