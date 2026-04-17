import React from 'react';
import ContactSection from '@/components/home/ContactSection';
import CTASection from '@/components/home/CTASection';
import ContactForm3 from '@/components/contact/ContactForm3';

export const metadata = {
  title: "Contact Us | Pure Tech Zone",
  description: "Get in touch with Pure Tech Zone for professional web development services in Baghpat. Let's discuss your next project.",
};

export default function ContactPage() {


  return (
    <>
      <section className="relative pt-32 pb-10 bg-gray-50 dark:bg-[#0c121e] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 font-heading">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Us</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We are always excited to discuss new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>
      </section>
      <section>
        <div className='container mx-auto'>

          <div className="mt-10 mb-10 max-w-5xl mx-auto">
            <ContactForm3 />
          </div>
        </div>
      </section>


      <section className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111666.90300188739!2d77.16482590204686!3d28.948281146604245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c5eed4c153ab7%3A0xeabff194a20b0805!2sBaghpat%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703666016147!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </section>
      {/* <CTASection /> */}
    </>
  );
}
