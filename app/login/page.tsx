import LoginForm from '../ui/login-form';
import { Footer } from '../page/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login Page',
};

export default function LoginPage() {
  return (
    <>
      <main className="flex w-full items-center justify-center px-4 text-center sm:px-8 md:px-20">
        <div className="w-1/2">
          <Link href="/">
            <Image
              src="/logo.png"
              width={200}
              height={7}
              className="absolute left-5 top-5"
              alt="logo image"
            />
          </Link>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
