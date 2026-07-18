import { motion } from 'framer-motion';
import { Calendar, MessageSquare } from 'lucide-react';

export function SpeedToLeadAnimation() {
  return (
    <div className="w-full h-full bg-[#111] flex items-center justify-center relative overflow-hidden p-4">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.15)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="flex items-center justify-between w-full max-w-[320px] z-10 relative">
        
        {/* Left: Mobile Phone */}
        <div className="relative w-[70px] h-[140px] rounded-[16px] border border-white/20 bg-black/50 backdrop-blur-md flex flex-col items-center pt-2.5 shadow-xl">
          {/* Phone Notch */}
          <div className="w-8 h-1 rounded-full bg-white/20 mb-3" />
          
          {/* Notification Bubble */}
          <motion.div
            animate={{ 
              y: [-10, 0, 0, 0, -10],
              opacity: [0, 1, 1, 1, 0],
              scale: [0.9, 1, 1, 1, 0.9]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut", times: [0, 0.1, 0.8, 0.9, 1] }}
            className="w-14 bg-purple-500/20 border border-purple-500/50 rounded-lg p-2 flex flex-col gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            <div className="flex items-center gap-1">
              <MessageSquare className="w-2.5 h-2.5 text-purple-400" />
              <div className="w-6 h-1 bg-purple-400/80 rounded-full" />
            </div>
            <div className="w-10 h-1 bg-white/40 rounded-full" />
            <div className="w-7 h-1 bg-white/20 rounded-full" />
          </motion.div>
        </div>

        {/* Center: Connection Line */}
        <div className="flex-1 h-px relative flex items-center justify-center mx-3">
          {/* Track */}
          <div className="absolute w-full h-[1px] bg-white/10" />
          
          {/* Shooting Laser Particle */}
          <motion.div
            animate={{ 
              left: ["0%", "100%", "100%", "0%"],
              opacity: [0, 1, 0, 0],
              scaleX: [1, 2, 1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.25, 0.35, 1] }}
            className="absolute w-8 h-[2px] bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.9)] rounded-full z-10 origin-left"
            style={{ left: "0%" }}
          />
        </div>

        {/* Right: CRM Dashboard */}
        <div className="relative w-[110px] h-[130px] rounded-xl border border-white/20 bg-black/50 backdrop-blur-md p-2.5 flex flex-col gap-2 shadow-xl">
          {/* Dashboard Header Dots */}
          <div className="flex items-center gap-1.5 border-b border-white/10 pb-2">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
          
          {/* Calendar Slot */}
          <div className="flex-1 bg-white/5 rounded-lg border border-white/5 flex flex-col items-center justify-center relative overflow-hidden gap-2">
             <motion.div
                animate={{
                  scale: [1, 1, 1.15, 1, 1],
                  color: ["#555", "#555", "#a855f7", "#a855f7", "#555"]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeOut", times: [0, 0.3, 0.4, 0.8, 1] }}
             >
                <Calendar className="w-7 h-7" />
             </motion.div>
             
             {/* "Booked" indicator pill */}
             <motion.div
                animate={{
                  opacity: [0, 0, 1, 1, 0],
                  y: [5, 5, 0, 0, 5]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "backOut", times: [0, 0.3, 0.4, 0.8, 1] }}
                className="w-10 h-1.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.5)]"
             />

             {/* Flash Overlay */}
             <motion.div
                animate={{ opacity: [0, 0, 0.3, 0, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeOut", times: [0, 0.35, 0.45, 0.8, 1] }}
                className="absolute inset-0 bg-purple-400 mix-blend-screen"
             />
          </div>
        </div>

      </div>
    </div>
  );
}
