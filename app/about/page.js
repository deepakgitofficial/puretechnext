import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  ArrowRight,
  CheckCircle,
  Code,
} from "lucide-react";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "About Us | Pure Tech Zone",
  description:
    "Learn more about Pure Tech Zone, the leading web development agency in Baghpat dedicated to building fast and secure digital solutions.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-15 md:py-20 bg-gray-50 dark:bg-[#0c121e] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 font-heading">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Pure Tech Zone
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We are a team of passionate developers and designers dedicated to
            elevating your digital presence through cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Our Story / Founder */}
      <section className="py-24 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative ">
                {/* Replace with actual founder image later if available */}

                <div className="glass dark:glass-dark rounded-2xl p-6 relative overflow-hidden h-[400px] shadow-lg">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>

                  <div className="font-mono text-sm text-gray-700 dark:text-gray-300 space-y-4">
                    <div className="flex items-center text-primary mb-2">
                      <Code className="w-4 h-4 mr-2" />
                      <span>index.js</span>
                    </div>
                    <p>
                      <span className="text-purple-500">import</span> React{" "}
                      <span className="text-purple-500">from</span> 'react';
                    </p>
                    <p>
                      <span className="text-purple-500">import</span> {"{"}{" "}
                      PureTechZone {"}"}{" "}
                      <span className="text-purple-500">from</span> './agency';
                    </p>
                    <br />
                    <p>
                      <span className="text-blue-500">const</span> buildWebsite
                      = () =&gt; {"{"}
                    </p>
                    <p className="pl-4">return (</p>
                    <p className="pl-8 text-green-600 dark:text-green-400">
                      &lt;PureTechZone
                    </p>
                    <p className="pl-12 text-yellow-600 dark:text-yellow-400">
                      quality="premium"
                    </p>
                    <p className="pl-12 text-yellow-600 dark:text-yellow-400">
                      speed="blazing-fast"
                    </p>
                    <p className="pl-12 text-yellow-600 dark:text-yellow-400">
                      seo="optimized"
                    </p>
                    <p className="pl-8 text-green-600 dark:text-green-400">
                      /&gt;
                    </p>
                    <p className="pl-4">);</p>
                    <p>{"}"};</p>
                  </div>
                  <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50"></div>
                </div>
                <div
                  className="absolute -bottom-6 -left-6 glass dark:glass-dark p-4 rounded-xl flex items-center gap-4 animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">100+ Projects</p>
                    <p className="text-xs text-gray-500">
                      Successfully Delivered
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-secondary dark:text-primary tracking-wider font-bold text-sm uppercase mb-3">
                Our Story
              </h2>
              <h3 className="text-3xl font-bold text-foreground mb-6 font-heading">
                About Pure Tech Zone
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                Pure Tech Zone has quickly become a trusted name in web
                development in Baghpat and beyond. We help businesses, startups,
                and individuals build professional, responsive, and
                user-friendly websites that strengthen their online presence.
              </p>
              <div>
                <ul>
                  <li className="flex items-start mb-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3" />
                    <span>
                      Founded in 2020, Pure Tech Zone has quickly become a
                      trusted name in web development in Baghpat and beyond.
                    </span>
                  </li>
                  <li className="flex items-start mb-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3" />
                    <span>
                      Our team consists of experienced developers, designers,
                      and digital strategists who are passionate about creating
                      exceptional digital experiences.
                    </span>
                  </li>
                  <li className="flex items-start mb-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3" />
                    <span>
                      We have successfully completed over 100 projects for
                      clients across various industries, delivering solutions
                      that drive results.
                    </span>
                  </li>
                </ul>
              </div>

              <Link
                href="/portfolio"
                className="inline-flex items-center font-bold text-primary hover:text-primary-dark transition-colors"
              >
                View Our Work <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50 dark:bg-[#0c121e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-secondary dark:text-primary tracking-wider font-bold text-sm uppercase mb-3">
              Core Values
            </h2>
            <h3 className="text-3xl font-bold text-foreground mb-6 font-heading">
              What Drives Us Forward
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#111111] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4 font-heading">
                Our Mission
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                To empower local and global businesses with fast, secure, and
                beautiful digital platforms that accelerate their growth.
              </p>
            </div>

            <div className="bg-white dark:bg-[#111111] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4 font-heading">
                Our Vision
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                To be the most trusted and innovative web development agency in
                Baghpat, continuously pushing the boundaries of web tech.
              </p>
            </div>

            <div className="bg-white dark:bg-[#111111] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 text-center hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4 font-heading">
                Our Passion
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                We love what we do. From writing clean code to designing
                pixel-perfect interfaces, we pour our heart into every project.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <WhyChooseUs /> */}
      {/* <CTASection /> */}
    </>
  );
}
