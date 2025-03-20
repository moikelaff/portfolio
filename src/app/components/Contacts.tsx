// components/ContactsSection.jsx
import Image from 'next/image';
import Link from 'next/link';

const Contacts = () => {
  return (
    <section id="contacts" className="min-h-screen relative flex flex-col justify-between">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Contacts.png" 
          alt="Contacts Background" 
          fill 
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-6 z-10 text-center">
          <h2 className="text-white text-6xl md:text-8xl mb-12">FIN.</h2>
          
          {/* You can add a contact form or additional content here */}
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-transparent z-10 py-6">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-6">
            <Link href="mailto:contact@dylan.com" aria-label="Email">
              <div className="text-white hover:text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </Link>
            <Link href="#" aria-label="Video">
              <div className="text-white hover:text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </Link>
            <Link href="https://www.instagram.com/" aria-label="Instagram">
              <div className="text-white hover:text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM15 5h-6a4 4 0 00-4 4v6a4 4 0 004 4h6a4 4 0 004-4V9a4 4 0 00-4-4z" />
                </svg>
              </div>
            </Link>
            <Link href="https://github.com/" aria-label="GitHub">
              <div className="text-white hover:text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/" aria-label="LinkedIn">
              <div className="text-white hover:text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                </svg>
              </div>
            </Link>
          </div>
          <div className="text-center mt-4 text-white text-sm">
            © 2025 DYLAN ADIPTAWIJAYA. ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;