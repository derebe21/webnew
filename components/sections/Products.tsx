'use client';

import { motion } from 'framer-motion';

const brands = [
  'logo-Cisco.jpg',
  'logo-Microsoft.jpg',
  'logo-Vmware.png',
  'logo-DELL-EMC.jpg',
  'logo-Hewlett-Packard-Enterprise.jpg',
  'logo-Lenovo.jpg',
  'logo-Huawei.jpg',
  'logo-Fortinet.jpg',
  'logo-checkpoint.png',
  'logo-crowdstrike.png',
  'logo-sophos.png',
  'logo-imperva.png',
  'logo-Darktrace.png',
  'hikvision.png',
  'dhua.png',
  'AXIS.png',
  'Bosch.jpg',
  'Honeywell.png',
  'logo-NetApp.jpg',
  'logo-Synology.jpg',
  'logo-Juniper.jpg'
];

export function Products() {
  // Duplicate brands array to create seamless loop for the marquee
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section id="technology" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#2563EB] rounded-full blur-[150px] opacity-10 pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#06B6D4] rounded-full blur-[150px] opacity-5 pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase mb-4 font-['Montserrat',sans-serif]">
            Trusted Technology <span className="text-[#06B6D4]">Brands</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden bg-[#0F172A]/30 py-12 border-y border-white/5 backdrop-blur-sm z-10">
        {/* Shadow overlays for smooth fade on edges */}
        <div className="absolute top-0 left-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none" />

        {/* Scrolling Track */}
        <div 
          className="flex w-max animate-scroll hover:[animation-play-state:paused] group items-center"
          style={{ animationDuration: '40s' }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div 
              key={`${brand}-${index}`} 
              className="relative h-16 w-32 md:h-20 md:w-48 mx-6 md:mx-10 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
            >
              <img 
                src={`/images/trusted-brands/${brand}`} 
                alt="" 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
