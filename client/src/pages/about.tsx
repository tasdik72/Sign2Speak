import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Mic, 
  Code, 
  Smartphone, 
  Shield,
  Heart
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 fade-in">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">About SignSpeak</h1>
              <p className="text-lg text-muted-foreground">
                Bridging communication gaps with privacy-first AI technology
              </p>
            </div>
            
            {/* Mission Section */}
            <div className="mb-16">
              <Card className="bg-primary/5">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        SignSpeak was created to break down communication barriers between deaf and hard-of-hearing 
                        individuals and the hearing community. We believe that technology should be inclusive, accessible, 
                        and respect user privacy. Our goal is to make ASL translation available to everyone, anywhere, 
                        without compromising personal data or requiring expensive hardware.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Technology Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Technology Stack</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">MediaPipe AI</h3>
                    <p className="text-muted-foreground">
                      Google's MediaPipe Hand Gesture Recognition provides accurate, real-time hand tracking 
                      and gesture classification directly in your browser.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Mic className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Web Speech API</h3>
                    <p className="text-muted-foreground">
                      Built-in browser text-to-speech capabilities provide natural voice output with support 
                      for multiple languages and accents.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">TensorFlow.js</h3>
                    <p className="text-muted-foreground">
                      Client-side machine learning enables privacy-preserving AI inference without sending 
                      data to external servers.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Progressive Web App</h3>
                    <p className="text-muted-foreground">
                      PWA technology enables offline functionality, fast loading, and native app-like 
                      experience on any device.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Privacy Section */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Your Data Stays Local</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        <strong className="text-foreground">No Data Collection:</strong> SignSpeak processes 
                        all video and audio data locally in your browser. We don't collect, store, or transmit 
                        any personal information.
                      </p>
                      <p>
                        <strong className="text-foreground">No Login Required:</strong> Use SignSpeak immediately 
                        without creating accounts or providing personal details.
                      </p>
                      <p>
                        <strong className="text-foreground">Camera Control:</strong> You have complete control 
                        over camera access. Start and stop detection at any time.
                      </p>
                      <p>
                        <strong className="text-foreground">Open Source:</strong> Our code is transparent and 
                        available for review, ensuring trust and accountability.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
