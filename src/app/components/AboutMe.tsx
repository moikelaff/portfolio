import Image from 'next/image';

const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen relative flex items-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/AboutMe.png" 
          alt="Classical Architecture Background" 
          fill 
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-end text-right">
          <h2 style={{ fontFamily: 'var(--font-serif)' }} className="text-white text-6xl md:text-8xl mb-6">
            WHO AM I
          </h2>
          
          <div className="bg-black/70 p-6 max-w-md">
            <p className="text-white mb-4">
              <span style={{ color: 'var(--beige)' }} className="font-bold">GREETINGS, I AM DYLAN.</span> IN THE SPIRIT OF 
              PAST SCHOLARS, I AM ON A JOURNEY OF 
              PERPETUAL LEARNING, DELVING INTO THE 
              REALMS OF SOFTWARE AND CLOUD 
              ENGINEERING.
            </p>
            
            <p className="text-white">
              <span style={{ color: 'var(--beige)' }} className="font-bold">PROGRESS AND ART</span> ARE THE TWIN PILLARS THAT 
              UPHOLDS MY PASSION FOR TECHNOLOGY. 
              EVERY PROJECT, EVERY MILESTONE, AND 
              EVERY DISCOVERY UNFOLDS BENEATH THE 
              SHADOW OF ELEGANCE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;