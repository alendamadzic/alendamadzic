import Image from 'next/image';

export default function NotFound() {
  return <Image src="/404.gif" alt="404" height={500} width={500} />;
}
