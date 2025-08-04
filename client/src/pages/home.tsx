import { useState, useCallback } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { CameraWindow } from "@/components/camera-window";
import { LearnModeModal } from "@/components/learn-mode-modal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Shield, 
  Accessibility, 
  GraduationCap, 
  ArrowDown,
  Camera,
  Play
} from "lucide-react";

export default function Home() {
  const [isLearnModeOpen, setIsLearnModeOpen] = useState(false);
  const [isCameraWindowOpen, setIsCameraWindowOpen] = useState(false);

  const openCameraWindow = useCallback(() => {
    setIsCameraWindowOpen(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 fade-in">
        {/* Hero Section */}
        <HeroSection onGetStarted={openCameraWindow} />

        {/* Camera Section */}
        <section 
          id="camera-section" 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-background"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real-Time Recognition</h2>
              <p className="text-lg text-muted-foreground">
                Open the camera window to start detecting ASL signs instantly
              </p>
            </div>
            
            <div className="text-center">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-12">
                  <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Camera className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Start Detection</h3>
                  <p className="text-muted-foreground mb-8">
                    Click below to open the full-screen camera window with real-time ASL detection. 
                    The window will show live captions and speak detected signs aloud.
                  </p>
                  <Button 
                    onClick={openCameraWindow}
                    size="lg"
                    className="btn-hover inline-flex items-center space-x-2"
                  >
                    <Play className="h-5 w-5" />
                    <span>Open Camera Window</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Learning Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Master ASL with SignSpeak</h2>
              <p className="text-lg text-muted-foreground">
                Learn American Sign Language through interactive practice and real-time feedback
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Learning content */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Practice Mode</h3>
                    <p className="text-muted-foreground">
                      Use our interactive flashcards to learn ASL alphabet and common phrases. 
                      Get instant feedback on your hand positioning and gestures.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-Time Recognition</h3>
                    <p className="text-muted-foreground">
                      See your signs translated instantly as you practice. 
                      Perfect your technique with live feedback and pronunciation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                    <p className="text-muted-foreground">
                      Track your learning journey with detailed statistics. 
                      Monitor accuracy, speed, and mastery of different signs.
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button
                    onClick={() => setIsLearnModeOpen(true)}
                    size="lg"
                    className="btn-hover"
                  >
                    <GraduationCap className="h-5 w-5 mr-2" />
                    Start Learning Now
                  </Button>
                </div>
              </div>
              
              {/* Right side - Visual representation */}
              <div className="relative">
                <div className="bg-primary/5 rounded-2xl p-8 border border-border">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {['A', 'B', 'C', 'D', 'E', 'F'].map((letter) => (
                      <div key={letter} className="bg-background rounded-lg p-4 text-center border border-border">
                        <div className="text-2xl font-bold text-primary mb-1">{letter}</div>
                        <div className="text-xs text-muted-foreground">ASL</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-lg p-4 mb-4">
                      <div className="text-sm text-muted-foreground mb-1">Current Progress</div>
                      <div className="text-2xl font-bold text-primary">26/26</div>
                      <div className="text-xs text-muted-foreground">Alphabet Mastered</div>
                    </div>
                    <div className="flex justify-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-muted rounded-full"></div>
                      <div className="w-2 h-2 bg-muted rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose SignSpeak?</h2>
              <p className="text-lg text-muted-foreground">
                Powerful features designed for accessibility and privacy
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Real-Time</h3>
                  <p className="text-muted-foreground">
                    Instant ASL recognition and voice output with less than 300ms latency
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Privacy First</h3>
                  <p className="text-muted-foreground">
                    100% client-side processing. Your data never leaves your device
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Accessibility className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Accessible</h3>
                  <p className="text-muted-foreground">
                    WCAG 2.1 AA compliant with keyboard navigation and screen reader support
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Learn Mode</h3>
                  <p className="text-muted-foreground">
                    Practice ASL signs with interactive flashcards and feedback
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto mt-2"
                    onClick={() => setIsLearnModeOpen(true)}
                  >
                    Try Practice Mode <ArrowDown className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <LearnModeModal 
        open={isLearnModeOpen} 
        onOpenChange={setIsLearnModeOpen} 
      />
      
      <CameraWindow 
        isOpen={isCameraWindowOpen} 
        onClose={() => setIsCameraWindowOpen(false)} 
      />
    </div>
  );
}
