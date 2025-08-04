import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LearnModeModal } from "@/components/learn-mode-modal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SUPPORTED_SIGNS } from "@/types";
import { GraduationCap, TrendingUp, Play } from "lucide-react";
import { SignModal } from "@/components/sign-modal";
import { LEARN_MODE_SIGNS } from "@/lib/constants";

export default function Signs() {
  const [isLearnModeOpen, setIsLearnModeOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  // Type for sign details used in modal
  type ModalSign = {
    title: string;
    illustration?: React.ReactNode;
    description: string;
    instructions: string;
    category: string;
  } | null;

  const [modalSign, setModalSign] = useState<ModalSign>(null);

  // Helper: get details for a letter or word
  const getSignDetails = (sign: string): ModalSign => {
    // Try to find in LEARN_MODE_SIGNS for more info, fallback to minimal
    const found = LEARN_MODE_SIGNS.find(
      (s) => s.word.toLowerCase() === sign.toLowerCase() || s.word === sign
    );
    if (found) return { ...found, title: found.word };

    // For letters, provide a generic description
    if (sign.length === 1) {
      return {
        title: sign,
        illustration: <span style={{fontSize: 48}}>{sign}</span>,
        description: `The ASL sign for the letter "${sign}"`,
        instructions: "Make the handshape for this letter. (Visual coming soon)",
        category: 'letter',
      };
    }
    // For words, fallback
    return {
      title: sign,
      description: `Sign for word: ${sign}`,
      instructions: "(Instructions coming soon)",
      category: 'word',
    };
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 fade-in">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">Supported Signs</h1>
              <p className="text-lg text-muted-foreground">
                Learn and practice the ASL signs that SignSpeak can recognize
              </p>
            </div>
            
            {/* Alphabet Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">ASL Alphabet (A-Z)</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
                {SUPPORTED_SIGNS.letters.map((letter) => (
                  <Card key={letter} className="card-hover cursor-pointer" onClick={() => {
                    setModalSign({
                      title: letter,
                      illustration: <span style={{fontSize: 48}}>{letter}</span>,
                      description: `The ASL sign for the letter "${letter}"`,
                      instructions: "Make the handshape for this letter. (Visual coming soon)",
                      category: 'letter',
                    } as ModalSign);
                    setModalOpen(true);
                  }}> 
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">{letter}</span>
                      </div>
                      <p className="font-medium">{letter}</p>
                    </CardContent>
                  </Card>
                ))} 
              </div>
            </div>
            
            {/* Common Words Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Common Words & Phrases</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {SUPPORTED_SIGNS.words.map((word) => (
                  <Card key={word.text} className="card-hover cursor-pointer" onClick={() => {
                    // Try to get details from LEARN_MODE_SIGNS
                    const found = LEARN_MODE_SIGNS.find(s => s.word.toLowerCase() === word.text.toLowerCase());
                    setModalSign({
                      title: word.text,
                      description: found?.description || (word.category === 'common' ? 'Commonly used sign' : 'Essential communication'),
                      instructions: found?.instructions || '(Instructions coming soon)',
                      category: word.category,
                      illustration: null,
                    } as ModalSign);
                    setModalOpen(true);
                  }}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">{word.text}</h3>
                        <Badge 
                          variant={word.category === 'common' ? 'default' : 'secondary'}
                        >
                          {word.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        {word.category === 'common' ? 'Commonly used sign' : 'Essential communication'}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        <span>{word.accuracy}% accuracy</span>
                      </div>
                    </CardContent>
                  </Card>
                ))} 
              </div>
            </div>
            
            {/* Learn Mode Section */}
            <Card className="bg-gradient-to-br from-primary/5 to-blue-50 dark:from-primary/5 dark:to-background">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Practice Mode</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Enter learn mode to practice ASL signs with interactive flashcards and real-time feedback
                  </p>
                  <Button
                    onClick={() => setIsLearnModeOpen(true)}
                    size="lg"
                    className="btn-hover inline-flex items-center space-x-2"
                  >
                    <Play className="h-5 w-5" />
                    <span>Start Practice</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />

      <SignModal open={modalOpen} onOpenChange={setModalOpen} sign={modalSign} />
      <LearnModeModal 
        open={isLearnModeOpen} 
        onOpenChange={setIsLearnModeOpen} 
      />
    </div>
  );
}
