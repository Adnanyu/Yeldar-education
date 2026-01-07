'use client';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t, dir } = useLanguage();

  const testimonials = [
    { nameKey: 'testimonials.ali.name', messageKey: 'testimonials.ali.message' },
    { nameKey: 'testimonials.sara.name', messageKey: 'testimonials.sara.message' },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-[#242D4B]">{t('testimonials.title')}</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <p className="text-gray-800 mb-4">"{t(testimonial.messageKey)}"</p>
              <p className={`${dir === 'rtl' ? 'text-left' : 'text-right'} text-blue-600 font-semibold`}>- {t(testimonial.nameKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
