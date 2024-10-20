import React from 'react';

const Services: React.FC = () => {
  const services = [
    { title: 'Individual Therapy', description: 'One-on-one sessions tailored to your specific needs and concerns.' },
    { title: 'Group Therapy', description: 'Supportive group sessions where you can connect with others facing similar challenges.' },
    { title: 'Couples Counseling', description: 'Improve communication and strengthen your relationship with your partner.' },
    { title: 'Depression Treatment', description: 'Comprehensive care to help you manage and overcome depression.' },
    { title: 'Anxiety Management', description: 'Learn effective strategies to cope with and reduce anxiety in your daily life.' },
    { title: 'Stress Reduction', description: 'Techniques and practices to help you manage stress and improve overall well-being.' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;