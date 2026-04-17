"use client";

import { useState } from "react";


export default function ContactForm3() {


    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        message: "",
    });


    const [status, setStatus] = useState({ type: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: "", message: "" });
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok) {
                setStatus({ type: "success", message: "Message sent successfully!" });
                setFormData({ fullName: "", email: "", mobile: "", message: "" });
            } else {
                setStatus({ type: "error", message: data.error || "Something went wrong." });
            }
        } catch (error) {
            setStatus({ type: "error", message: "Failed to connect to the server." });
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="glass dark:glass-dark p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Us</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Full Name *</label>
                    <input
                        type="text" name="fullName" required
                        value={formData.fullName} onChange={handleChange}
                        className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-foreground"
                        placeholder="John Doe"
                    />
                </div>

                <div className="grid grid-cols-1 ">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Email Address *</label>
                        <input
                            type="email" name="email" required
                            value={formData.email} onChange={handleChange}
                            className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-foreground"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Mobile (Optional)</label>
                        <input
                            type="text" name="mobile"
                            value={formData.mobile} onChange={handleChange}
                            className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-foreground"
                            placeholder="+91 ..."
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Message *</label>
                    <textarea
                        name="message" required rows="4"
                        value={formData.message} onChange={handleChange}
                        className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow text-foreground resize-none"
                        placeholder="How can we help you?"
                    ></textarea>
                </div>

                <button
                    type="submit" disabled={loading}
                    className={`w-full  text-white font-bold py-4 px-6 rounded-xl  transition-all flex items-center justify-center transform ${loading ? "bg-gray-400" : "bg-gradient-to-r from-primary to-accent"
                        }`}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>

                {status.message && (
                    <p className={`mt-4 text-center text-sm ${status.type === "success" ? "text-green-500" : "text-red-500"}`}>
                        {status.message}
                    </p>
                )}
            </form>
        </div>
    );
}