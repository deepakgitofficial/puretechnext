"use client"
import React, { useState, useEffect } from "react";

const TypingEffect = () => {
    const texts = [

        "Smart Web & Mobile Solutions That Work",
        "We Build Websites That Grow Your Business",
        "Websites and Apps Made Easy",

    ];

    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const currentText = texts[index];

        let speed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentText.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            } else {
                setDisplayText(currentText.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            }

            if (!isDeleting && charIndex === currentText.length) {
                setIsDeleting(true);
                speed = 1500;
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index, texts]);

    return (
        <h2 id="textAnimate">
            {displayText}
            <span className="cursor">|</span>
        </h2>
    );
};

export default TypingEffect;