import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-6 text-center">About MindWell</h1>
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
    <p className="text-lg mb-4">
      MindWell is dedicated to providing high-quality mental health services to individuals struggling with depression, anxiety, and other emotional challenges. Our team of experienced psychologists and doctors is committed to helping you achieve better mental health and overall well-being.
    </p>
    <p className="text-lg mb-4">
      We believe in a holistic approach to mental health, combining evidence-based therapies with compassionate care. Our goal is to create a safe, supportive environment where you can explore your thoughts and feelings, develop coping strategies, and work towards personal growth.
    </p>
    </div>
    <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
        { name: 'Dr. Sarah Johnson', title: 'Clinical Psychologist', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { name: 'Dr. Michael Chen', title: 'Psychiatrist', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        { name: 'Dr. Emily Rodriguez', title: 'Therapist', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
        ].map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;