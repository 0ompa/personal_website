import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/0ompa",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/om-patil34/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:opatil34@gatech.edu",
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">
          {/* About Section */}
          <div className="flex justify-start">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Me</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Computer Science student at Georgia Tech passionate about building innovative solutions and learning new
                technologies. Excited for the future!
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center">Quick Links</h3>
              <ul className="space-y-2 text-center">
                {["Home", "About", "Projects", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      {link}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Connect Section */}
          <div className="flex justify-end">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-right">Connect</h3>
              <div className="flex gap-4 justify-end">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Portfolio. Built with React and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
