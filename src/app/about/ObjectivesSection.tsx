import AnimatedSection from "../../components/AnimatedSection";

export const ObjectivesSection = () => {
    const objectives = [
        {
            title: "Trade Facilitation & Promotion",
            description: "Enhance domestic and international trade opportunities by creating an enabling environment for businesses and reducing trade barriers in Imo State."
        },
        {
            title: "Investment Attraction",
            description: "Promote Imo State as a prime investment destination by showcasing opportunities and facilitating investment processes for local and foreign investors."
        },
        {
            title: "MSME Development",
            description: "Support the growth of Micro, Small, and Medium Enterprises through capacity building, access to finance, and market linkages."
        },
        {
            title: "Market Development & Access",
            description: "Create and expand market opportunities for local businesses through trade fairs, exhibitions, and international partnerships."
        },
        {
            title: "E-Commerce & Digital Trade",
            description: "Promote digital transformation in trade and commerce to enhance business operations and expand market reach through technology."
        },
        {
            title: "Policy & Regulatory Framework",
            description: "Develop and implement business-friendly policies and regulations that stimulate economic growth and ensure fair trade practices."
        }
    ];

    const coreValues = [
        "Excellence",
        "Innovation",
        "Integrity",
        "Transparency",
        "Partnership",
        "Customer-Centric"
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-8">
                <div className="mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-center mb-12">
                        Imo State Ministry of Trade, Commerce & Investment Objectives
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {objectives.map((objective, index) => (
                            <AnimatedSection key={index} delay={0.2}>
                            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md text-center">
                                <h3 className="font-medium text-[22px] mb-3">
                                    {objective.title}
                                </h3>
                                <p className="text-dark-primary-body text-[1rem]">
                                    {objective.description}
                                </p>
                            </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* Our Core Values */}
                <div>
                    <h2 className="text-[43px] font-medium text-center mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                        {coreValues.slice(0, 4).map((value, index) => (
                            <div key={index} className="bg-white p-6 border border-gray-200 rounded-lg shadow-md text-center">
                                <span className="font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-6">
                        {coreValues.slice(4).map((value, index) => (
                            <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center w-48">
                                <span className="font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 