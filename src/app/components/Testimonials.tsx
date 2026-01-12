'use client';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t, dir } = useLanguage();

  const testimonials = [
    { nameKey: 'testimonials.hamza.name', messageKey: 'testimonials.hamza.message' },
    { nameKey: 'testimonials.kayan.name', messageKey: 'testimonials.kayan.message' },
    { nameKey: 'testimonials.nihal.name', messageKey: 'testimonials.nihal.message' },
  ];

  return (
  <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="max-w-6xl mx-auto px-4">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#242D4B]">
        {t('testimonials.title')}
      </h3>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            {/* Quote icon */}
            <div className="absolute -top-4 left-6 text-6xl text-blue-100 select-none">
              “
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
              {t(testimonial.messageKey)}
            </p>

            <div
              className={`mt-auto font-semibold text-blue-600 ${
                dir === 'rtl' ? 'text-left' : 'text-right'
              }`}
            >
              — {t(testimonial.nameKey)}
            </div>

            {/* Accent line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default Testimonials;
