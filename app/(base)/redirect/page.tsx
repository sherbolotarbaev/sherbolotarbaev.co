import RedirectClient from './page.uc';

interface GenerateMetadataProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  searchParams,
}: Readonly<GenerateMetadataProps>) {
  return {
    title: `Redirect to ${searchParams.to || '...'}`,
  };
}

export default async function Redirect() {
  return <RedirectClient />;
}
