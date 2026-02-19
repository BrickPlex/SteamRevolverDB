/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CornerDecoration } from './components/CornerDecoration';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';

const levels = [
  { name: "robtop travel", link: "https://drive.google.com/file/d/1hM8gMRATwuimPqXUUtSl7jBR9RyYayXl/view?usp=drive_link" },
  { name: "YOUVE BEN TROLLED", link: "https://drive.google.com/file/d/1nCVMoxGS4olSSvomA1lH7ArmXItkidhE/view?usp=sharing" },
  { name: "Amplification", link: "https://drive.google.com/file/d/11DHxq4JdNvQ-KBoxdPeZtz-Z1lRDGuLz/view?usp=sharing" },
  { name: "Ashly Wave trials", link: "https://drive.google.com/file/d/1Q-ObqUm9vBIHoEq8cocopoBy0cKvpNVj/view?usp=sharing" },
  { name: "BloodBath", link: "https://drive.google.com/file/d/1NnpUSE-eWvi5jHHrIKS0gWlF34PPcQg7/view?usp=sharing" },
  { name: "BloodLust", link: "https://drive.google.com/file/d/19lLC2KKABZ9MGNTsGmupQiBJ6gkCPx3c/view?usp=sharing" },
  { name: "Flame Wall", link: "https://drive.google.com/file/d/1-rGTgZMn0izTnwJ1QjOuAFbZ8i-spttf/view?usp=sharing" },
  { name: "IspyWithMyLittleEye", link: "https://drive.google.com/file/d/18FVFyYKFGG5Nq5-fJK16QjHfWl-9M13G/view?usp=sharing" },
  { name: "Orbit", link: "https://drive.google.com/file/d/1n-_qFhoM15412WXmVElAKha6nppHCeUp/view?usp=sharing" },
  { name: "Skeletal Shenanigans", link: "https://drive.google.com/file/d/1PPXuwOl_eYrtbYojpC1voQ5QGkPnFosU/view?usp=sharing" },
  { name: "sonic wave", link: "https://drive.google.com/file/d/1m1Kd8fr4ziZci4StZ5ya4x56EuO7A-Hz/view?usp=sharing" },
  { name: "super sonic", link: "https://drive.google.com/file/d/1qWFPNT3vVQ9yk6g_4d0MgGzGWHCu_lOS/view?usp=sharing" },
  { name: "thinking space", link: "https://drive.google.com/file/d/1j7ToyNX1XkzfKgtQeribsnXrYlx6nfwm/view?usp=sharing" },
  { name: "Tital wave", link: "https://drive.google.com/file/d/16qADMl9i1OUpNqkvcNNa3CTXwD01F4X_/view?usp=sharing" },
  { name: "Doppler", link: "https://drive.google.com/file/d/1U5KyPODP8EZBnSW8y4AGXA7rY3AOFW4p/view?usp=sharing" },
  { name: "thinking space 2", link: "https://drive.google.com/file/d/1floEDwlVbOm68BtQeHjShvuxOvK-iMwF/view?usp=sharing" },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(false);

  const filteredLevels = levels.filter(level => 
    level.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEnableSound = () => {
    const audio = new Audio('/RobTop - Geometry Dash Menu Theme.mp3');
    audio.loop = true;
    audio.play().catch(e => console.error("Audio play failed:", e));
    setSoundEnabled(true);
  };

  if (!soundEnabled) {
    return (
      <div 
        className="h-screen w-screen bg-black flex items-center justify-center cursor-pointer font-pusab"
        onClick={handleEnableSound}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-white text-[5vmin] drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        >
          Click to enable sound
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen bg-[#005de8] overflow-hidden font-pusab">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      
      {/* Center Pan Image and Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-[80%] h-[80%] flex items-center justify-center">
          <img src="/pan.png" alt="Pan" className="w-full h-full object-contain pointer-events-none select-none" />
          
          {/* List Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center py-[10vmin] px-[26vmin]">
            
            {/* Search Bar */}
            <div className="w-full mb-[1vmin] relative">
              <input 
                type="text" 
                placeholder="Search levels..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/40 border-[0.25vmin] border-white/20 text-white placeholder-white/50 rounded-[0.8vmin] py-[0.8vmin] pl-[3vmin] pr-[1vmin] text-[1.5vmin] focus:outline-none focus:border-white/60 transition-colors font-pusab"
              />
              <Search className="absolute left-[0.8vmin] top-1/2 -translate-y-1/2 w-[1.5vmin] h-[1.5vmin] text-white/50" />
            </div>

            <div className="w-full h-full overflow-y-auto space-y-[1.5vmin] pr-[1vmin] [&::-webkit-scrollbar]:w-[0.8vmin] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/40">
              {filteredLevels.map((level, i) => (
                <motion.a 
                  key={i} 
                  href={level.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black/40 border-[0.4vmin] border-white/10 hover:border-white/40 transition-colors p-[2.5vmin] rounded-[1.5vmin] flex items-center justify-between group cursor-pointer backdrop-blur-sm block"
                >
                  <div className="flex flex-col">
                    <span className="text-white text-[3.5vmin] drop-shadow-md leading-none">{level.name}</span>
                    <span className="text-white/50 text-[1.8vmin] uppercase tracking-wider mt-[0.8vmin]">Normal</span>
                  </div>
                  <div className="w-[6vmin] h-[6vmin] rounded-full border-[0.4vmin] border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <div className="w-0 h-0 border-t-[1.2vmin] border-t-transparent border-l-[2vmin] border-l-white border-b-[1.2vmin] border-b-transparent ml-[0.3vmin]"></div>
                  </div>
                </motion.a>
              ))}
              {filteredLevels.length === 0 && (
                <div className="text-white/50 text-center py-[4vmin] text-[2.5vmin]">
                  No levels found
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Corners */}
      <CornerDecoration className="absolute top-0 left-0 rotate-90" />
      <CornerDecoration className="absolute top-0 right-0 rotate-180" />
      <CornerDecoration className="absolute bottom-0 right-0 -rotate-90" />
      <CornerDecoration className="absolute bottom-0 left-0" />
    </div>
  );
}
