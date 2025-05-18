import React from 'react';

function Statistics() {
  const stats = [
    { label: 'Itqan Students in Turkish Universities', value: '500+' },
    { label: 'International Students in Türkiye', value: '260K' },
    { label: 'Student Consultations', value: '2K' },
    { label: 'Private Universities in Türkiye', value: '100+' },
    { label: 'Years of Experience', value: '8+' },
  ];

  return (
    <section id="statistics">
      <h2>Educational Mastery</h2>
      <ul>
        {stats.map((stat, index) => (
          <li key={index}>
            <strong>{stat.value}</strong>
            <p>{stat.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
