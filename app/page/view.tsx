import Image from 'next/image';
import Link from 'next/link';
import Button from '../assets/button';

export function View() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      <div className="hero-map" />
      <div className="login-link right-10 top-5">
        <Link
          href="/login"
          className="flex items-center gap-3 self-start rounded-5xl bg-black px-7 py-4 text-sm font-medium text-white transition-colors md:text-base"
        >
          <Image
            src="/user.svg"
            width={20}
            height={20}
            className="mx-1"
            alt="logo-user"
          />
          <span>Log in</span>
        </Link>
      </div>
      <div className="menu-icon absolute right-10 top-14">
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block lg:hidden"
        />
      </div>
      <div className="relative z-20 mt-8 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/Repair_Hand_Logo_01.png"
          alt="logo1"
          width={70}
          height={70}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 w-96">RJP Workshop</h1>
        

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
           
          </div>
          
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            title="Stock"
            variant="btn_dark_green_outline"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Babasari</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="regular-10 block text-gray-20">from the Airport</p>
              <p className="bold-20 text-white">55,8 KM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
