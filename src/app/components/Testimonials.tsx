const testimonials = [
    { name: 'Ali', message: 'They made the process so easy! Got into my dream university.' },
    { name: 'Sara', message: 'Very professional and helpful from start to finish.' },
  ];
  
  const Testimonials = () => (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-[#242D4B]">Student Testimonials</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <p className="text-gray-800 mb-4">"{t.message}"</p>
              <p className="text-right text-blue-600 font-semibold">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Testimonials;
  