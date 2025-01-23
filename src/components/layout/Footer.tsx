// src/components/layout/Footer.tsx
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-8  bg-[#F7F1EE]">
      <div className="container mx-auto px-6 lg:px-8">
        {/* <div className="grid grid-cols-4 gap-4"> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          <div className="col-span-1 md:col-span-2 p-4">
            <a href="/" className="block mb-4">
              <Image
                className="dark:invert"
                src={process.env.NEXT_PUBLIC_LOGO_URL || '/images//svg/logo.svg'}
                alt={process.env.NEXT_PUBLIC_APP_NAME || 'Default App Name'}
                width={197}
                height={81}
                priority
              />
            </a>
            <p className="text-base text-dark-300 leading-relaxed max-w-lg">
              AI Writing Tool is a website that provides users with a powerful and efficient tool for automatically creating unique content.
              We help users write smarter, faster, and more creatively, by leveraging AI technology.
            </p>
          </div>


          <div className="col-span-1 md:col-span-2 grid grid-cols-3 gap-4">
            <div className="p-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-sm hover:text-gray-400">About Us</a></li>
                  <li><a href="/contact" className="text-sm hover:text-gray-400">Contact</a></li>
                  <li><a href="/faq" className="text-sm hover:text-gray-400">FAQ</a></li>
                  <li><a href="/terms" className="text-sm hover:text-gray-400">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="/blog" className="text-sm hover:text-gray-400">Blog</a></li>
                  <li><a href="/guides" className="text-sm hover:text-gray-400">Guides</a></li>
                  <li><a href="/support" className="text-sm hover:text-gray-400">Support</a></li>
                  <li><a href="/pricing" className="text-sm hover:text-gray-400">Pricing</a></li>
                </ul>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Follow Us</h3>
                <ul className="space-y-2">
                  <li><a href="https://twitter.com" className="text-sm hover:text-gray-400">Twitter</a></li>
                  <li><a href="https://facebook.com" className="text-sm hover:text-gray-400">Facebook</a></li>
                  <li><a href="https://linkedin.com" className="text-sm hover:text-gray-400">LinkedIn</a></li>
                  <li><a href="https://instagram.com" className="text-sm hover:text-gray-400">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="text-center">
        <span className="block text-sm text-gray-500 dark:text-gray-400">
          Copyright &copy;{" "}
          <a href="https://flowbite.com/" className="hover:underline capitalize">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
