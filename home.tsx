import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to MindWell</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <p className="text-lg mb-4">
          At MindWell, we understand that life can be challenging. Whether you're feeling depressed, anxious, or just need someone to talk to, we're here to help.
        </p>
        <p className="text-lg mb-4">
          Our team of experienced psychologists and doctors are dedicated to providing you with the support and guidance you need to overcome life's obstacles.
        </p>
        <Link to="/booking" className="bg-blue-600 text-white px-6 py-2 rounded-full inline-block hover:bg-blue-700 transition duration-300">
          Book a Session Now
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <ul className="list-disc list-inside">
            <li>Individual Therapy</li>
            <li>Group Therapy</li>
            <li>Couples Counseling</li>
            <li>Depression Treatment</li>
            <li>Anxiety Management</li>
          </ul>
          <Link to="/services" className="text-blue-600 hover:underline mt-4 inline-block">Learn More</Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside">
            <li>Experienced and Licensed Professionals</li>
            <li>Personalized Treatment Plans</li>
            <li>Flexible Scheduling</li>
            <li>Online and In-Person Sessions</li>
            <li>Confidential and Supportive Environment</li>
          </ul>
          <Link to="/about" className="text-blue-600 hover:underline mt-4 inline-block">About Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;