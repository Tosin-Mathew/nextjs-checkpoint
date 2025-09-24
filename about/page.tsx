// app/about/page.tsx
import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/profile.jpg"
              alt="About Me"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Hello! I'm a passionate full-stack developer with 5+ years of experience 
              building web applications. I love turning complex problems into simple, 
              beautiful designs.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">My Journey</h3>
              <p className="text-gray-600">
                Started as a frontend developer and gradually expanded my skills 
                to include backend development, database design, and cloud infrastructure.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What I Do</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Frontend Development (React, Next.js, TypeScript)</li>
                <li>Backend Development (Node.js, Python, APIs)</li>
                <li>Database Design & Management</li>
                <li>Cloud Deployment & DevOps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
