
const WhatWeDo = () => (
  <section id="what-we-do" className="py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Learn', desc: 'Bite-sized, SEBI-backed micro-courses.' },
          { title: 'Quiz', desc: 'Engage with quizzes and unlock badges.' },
          { title: 'Invest', desc: 'Use tools to invest wisely.' }
        ].map(item => (
          <div key={item.title} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeDo;
