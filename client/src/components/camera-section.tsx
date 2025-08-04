import { useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCamera } from "@/hooks/use-camera";
import { Play, Pause, Volume2, VolumeX, Video, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CameraSectionProps {
  isVoiceEnabled: boolean;
  onToggleVoice: () => void;
  onVideoReady?: (video: HTMLVideoElement) => void;
}

export function CameraSection({ 
  isVoiceEnabled, 
  onToggleVoice, 
  onVideoReady 
}: CameraSectionProps) {
  const { isActive, isLoading, error, videoRef, toggleCamera } = useCamera();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (isActive && videoRef.current && onVideoReady) {
      onVideoReady(videoRef.current);
    }
  }, [isActive, onVideoReady]);

  return (
    <div className="space-y-6">
      <Card className="card-hover">
        <CardContent className="p-6">
          <div className="relative">
            {/* Video Element */}
            <video
              ref={videoRef}
              className={cn(
                "w-full h-80 rounded-xl object-cover",
                !isActive && "hidden"
              )}
              playsInline
              muted
            />
            
            {/* Canvas for MediaPipe overlay */}
            <canvas
              ref={canvasRef}
              className={cn(
                "absolute top-0 left-0 w-full h-80 rounded-xl pointer-events-none",
                !isActive && "hidden"
              )}
              width={640}
              height={480}
            />

            {/* Placeholder when camera is off */}
            {!isActive && (
              <div className="camera-placeholder rounded-xl w-full h-80 flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center">
                  <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground font-medium">
                    {error ? "Camera access failed" : "Camera feed will appear here"}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">640 x 480 resolution</p>
                  {error && (
                    <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <div className="flex items-center text-destructive">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        <span className="text-sm">{error}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Camera Controls */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center">
            <Button
              onClick={toggleCamera}
              disabled={isLoading}
              className={cn(
                "btn-hover inline-flex items-center space-x-2",
                isActive
                  ? "bg-destructive hover:bg-destructive/90"
                  : "bg-primary hover:bg-primary/90"
              )}
            >
              {isActive ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
              <span>{isLoading ? "Loading..." : isActive ? "Pause Detection" : "Start Detection"}</span>
            </Button>

            <Button
              onClick={onToggleVoice}
              variant="secondary"
              className="btn-hover inline-flex items-center space-x-2"
            >
              {isVoiceEnabled ? (
                <Volume2 className="h-4 w-4" />
              ) : (
                <VolumeX className="h-4 w-4" />
              )}
              <span>{isVoiceEnabled ? "Voice On" : "Voice Off"}</span>
            </Button>
          </div>

          {/* Status Indicators */}
          <div className="flex flex-wrap gap-3 mt-4 justify-center">
            <Badge variant={isActive ? "default" : "destructive"}>
              <div className="w-2 h-2 rounded-full bg-current mr-2" />
              {isActive ? "Camera Active" : "Camera Inactive"}
            </Badge>
            <Badge variant={isVoiceEnabled ? "secondary" : "outline"}>
              {isVoiceEnabled ? (
                <Volume2 className="h-3 w-3 mr-2" />
              ) : (
                <VolumeX className="h-3 w-3 mr-2" />
              )}
              {isVoiceEnabled ? "Voice Enabled" : "Voice Disabled"}
            </Badge>
          </div>
        </CardContent>
      </Card>
      <div className="mt-12">
        <Separator />
      </div>
    </div>
  );
}
