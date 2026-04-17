// "use client";

// import React, { useState } from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

// const ContactSection = () => {
//   const [state, handleSubmit] = useForm("mnjnpvnd");
//   const [isSubmitted, setIsSubmitted] = useState(false);


//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     if (state.submitting) return; 
//     handleSubmit(e);

//     // setTimeout(() => setIsSubmitted(true), 1000);
//   };
//   // mnjnpvnd


//   return (
//     <section className="py-24 bg-white dark:bg-[#0a0a0a]">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           <div>
//             <h2 className="text-secondary dark:text-primary tracking-wider font-bold text-sm uppercase mb-3">Get In Touch</h2>
//             <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
//               Ready to Start Your Digital Journey?
//             </h3>
//             <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
//               We are available for new projects and collaborations. Feel free to reach out via email, phone, or simply drop a message using the form.
//             </p>

//             <div className="space-y-8">
//               <div className="flex items-start space-x-5">
//                 <div className="bg-primary/10 p-4 rounded-xl">
//                   <Mail className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-foreground text-lg mb-1">Email Us</h4>
//                   <a href="mailto:deepsoftskills@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">deepsoftskills@gmail.com</a>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-5">
//                 <div className="bg-purple-500/10 p-4 rounded-xl">
//                   <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-foreground text-lg mb-1">Call Us</h4>
//                   <a href="tel:+918171654421" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">+91 81716 54421</a>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-5">
//                 <div className="bg-pink-500/10 p-4 rounded-xl">
//                   <MapPin className="h-6 w-6 text-pink-600 dark:text-pink-400" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-foreground text-lg mb-1">Visit Us</h4>
//                   <p className="text-gray-600 dark:text-gray-400">Baghpat, Uttar Pradesh, India 250609</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="glass dark:glass-dark p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>

//             <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center font-heading">
//               <MessageSquare className="mr-3 h-6 w-6 text-primary" />
//               Send a Message
//             </h3>

//             {state.succeeded || isSubmitted ? (
//               <div className="text-center py-12">
//                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Send className="h-8 w-8 text-green-600" />
//                 </div>
//                 <h4 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h4>
//                 <p className="text-gray-600 dark:text-gray-400 mb-6">Thank you for contacting Pure Tech Zone. We will get back to you shortly.</p>
//                 <button
//                   onClick={() => window.location.reload()}
//                   className="text-primary font-medium hover:underline"
//                 >
//                   Send another message
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-foreground"
//                       placeholder="John Doe"
//                       required
//                     />
//                     <ValidationError prefix="Name" field="name" errors={state.errors} />
//                   </div>

//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-foreground"
//                       placeholder="+91 98765 43210"
//                       required
//                     />
//                     <ValidationError prefix="Phone" field="phone" errors={state.errors} />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-foreground"
//                     placeholder="john@example.com"
//                     required
//                   />
//                   <ValidationError prefix="Email" field="email" errors={state.errors} />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="4"
//                     className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-foreground resize-none"
//                     placeholder="Tell us about your project requirements..."
//                     required
//                   ></textarea>
//                   <ValidationError prefix="Message" field="message" errors={state.errors} />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={state.submitting}
//                   className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all flex items-center justify-center transform active:scale-[0.98] disabled:opacity-70"
//                 >
//                   {state.submitting ? 'Sending...' : 'Send Message'}
//                   {!state.submitting && <Send className="ml-2 h-5 w-5" />}
//                 </button>
//               </form>
//             )}
//           </div> 
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
