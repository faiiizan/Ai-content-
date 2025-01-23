// src/app/page.tsx
import Section7 from '@/components/landing/Sectiion7';
import Section1 from '@/components/landing/section1';
import Section2 from '@/components/landing/section2';
import Section3 from '@/components/landing/section3';
import Section4 from '@/components/landing/section4';
import Section5 from '@/components/landing/section5';
import Section6 from '@/components/landing/section6';
import React from 'react';

const HomePage = () => {
  return (
    <div className='container mx-auto'>
      <Section1 />
      <Section2 />
      <Section7/>
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default HomePage;
