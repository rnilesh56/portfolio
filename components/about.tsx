"use client";
import { motion } from "framer-motion";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I graduating with a degree in{" "}
        <span className="font-medium">Bachelor of Technology</span>, in Computer
        Science Engineering passion from <span className="font-medium">Dev Bhoomi Group Of Institution</span> Dehradun, Uttrakhand. I learned{" "}
        <span className="font-medium">frontend web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React.js, Next.js, JavaScript, Tailwind CSS
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">frontend position</span> as a developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy listening
        music and watching movies.
      </p>
    </motion.section>
  );
}
