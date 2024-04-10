"use client";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { useEffect, useState } from 'react';
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";

const loadingStates = [
    {
      text: "Initializing AI systems",
    },
    {
      text: "Loading ML models",
    },
    {
      text: "Optimizing performance",
    },
    {
      text: "Setting up user interface",
    },
    {
      text: "Preparing your personalized AI experience",
    },
    {
      text: "Almost there",
    },
    {
      text: "Welcome to AI Home",
    },
  ];

  export default function MultiStepLoaderDemo() {
    const [loading, setLoading] = useState(true);

    // Calculate total duration for all loading states
    const totalDuration = loadingStates.length * 1000; // 1000 is the duration for each state
  
    useEffect(() => {
      // Set loading to false after totalDuration
      const timer = setTimeout(() => {
        setLoading(false);
      }, totalDuration);
  
      // Clean up timer on unmount
      return () => clearTimeout(timer);
    }, []);
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        {/* Core Loader Modal */}
        <Loader loadingStates={loadingStates} loading={loading} duration={1000} />
  
        {loading && (
          <button
            className="fixed top-4 right-4 text-black dark:text-white z-[120]"
            onClick={() => setLoading(false)}
          >
            <IconSquareRoundedX className="h-10 w-10" />
          </button>
        )}
      </div>
    );
  }
