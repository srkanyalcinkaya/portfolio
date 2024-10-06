import {notFound} from 'next/navigation';
 
export default async function HomePage({params}:any ) {
  try {
    const Content = (await import(`./${params.lng}.mdx`)).default;
    return <Content />;
  } catch (error) {
    notFound();
  }
}