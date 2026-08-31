import Image from "next/image";

export default function Aboutcsri() {
    return (
        <section className="px-8 py-14 md:px-16 lg:px-24 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center">

                {/* Left side - Text Content (takes remaining space) */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        About <span className="text-blue">CSRI</span>
                    </h2>

                    {/* Description */}
                    <div className="flex flex-col gap-4 text-gray-600 text-base md:text-lg leading-relaxed">
                        <p>
                            <span className="font-semibold text-gray-900">CSRI</span> is more than an initiative —
                            it&apos;s a bridge between academic learning and community transformation.
                        </p>
                        <p>
                            A social arm of Sona Institutions, the Centre for Social Responsibility
                            Initiatives (CSRI) is a dedicated institutional platform that channels
                            student and faculty engagement toward socially impactful projects and
                            inclusive development.
                        </p>
                        <p>
                            Established with a vision to bridge academic learning with community
                            transformation, CSRI focuses on areas such as healthcare awareness,
                            environmental conservation, digital literacy, vocational skill development,
                            education outreach, and sustainable rural development.
                        </p>
                        <p>
                            The Centre also coordinates CSR-funded projects, hosts rural immersion
                            programs, and leads disaster preparedness initiatives. By integrating
                            empathy with action and technical knowledge with ground realities,
                            CSRI empowers students to become responsible citizens who contribute
                            meaningfully to national and global development goals.
                        </p>
                    </div>
                </div>

        <div className="hidden lg:block w-1/5">
    <div className="relative h-[500px] rounded-full overflow-hidden shadow-2xl group">
        <Image
            src="/images/about/aboutcsri.webp"
            alt="CSRI Activities"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
</div>

            </div>
        </section>
    );
}