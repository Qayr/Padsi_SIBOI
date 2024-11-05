import { PEOPLE_URL } from '@/app/assets/index';
import Image from 'next/image';

interface GearProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const Gear = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: GearProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-gray-600 p-4">
            <Image
              src="/streamline--cog-solid.svg"
              alt="map"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="flexCenter bold-20  bg w-full rounded-2xl bg-gray-600 text-white">
              {title}
            </h4>
            <p className="flexCenter regular-14 w-full rounded-3xl bg-gray-600 text-white ">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flexCenter gap-3">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 rounded-3xl bg-gray-600 text-white">
            {peopleJoined}
          </p>
        </div>
      </div>
    </div>
  );
};

export function Images() {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <Gear
          backgroundImage="bg-bg-img-2"
          title="Service"
          subtitle="Rantai, Kampas Rem, Kampas kopling, dll"
          peopleJoined="50k+ Review"
        />
        <Gear
          backgroundImage="bg-bg-img-1"
          title="Available Gear"
          subtitle="Servirvice para montir"
          peopleJoined="50K+ Review"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="relative w-full overflow-hidden rounded-3xl bg-gray-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-black">
            <strong>Bingung</strong> dan ga tau harus kemana?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Disaat kendaraan anda mogok tidak mau jalan bareng, ban tidak
            berputar seperti waktu itu bersamanya, atau bahkan rantai putus
            karena sudah tidak kuat menerima kenyataan? Tenang Kami para montir
            RJP akan siap selalu memperbaiki masalah motor anda
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
}
