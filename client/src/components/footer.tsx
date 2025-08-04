import { Hand, Github, Twitter } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Hand className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold">Sign2Speak</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Bridging communication gaps with privacy-first ASL recognition technology. 
              Empowering accessible communication for everyone.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub repository"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/documentation" className="text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/asl-guide" className="text-muted-foreground hover:text-primary transition-colors">
                  ASL Guide
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-muted-foreground hover:text-primary transition-colors">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Sign2Speak. Made with love for accessibility.{" "}
            <span className="text-sm">
              Built with MediaPipe, TensorFlow.js, and Web Speech API.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
