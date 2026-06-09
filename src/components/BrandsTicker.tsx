import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "https://www.dropbox.com/scl/fi/s7bvtjrzffpg2azd1lirz/kdn40mjy1froedjndns0.webp?rlkey=4ktj6yww79c6ukiuy5xsvb1qm&st=p1xhrz3n&raw=1",
  "https://www.dropbox.com/scl/fi/m83cuxt4ppd2ejnt1z4k2/wbbkwsxrvvkzugkhbtod.webp?rlkey=6c6mchox7af3g7fuvxff2ew2e&st=x8zgaxrz&raw=1",
  "https://www.dropbox.com/scl/fi/01ywh288t3bycseqsh6wo/gh59tas0eoaqbg9e5e3x.webp?rlkey=j38mp9cjj8kkdz6ivllrpjpjv&st=wo04q777&raw=1",
  "https://www.dropbox.com/scl/fi/zikl77pbz5hcx5fyifxqy/e55awlzmu1unlsypbgka.webp?rlkey=vjsc9y5s2t8i48ks3u0unqpqw&st=pymt6cok&raw=1",
  "https://www.dropbox.com/scl/fi/6pit5g9xo5q26f5lipr4c/tata-motors-limited-vector-logo.webp?rlkey=2ezom1a54tt7f82vem603cmj3&st=ue854gox&raw=1",
  "https://www.dropbox.com/scl/fi/52vxi38xei7e9es6xmw9r/Lotto-logo-Performance.webp?rlkey=n98ww1acvbxqxvbri1wevlokg&st=d7tbtzz8&raw=1",
  "https://www.dropbox.com/scl/fi/ti9s6qs3f916a1m7ujq8u/Nivia_Sports_logo.webp?rlkey=fyj51fnwbxdj9kndrvrrxskv8&st=ze7eyvb5&raw=1",
  "https://www.dropbox.com/scl/fi/rq083zkd1ziewaez92o24/305959267_518669290261050_2056895688277529761_n.webp?rlkey=ujpudfppsqm04dy70acrzzdne&st=7p0wgqey&raw=1"
];

const BrandsTicker = () => {
  const tickerItems = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-32 bg-primary overflow-hidden border-b border-borderSoft/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-textMuted mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accentPink block"></span> Worked With
          </p>
          <h2 className="text-2xl md:text-3xl font-display font-light text-textMain tracking-tight">
            Brand collaborations
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <motion.div 
          className="flex items-center gap-20 md:gap-40 px-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 25,
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {tickerItems.map((brand, idx) => (
            <div key={idx} className="shrink-0 cursor-default group/logo relative flex items-center justify-center">
              <img 
                src={brand} 
                alt="Brand Logo" 
                loading="lazy"
                decoding="async"
                className="h-10 md:h-12 w-auto object-contain opacity-30 group-hover/logo:opacity-100 transition-all duration-[2000ms] ease-cinematic relative z-10" 
              />
              <div className="absolute inset-0 bg-accentLime/30 blur-3xl rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-[2000ms] -z-0 scale-150"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsTicker;
