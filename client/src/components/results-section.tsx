import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Activity, Info } from "lucide-react";
import type { DetectedSign } from "@/types";

interface ResultsSectionProps {
  currentSign: string;
  confidence: number;
  recentSigns: DetectedSign[];
  feedbackMessage: string;
  isActive: boolean;
}

export function ResultsSection({
  currentSign,
  confidence,
  recentSigns = [],
  feedbackMessage,
  isActive
}: ResultsSectionProps) {
  return (
    <div className="space-y-6">
      <Card className="card-hover bg-primary/5">
        <CardHeader>
          <CardTitle className="text-xl">Detection Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Current Detection */}
          <div className="text-center">
            <Card>
              <CardContent className="p-8">
                <p className="text-sm text-muted-foreground mb-2">Detected Sign</p>
                <p className="text-4xl font-bold text-primary mb-4">
                  {currentSign || "—"}
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                  <span>Confidence: {confidence}%</span>
                  {isActive && (
                    <>
                      <div className="w-2 h-2 bg-green-500 rounded-full pulse-animation" />
                      <span>Active</span>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feedback Message */}
          {feedbackMessage && (
            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-center">
                <Info className="h-5 w-5 text-blue-500 mr-3" />
                <p className="text-blue-800 dark:text-blue-200 font-medium">
                  {feedbackMessage}
                </p>
              </div>
            </div>
          )}

          {/* Recent Detections */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold mb-3 flex items-center">
                <Activity className="h-4 w-4 mr-2" />
                Recent Signs
              </h4>
              <div className="space-y-2">
                {recentSigns.length > 0 ? (
                  recentSigns.slice(0, 5).map((sign, index) => (
                    <div
                      key={`${sign.text}-${sign.timestamp}`}
                      className="flex items-center justify-between py-2 px-3 bg-muted rounded-lg"
                    >
                      <span className="font-medium">{sign.text}</span>
                      <Badge variant="outline">
                        {Math.round(sign.confidence)}%
                      </Badge>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-sm py-4 text-center">
                    No signs detected yet
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
      <div className="mt-12">
        <Separator />
      </div>
    </div>
  );
}
