"use client"

import { Footer } from '@/components/Footer';
import { NavigationMenuBar } from '@/components/NavigationBar';
import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <NavigationMenuBar />
      <div className="about-page mx-auto bg-[#FAFAFA]">
        <section className="flex flex-col justify-center bg-[#0F172A] h-[16rem] border border-b border-b-gray-300 introduction text-center mb-8">
          <h1 className="text-6xl font-bold mb-4 text-gray-300">About Us</h1>
          <p className="text-lg text-gray-500">Empowering businesses to thrive in the digital marketplace.</p>
        </section>

        <section className="container mission mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p>Our mission is to provide a robust and user-friendly ecommerce platform that enables businesses to succeed online. We strive to deliver the best shopping experience for our customers and the highest quality service for our clients.</p>
        </section>

      <section className="container story mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p>Founded in [Year], Instant Dokan was born out of a passion for technology and a desire to help businesses grow. From our humble beginnings to becoming a leading ecommerce platform, our journey has been marked by innovation, dedication, and a commitment to excellence.</p>
      </section>

      <section className="container values mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc list-inside">
          <li><strong>Customer-Centric:</strong> We put our customers at the heart of everything we do.</li>
          <li><strong>Innovation:</strong> We embrace new ideas and technologies to stay ahead.</li>
          <li><strong>Integrity:</strong> We operate with honesty and transparency.</li>
          <li><strong>Quality:</strong> We strive for the highest standards in our products and services.</li>
        </ul>
      </section>

      

      <section className="team mb-8">
        <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="team-member text-center">
            <img src="/images/john-doe.jpg" alt="John Doe" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="team-member text-center">
            <img src="/images/jane-smith.jpg" alt="Jane Smith" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="team-member text-center">
            <img src="/images/emily-johnson.jpg" alt="Emily Johnson" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-bold">Emily Johnson</h3>
            <p className="text-gray-600">Marketing Director</p>
          </div>
        </div>
      </section>

      <section className="services mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p>Instant Dokan offers a comprehensive suite of services to help businesses sell online, including:</p>
        <ul className="list-disc list-inside">
          <li>Customizable storefronts</li>
          <li>Integrated payment solutions</li>
          <li>Advanced analytics and reporting</li>
          <li>Marketing and SEO tools</li>
          <li>24/7 customer support</li>
        </ul>
      </section>

      <section className="testimonials mb-8">
        <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
        <blockquote className="border-l-4 border-teal-500 pl-4 mb-4">
          &quot;Instant Dokan has transformed our business. Their platform is easy to use, and their support is outstanding.&quot; - Sarah, Business Owner
        </blockquote>
        <blockquote className="border-l-4 border-teal-500 pl-4 mb-4">
          &quot;We saw a 50% increase in sales after switching to Instant Dokan. Highly recommend!&quot; - Mark, Retailer
        </blockquote>
      </section>

      <section className="community mb-8">
        <h2 className="text-3xl font-bold mb-4">Giving Back</h2>
        <p>We believe in giving back to the community. We regularly participate in local charity events and are committed to sustainable business practices.</p>
      </section>

      <section className="contact mb-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>We&apos;d love to hear from you! Reach out to us at:</p>
        <ul className="list-disc list-inside">
          <li>Email: support@instantdokan.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Follow us on <a href="#" className="text-teal-500">Social Media</a></li>
        </ul>
      </section>

      <section className="careers mb-8">
        <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
        <p>We&apos;re always looking for talented individuals to join our growing team. Check out our <a href="#" className="text-teal-500">Careers Page</a> for current openings.</p>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
