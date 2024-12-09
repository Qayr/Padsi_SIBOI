import Image from 'next/image';
import Link from 'next/link';
import Button from '../assets/button';

export function View() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* Map Section */}
      <div className="hero-map mt-16">
  <Image
    src="/mapsBowlinc.png" // Pastikan file ini ada di folder public
    alt="Bowl Inc Location"
    className="rounded-lg shadow-md object-cover"
    width={733}
    height={1134}
  />
</div>



      

    

      {/* Main Content */}
      <div className="relative z-20 mt-8 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/favicon.ico"
          alt="Bowl Inc Logo"
          width={200}
          height={200}
          className="absolute left-[-5px] top-[-30px] w-20 lg:w-[50px]"
        />
        <h1 className="bold-52 text-xl lg:bold-88 w-96">Bowl Inc</h1>

        <p className="regular-16 mt-5 font-bold text-gray-600">
  Selamat datang di **Bowl Inc**, tempat di mana cita rasa autentik dan pelayanan penuh kehangatan berpadu menjadi pengalaman kuliner tak terlupakan. Kami percaya bahwa makanan adalah bentuk seni, dan setiap hidangan yang kami sajikan dibuat dengan bahan-bahan terbaik, dipersiapkan dengan penuh cinta, dan disajikan dengan senyuman.  

  Temukan kelezatan dalam setiap mangkuknya yang menggoda selera. Tidak hanya itu, interior kami yang nyaman dan modern didesain khusus untuk menciptakan suasana santai, baik untuk makan bersama keluarga, teman, atau bahkan sekadar menikmati waktu untuk diri sendiri.  

  Tidak punya waktu untuk makan di tempat? Kami juga menawarkan layanan takeaway dan pengiriman, sehingga Anda bisa menikmati hidangan favorit Bowl Inc kapan saja dan di mana saja.  

  Jangan lupa untuk memanfaatkan berbagai promo menarik yang kami hadirkan setiap minggunya! Kami selalu berusaha memberikan lebih dari sekadar makanan—kami memberikan pengalaman yang penuh kehangatan dan kebahagiaan.  

  Ayo kunjungi Bowl Inc hari ini dan rasakan sendiri keajaiban di setiap suapan. Kami tunggu kehadiran Anda!
</p>


        {/* Call-to-Action Buttons */}
        
      </div>

      {/* Location Info */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              
            </div>
            <p className="bold-20 text-gray-500">Jl. RM Sudiono No.40a, Ketapang</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="regular-10 block text-gray-20">from City Airport</p>
              <p className="bold-20 text-gray-500">5.5 KM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default View;
