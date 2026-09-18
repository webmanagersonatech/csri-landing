"use client";

interface BannerProps {
  image: string;
  title: string;
  subtitle?: string;
}
const ReuseBanner: React.FC<BannerProps> = ({
  image,
  title,
  subtitle
}) => {
  return <section className="relative flex items-center justify-center bg-cover bg-center  
                 pt-16 sm:pt-20 h-[calc(14rem+4rem)] sm:h-[calc(16rem+5rem)] md:h-[calc(18rem+5rem)] lg:h-[calc(20rem+5rem)]" style={{
    backgroundImage: `url(${image})`
  }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Title animation */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {title}
          </h1>

          {/* Subtitle animation */}
          {subtitle && <p className="mt-3 text-base sm:text-lg md:text-xl">
              {subtitle}
            </p>}
        </div>
      </div>
    </section>;
};
export default ReuseBanner;