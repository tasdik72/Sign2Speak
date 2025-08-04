import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LEARN_MODE_SIGNS } from "@/lib/constants";
import { Play, SkipForward, X } from "lucide-react";

interface LearnModeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LearnModeModal({ open, onOpenChange }: LearnModeModalProps) {
  const [currentSignIndex, setCurrentSignIndex] = useState(0);
  const currentSign = LEARN_MODE_SIGNS[currentSignIndex];

  const handleNext = () => {
    setCurrentSignIndex((prev) => 
      prev < LEARN_MODE_SIGNS.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrevious = () => {
    setCurrentSignIndex((prev) => 
      prev > 0 ? prev - 1 : LEARN_MODE_SIGNS.length - 1
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center justify-between">
            Practice Mode
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Current Sign Display */}
          <div className="text-center">
            <Card className="bg-primary/5">
              <CardContent className="p-8">
                <div className="mb-2">
                  <span className="text-sm text-muted-foreground">
                    {currentSignIndex + 1} of {LEARN_MODE_SIGNS.length}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">
                  {currentSign.word}
                </h3>
                <p className="text-muted-foreground">
                  {currentSign.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Instructions</h4>
              <p className="text-muted-foreground">
                {currentSign.instructions}
              </p>
            </CardContent>
          </Card>

          {/* Controls */}
          <div className="flex justify-center space-x-4">
            <Button onClick={handlePrevious} variant="outline">
              Previous
            </Button>
            
            <Button className="btn-hover">
              <Play className="h-4 w-4 mr-2" />
              Start Practice
            </Button>
            
            <Button onClick={handleNext} variant="outline">
              <SkipForward className="h-4 w-4 mr-2" />
              Next Sign
            </Button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center space-x-2">
            {LEARN_MODE_SIGNS.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSignIndex 
                    ? "bg-primary" 
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
