import {
  ArrowDownLeft01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "src/components/ui/button";

// ------------------------------------------------------------

export function LandingView() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <header className="h-18 sticky top-0 z-10 flex items-center bg-background">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-2.5">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-9"
            >
              <path
                d="M20 28.4356C16.5306 28.4357 13.3035 30.2166 11.4521 33.1512L9.1543 36.7934L10.0371 37.3511C10.3132 37.5101 10.5937 37.6622 10.8779 37.8082L13.1436 34.2188C14.6285 31.8648 17.2171 30.437 20 30.4369C22.783 30.4369 25.3714 31.8647 26.8564 34.2188L29.1211 37.8082C29.4053 37.6623 29.6858 37.5101 29.9619 37.3511L30.8457 36.7934L28.5479 33.1512C26.6964 30.2165 23.4695 28.4356 20 28.4356ZM20.123 36.4428L20 36.4379C19.3855 36.4381 18.8239 36.774 18.5312 37.3072L18.4766 37.4166L17.3691 39.834C18.0662 39.9256 18.7744 39.9821 19.4922 40L20 38.8914L20.5068 40C21.2249 39.9821 21.9335 39.9256 22.6309 39.834L21.5244 37.4166L21.4697 37.3072C21.1966 36.8096 20.689 36.4842 20.123 36.4428ZM21 12.4063V0H19V12.4063L15.7891 0.422921L13.8574 0.940585L17.0674 12.923L10.8662 2.18005L9.13379 3.18021L15.335 13.9222L6.56543 5.15124L5.15039 6.56651L13.9199 15.3375L3.17969 9.13529L2.17969 10.868L12.9209 17.0702L0.94043 13.8597L0.422852 15.7917L12.4053 19.0031H0V21.0035H12.4053L0.422852 24.2149L0.94043 26.1469L12.9209 22.9354L2.17969 29.1386L3.17969 30.8713L13.9199 24.6681L5.15039 33.4401L6.56543 34.8554L13.1216 28.2964C13.684 27.7337 14 26.9706 14 26.175V20.435C14 17.1209 16.6865 14.4342 20 14.434C23.3137 14.434 26 17.1208 26 20.435V26.1759C26 26.9716 26.316 27.7347 26.8785 28.2974L33.4346 34.8554L34.8496 33.4401L26.0801 24.6691L36.8203 30.8713L37.8203 29.1386L27.0791 22.9354L39.0596 26.1469L39.5771 24.2149L27.5957 21.0035H40V19.0031H27.5947L39.5771 15.7917L39.0596 13.8597L27.0791 17.0692L37.8203 10.868L36.8203 9.13529L26.0781 15.3375L34.8496 6.56554L33.4355 5.15124L24.6641 13.9232L30.8662 3.18021L29.1338 2.18005L22.9316 12.923L26.1426 0.940585L24.2109 0.422921L21 12.4063ZM20 32.4372C18.0122 32.4374 16.1792 33.5112 15.207 35.2453L13.2021 38.8201C13.8407 39.051 14.4942 39.2501 15.1611 39.4159L16.9512 36.224C17.5694 35.1209 18.7357 34.4377 20 34.4376C21.2645 34.4376 22.4305 35.1208 23.0488 36.224L24.8379 39.4159C25.5048 39.2502 26.1583 39.0509 26.7969 38.8201L24.793 35.2453C23.8208 33.5111 21.9879 32.4372 20 32.4372Z"
                fill="#F97316"
              ></path>
            </svg>
            <span className="text-xl font-semibold">Kontener</span>
          </div>
          <div className="flex items-center gap-1">
            <Link href="/">
              <Button size="lg" variant="ghost" className="rounded-full px-4">
                Home
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="ghost" className="rounded-full px-4">
                Services
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="ghost" className="rounded-full px-4">
                About Us
              </Button>
            </Link>
          </div>
          <div>
            <Button size="lg" variant="outline" className="rounded-full px-4">
              Contact Us
            </Button>
          </div>
        </div>
      </header>
      <main className="flex flex-col">
        <section className="container mx-auto flex flex-col px-5 pt-15 pb-10">
          {/* <h1 className="text-[5.9rem] font-medium leading-none text-center mb-8">
            Move Cargo. Without Limits.
          </h1>
          <div className="flex justify-between">
            <p className="text-lg leading-relaxed"> */}
          {/* From port to door, we move your cargo with precision,
              <br />
              speed, and care&mdash;anywhere in the world. */}
          {/* The fastest way to get your goods from point A to B.
              <br />
              Reliable global shipping tailored to your business needs.
            </p>
            <Button
              variant="outline"
              className="h-11 text-base rounded-full pl-6 pr-16 relative group"
            >
              Get Started
              <div className="absolute right-0 flex items-center justify-center bg-orange-500 text-white group-hover:bg-orange-500/90 rounded-full size-12">
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  className="size-6"
                  strokeWidth={2}
                />
              </div>
            </Button>
          </div> */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-7xl font-medium leading-tight">
                Move Cargo.
                <br />
                Without Limits.
              </h1>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                The fastest way to get your goods from point A to B.
                <br />
                Reliable global shipping tailored to your business needs.
              </p>
              <Button
                variant="outline"
                className="h-11 text-base rounded-full px-6"
              >
                Get Started
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  className="size-5"
                  // strokeWidth={2}
                />
              </Button>
            </div>
          </div>
        </section>
        <section>
          <div className="px-5">
            <div className="w-full h-120 relative rounded-3xl overflow-hidden">
              <Image
                src="/assets/images/2.png"
                alt="Hero Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
        <section className="container mx-auto px-5 py-20">
          <div className="flex">
            <div className="w-[20%]">
              <h3 className="text-2xl text-muted-foreground font-medium leading-relaxed">
                About Us
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-3xl leading-relaxed">
                From real-time tracking to a seamless global network, we help
                businesses ship smarter. We don't just move cargo; we deliver
                certainty at every step.
              </p>
              <div className="flex justify-between mt-10">
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-5xl text-orange-500">32+</h3>
                  <p className="font-medium">Years Experience</p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-5xl text-orange-500">100+</h3>
                  <p className="font-medium">Countries Served</p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-5xl text-orange-500">99%</h3>
                  <p className="font-medium">On-time Delivery</p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-5xl text-orange-500">1.5 M+</h3>
                  <p className="font-medium">Shipments Handled</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-foreground rounded-tl-2xl rounded-tr-2xl px-5 pb-5">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-background text-center py-20">
          <h1 className="text-6xl leading-tight mb-5">
            Ready to Move Smarter?
            <br />
            Let's Ship With Confidence.
          </h1>
          <p className="text-xl leading-relaxed mb-8">
            The fastest way to get your goods from point A to B. Reliable global
            shipping tailored to your business needs.
          </p>
          <Button
            variant="secondary"
            className="h-12 bg-orange-500 text-white text-base rounded-full px-6"
          >
            Get Started
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              className="size-5"
              strokeWidth={2}
            />
          </Button>
        </div>
        <div className="relative w-full h-150 rounded-3xl overflow-hidden">
          <Image
            src="/assets/images/footer_image.png"
            alt="Footer Background"
            fill
            className="object-cover"
          />
          <div className="relative z-5 pt-10 pl-10 pr-18">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-9"
                >
                  <path
                    d="M20 28.4356C16.5306 28.4357 13.3035 30.2166 11.4521 33.1512L9.1543 36.7934L10.0371 37.3511C10.3132 37.5101 10.5937 37.6622 10.8779 37.8082L13.1436 34.2188C14.6285 31.8648 17.2171 30.437 20 30.4369C22.783 30.4369 25.3714 31.8647 26.8564 34.2188L29.1211 37.8082C29.4053 37.6623 29.6858 37.5101 29.9619 37.3511L30.8457 36.7934L28.5479 33.1512C26.6964 30.2165 23.4695 28.4356 20 28.4356ZM20.123 36.4428L20 36.4379C19.3855 36.4381 18.8239 36.774 18.5312 37.3072L18.4766 37.4166L17.3691 39.834C18.0662 39.9256 18.7744 39.9821 19.4922 40L20 38.8914L20.5068 40C21.2249 39.9821 21.9335 39.9256 22.6309 39.834L21.5244 37.4166L21.4697 37.3072C21.1966 36.8096 20.689 36.4842 20.123 36.4428ZM21 12.4063V0H19V12.4063L15.7891 0.422921L13.8574 0.940585L17.0674 12.923L10.8662 2.18005L9.13379 3.18021L15.335 13.9222L6.56543 5.15124L5.15039 6.56651L13.9199 15.3375L3.17969 9.13529L2.17969 10.868L12.9209 17.0702L0.94043 13.8597L0.422852 15.7917L12.4053 19.0031H0V21.0035H12.4053L0.422852 24.2149L0.94043 26.1469L12.9209 22.9354L2.17969 29.1386L3.17969 30.8713L13.9199 24.6681L5.15039 33.4401L6.56543 34.8554L13.1216 28.2964C13.684 27.7337 14 26.9706 14 26.175V20.435C14 17.1209 16.6865 14.4342 20 14.434C23.3137 14.434 26 17.1208 26 20.435V26.1759C26 26.9716 26.316 27.7347 26.8785 28.2974L33.4346 34.8554L34.8496 33.4401L26.0801 24.6691L36.8203 30.8713L37.8203 29.1386L27.0791 22.9354L39.0596 26.1469L39.5771 24.2149L27.5957 21.0035H40V19.0031H27.5947L39.5771 15.7917L39.0596 13.8597L27.0791 17.0692L37.8203 10.868L36.8203 9.13529L26.0781 15.3375L34.8496 6.56554L33.4355 5.15124L24.6641 13.9232L30.8662 3.18021L29.1338 2.18005L22.9316 12.923L26.1426 0.940585L24.2109 0.422921L21 12.4063ZM20 32.4372C18.0122 32.4374 16.1792 33.5112 15.207 35.2453L13.2021 38.8201C13.8407 39.051 14.4942 39.2501 15.1611 39.4159L16.9512 36.224C17.5694 35.1209 18.7357 34.4377 20 34.4376C21.2645 34.4376 22.4305 35.1208 23.0488 36.224L24.8379 39.4159C25.5048 39.2502 26.1583 39.0509 26.7969 38.8201L24.793 35.2453C23.8208 33.5111 21.9879 32.4372 20 32.4372Z"
                    fill="#F97316"
                  ></path>
                </svg>
                <span className="text-xl font-semibold">Kontener</span>
              </div>
              <div className="flex gap-18">
                <div className="flex flex-col">
                  <h5 className="font-medium mb-3">Links</h5>
                  <div className="flex flex-col gap-y-2 text-muted-foreground">
                    <Link href="#">About Us</Link>
                    <Link href="#">Services</Link>
                    <Link href="#">Contact</Link>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h5 className="font-medium mb-3">Contact</h5>
                  <div className="flex flex-col gap-y-2 text-muted-foreground">
                    <span>Jl. Sukacita</span>
                    <span>Jakarta, Indonesia</span>
                    <span>info@kontener.com</span>
                    <span>+62 812 3456 7890</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between bg-background rounded-xl py-5 px-9">
            <span>
              © {new Date().getFullYear()} Kontener. All rights reserved.
            </span>
            <div className="flex items-center gap-7">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
              <Link href="#">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
