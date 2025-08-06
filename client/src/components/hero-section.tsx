import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
          Sign2Speak
        </h1>
        <p className="text-lg sm:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed font-medium">
          Instantly translate American Sign Language (ASL) into speech using your camera and AI.
        </p>
        <p className="text-base sm:text-lg text-muted-foreground/80 mb-8 sm:mb-10 max-w-2xl mx-auto">
          Privacy-first AI technology that works entirely in your browser. No accounts, no data collection—just seamless, accessible communication for everyone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            onClick={onGetStarted}
            size="lg"
            className="btn-hover text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto w-full sm:w-auto transition-all duration-200 transform hover:scale-105"
          >
            <span>Let's translate</span>
            <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 ml-1.5 sm:ml-2" />
          </Button>
          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 pulse-animation"></div>
            <span className="text-center sm:text-left">Works on mobile, tablet & desktop</span>
          </div>
        </div>
        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-2">
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap">
            ⚡ Real-time recognition
          </div>
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap">
            🔒 Privacy-first
          </div>
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap">
            🗣️ Sign-to-speech
          </div>
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap">
            📱 Mobile-friendly
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Separator />
      </div>
    </section>
  );
}
