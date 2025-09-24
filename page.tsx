// app/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              width={128}
              height={128}
              className="rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-600">John Doe</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Full-Stack Developer passionate about creating amazing web experiences 
            with modern technologies like React, Next.js, and TypeScript.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link href="/projects" className="btn-primary">
              View My Work
            </Link>
            <Link href="/contact" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded transition duration-200">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies I Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Tailwind', 'MongoDB', 'AWS'].map((tech) => (
              <div key={tech} className="text-center p-4">
                <div className="bg-blue-100 rounded-lg p-4 mb-2">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
