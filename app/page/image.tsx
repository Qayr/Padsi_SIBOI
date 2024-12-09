import Image from 'next/image';

interface ImageCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ImageCard = ({ imageSrc, title, description }: ImageCardProps) => {
  return (
    <div className="relative flex flex-col items-center rounded-lg shadow-lg overflow-hidden bg-white">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={300}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4">
        <h3 className="bold-18 text-gray-900">{title}</h3>
        <p className="regular-14 text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export function Images() {
  const menuItems = [
    {
      imageSrc: '/menu-ramen.jpg',
      title: 'Ramen Spesial',
      description:
        'Ramen autentik dengan kuah gurih dan topping lengkap. Cocok untuk penggemar cita rasa Jepang.',
    },
    {
      imageSrc: '/menu-donburi.jpg',
      title: 'Donburi Terbaik',
      description:
        'Semangkuk kebahagiaan dengan nasi hangat dan topping pilihan seperti chicken katsu atau beef teriyaki.',
    },
    {
      imageSrc: '/menu-sushi.jpg',
      title: 'Sushi Rolls',
      description:
        'Sushi gulung segar dengan pilihan isi tuna, salmon, atau avocado. Lezat dan sehat!',
    },
    {
      imageSrc: '/interior.jpg',
      title: 'Interior Nyaman',
      description:
        'Rasakan suasana modern dan cozy yang cocok untuk keluarga dan teman.',
    },
    {
      imageSrc: '/promo.jpg',
      title: 'Promo Mingguan',
      description:
        'Jangan lewatkan diskon menarik setiap minggu! Datang dan nikmati penawaran terbaik kami.',
    },
  ];

  return (
    <section className="max-container mx-auto px-4 py-10 lg:py-20">
      <h2 className="bold-32 text-center mb-8">Galeri Bowl Inc</h2>
      <p className="regular-16 text-center text-gray-600 mb-16">
        Nikmati pengalaman kuliner bersama kami. Lihat menu, interior, dan promo menarik kami.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item, index) => (
          <ImageCard
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
