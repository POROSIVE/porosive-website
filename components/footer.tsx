import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div className="max-w-md">
            <Image
              className="h-[60] aspect-square object-contain"
              src="/prsvlogolightcut.png"
              alt="prsv logo"
              width={120}
              height={60}
              priority
            />
            <p className="text-sm leading-6 text-muted-foreground">
              In Between Spaces
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold">Project</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    CGCC
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    N.I.E
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Resources</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Socials</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="https://github.com/POROSIVE"
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@POROSIVE"
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="my-12 h-px bg-border" />
          <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} POROSIVE. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="transition hover:text-foreground"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="transition hover:text-foreground"
              >
                Terms
              </a>
              <a
                href="/cookies"
                className="transition hover:text-foreground"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
    </footer>
  );
}
