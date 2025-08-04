import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Camera, Hand, Volume2 } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 fade-in">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">How Sign2Speak Works</h1>
              <p className="text-lg text-muted-foreground">
                Three simple steps to start translating ASL into speech
              </p>
            </div>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Enable Your Camera</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Click the "Start Detection" button to activate your webcam. Sign2Speak will request 
                    camera permission to analyze your hand gestures in real-time.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      Secure camera access with user control
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      Works on desktop and mobile browsers
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      No data stored or transmitted
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <Card className="bg-muted/30">
                    <CardContent className="p-8">
                      <div className="camera-placeholder rounded-xl w-full h-48 flex items-center justify-center border-2 border-dashed border-border">
                        <div className="text-center">
                          <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                          <p className="text-muted-foreground">Camera Preview</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Show Sign to Camera</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Position your hand clearly within the camera frame and make ASL gestures. 
                    Our AI recognizes letters A-Z and common words like "Hello", "Thanks", and "Help".
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      Support for ASL alphabet and basic words
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      Real-time hand tracking with MediaPipe
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      Confidence scoring for accuracy
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <Card className="bg-gradient-to-br from-primary/5 to-blue-50 dark:from-primary/5 dark:to-background">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 bg-background rounded-full flex items-center justify-center shadow-lg">
                          <Hand className="h-16 w-16 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">ASL Gesture</h3>
                        <p className="text-muted-foreground">Example: "Hello" sign</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">AI Detects & Speaks Word</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our AI instantly recognizes your gesture and converts it to speech using the Web Speech API. 
                    You'll see the detected word on screen and hear it spoken aloud.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      Instant text-to-speech conversion
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      Multi-language voice support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      Voice toggle for quiet environments
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <Card className="bg-green-50 dark:bg-green-950/20">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <Card className="mb-4">
                          <CardContent className="p-6">
                            <p className="text-sm text-muted-foreground mb-2">Detected</p>
                            <p className="text-3xl font-bold text-primary">Hello</p>
                          </CardContent>
                        </Card>
                        <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400">
                          <Volume2 className="h-6 w-6" />
                          <span className="font-medium">Speaking: "Hello"</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
