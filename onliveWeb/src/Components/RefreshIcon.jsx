import React from "react";


const stats = [
    { value: "960", label: "Project Completed" },
    { value: "900", label: "Positive Feedback" },
    { value: "0", label: "Running Projects" },
    { value: "30", label: "Average cost per hour" },
];

const RefreshIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-orange-600"
    >
        <polyline points="1 4 1 10 7 10"></polyline>
        <polyline points="23 20 23 14 17 14"></polyline>
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
    </svg>
);

export default function StatsSection() {
    return (
        <section className="bg-white py-16">
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-4"
                    >

                        <div className="flex  items-center justify-center w-18 h-30 rounded-xl bg-black flex-shrink-0 ">
                            <RefreshIcon className="w-8 h-8 text-orange-500" />
                        </div>


                        <div className="text-left w-500 ">
                            <h2 className="text-4xl py-4 font-bold text-gray-900">{item.value}</h2>
                            <p className="text-gray-700">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
