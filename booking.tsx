import React, { useState } from 'react';
import DoctorCard from './doctorcard';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: string;
}
interface DoctorCardProps{
  doctor: Doctor;
  isSelected: boolean;
  onSelect:(doctorId : number)=> void;
}

const doctors: Doctor[] = [
  { id: 1, name: 'Dr. Sarah Johnson', specialization: 'Clinical Psychologist', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Dr. Michael Chen', specialization: 'Psychiatrist', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Dr. Emily Rodriguez', specialization: 'Therapist', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];



export default DoctorCard;