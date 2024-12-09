import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface PageProps {
  params: {
    id: string;
  };
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const { id } = context.params!;
  
  // Pastikan id adalah string (bisa melakukan pemeriksaan dan konversi)
  if (Array.isArray(id)) {
    return {
      notFound: true, // Atau bisa mengarahkan ke halaman error jika perlu
    };
  }

  return {
    props: {
      params: { id: id ?? '' }, // Pastikan id tidak undefined
    },
  };
};

const Page = ({ params }: PageProps) => {
  return <div>ID: {params.id}</div>;
};

export default Page;
