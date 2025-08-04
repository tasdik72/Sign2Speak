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
      
      <div className="relative max-w-5xl mx-auto text-center">
        <h1 className="text-7xl sm:text-9xl lg:text-[8rem] font-bold mb-4 leading-tight">
          Sign2Speak
        </h1>
        <p className="text-2xl sm:text-3xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed font-semibold">
          Instantly translate American Sign Language (ASL) into speech using your camera and AI.
        </p>
        <p className="text-xl text-muted-foreground/80 mb-10 max-w-2xl mx-auto">
          Privacy-first AI technology that works entirely in your browser. No accounts, no data collection—just seamless, accessible communication for everyone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            onClick={onGetStarted}
            size="lg"
            className="btn-hover text-lg px-8 py-4 h-auto"
          >
            <span>Let's translate</span>
            <ArrowDown className="h-5 w-5 ml-2" />
          </Button>
          <div className="flex items-center text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 pulse-animation"></div>
            <span>Works on mobile, tablet & desktop</span>
          </div>
        </div>
        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm font-medium">
            ⚡ Real-time recognition
          </div>
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm font-medium">
            🔒 Privacy-first
          </div>
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm font-medium">
            🗣️ Sign-to-speech
          </div>
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm font-medium">
            📱 Works smoothly
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Separator />
      </div>
    </section>
  );
}
