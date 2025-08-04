import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { ReactNode } from "react";

interface SignModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sign: {
    title: string;
    illustration?: ReactNode;
    description: string;
    instructions: string;
    category: string;
  } | null;
}

export function SignModal({ open, onOpenChange, sign }: SignModalProps) {
  if (!sign) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            {sign.title}
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
              <X className="h-5 w-5" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        <Card className="bg-primary/5 mb-4">
          <CardContent className="p-6 flex flex-col items-center">
            {sign.illustration && (
              <div className="mb-4">{sign.illustration}</div>
            )}
            <p className="text-muted-foreground mb-2">{sign.description}</p>
            <h4 className="font-semibold mb-2">How to Sign</h4>
            <p>{sign.instructions}</p>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
