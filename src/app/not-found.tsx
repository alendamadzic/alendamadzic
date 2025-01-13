import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen p-96">
      <Image src="/404.gif" alt="404" fill />
    </div>
  );
}
