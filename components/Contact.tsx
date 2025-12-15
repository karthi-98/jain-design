import React, { useState } from 'react';
import { Send, Loader2, Mail, Phone, MessageSquare, Instagram, CheckCircle2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Standard Website (₹12k - ₹15k)',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add document to Firestore
      await addDoc(collection(db, 'designwithkarthick'), {
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        service: formState.service,
        budget: formState.budget,
        message: formState.message,
        timestamp: serverTimestamp(),
        status: 'new', // You can use this to track if you've responded
      });

      // Show success message
      setIsSuccess(true);

      // Reset form
      setFormState({
        name: '',
        email: '',
        phone: '',
        service: 'Standard Website (₹12k - ₹15k)',
        budget: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again or contact us directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // For name field, only allow letters, spaces, and basic punctuation
    if (name === 'name') {
      const sanitized = value.replace(/[^a-zA-Z\s.'-]/g, '');
      setFormState({
        ...formState,
        [name]: sanitized
      });
      return;
    }

    // For phone number, only allow digits, spaces, and plus sign
    if (name === 'phone') {
      const sanitized = value.replace(/[^\d\s+]/g, '');
      setFormState({
        ...formState,
        [name]: sanitized
      });
      return;
    }

    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden scroll-mt-28">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl transform translate-x-1/2"></div>
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-gray-100 rounded-full blur-3xl transform -translate-x-1/3"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Context & Info */}
        <div className="space-y-8">
            <div>
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                    <span className="text-brand-green font-bold tracking-widest uppercase text-xs">Get Started</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                    Ready to scale your <br />
                    <span className="text-gray-400 font-serif italic">digital presence?</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Whether you need a high-converting website, a complex web application, or an e-commerce store, we are ready to bring your vision to life. Fill out the form, and we'll get back to you within 24 hours.
                </p>
            </div>

            <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-green shrink-0">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900">Email Us</h4>
                        <p className="text-gray-500">designwithkarthick@gmail.com</p>
                    </div>
                </div>
                
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-green shrink-0">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900">Call Us</h4>
                        <p className="text-gray-500">+91 8838143550</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-green shrink-0">
                        <MessageSquare size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900">WhatsApp</h4>
                        <p className="text-gray-500">+91 8838143550</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-green shrink-0">
                        <Instagram size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900">Instagram</h4>
                        <a href="https://www.instagram.com/designwithkarthick/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-green transition-colors">@designwithkarthick</a>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 relative">
            {isSuccess ? (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white rounded-3xl p-8 text-center animate-fade-in-up">
                    <div className="w-20 h-20 mb-6 text-brand-green animate-bounce">
                        <CheckCircle2 size={80} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 max-w-xs mx-auto">
                        Thank you for contacting DesignWithKarthick. We have received your request and will be in touch shortly.
                    </p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="mt-8 px-6 py-2 text-sm font-bold text-gray-900 underline hover:text-brand-green"
                    >
                        Send another message
                    </button>
                </div>
            ) : null}

            <form onSubmit={handleSubmit} className={`space-y-6 transition-opacity duration-300 ${isSuccess ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            pattern="[a-zA-Z\s.'-]+"
                            title="Please enter a valid name (letters only)"
                            minLength={2}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-brand-green/20 focus:bg-white focus:ring-4 focus:ring-brand-green/10 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 00000"
                            pattern="[\d\s+]+"
                            title="Please enter a valid phone number (numbers only)"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-brand-green/20 focus:bg-white focus:ring-4 focus:ring-brand-green/10 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-brand-green/20 focus:bg-white focus:ring-4 focus:ring-brand-green/10 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-bold text-gray-700 ml-1">Interested Service</label>
                        <Select
                            value={formState.service}
                            onValueChange={(value) => setFormState({ ...formState, service: value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Standard Website (₹12k - ₹15k)">Standard Website (₹12k - ₹15k)</SelectItem>
                                <SelectItem value="E-commerce Website (₹30k - ₹40k)">E-commerce Website (₹30k - ₹40k)</SelectItem>
                                <SelectItem value="Customised Website (₹45k - ₹50k)">Customised Website (₹45k - ₹50k)</SelectItem>
                                <SelectItem value="Other / Custom Requirement">Other / Custom Requirement</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-bold text-gray-700 ml-1">Your Budget (Optional)</label>
                        <input
                            type="text"
                            id="budget"
                            name="budget"
                            value={formState.budget}
                            onChange={handleChange}
                            placeholder="e.g., ₹20,000"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-brand-green/20 focus:bg-white focus:ring-4 focus:ring-brand-green/10 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">Project Details</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-transparent focus:border-brand-green/20 focus:bg-white focus:ring-4 focus:ring-brand-green/10 transition-all outline-none font-medium text-gray-900 placeholder:text-gray-400 resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="animate-spin" size={20} />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Request
                            <Send size={18} />
                        </>
                    )}
                </button>
            </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;