// import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function Header() {
  // const { t } = useTranslation();

  return (
    <div className="backdrop-grayscale-0 h-[72px] w-full bg-black flex-row flex items-center pl-[40px]">
      <div>
        <Image src="/image/logo.png" alt="Logo" width={36} height={37.8} priority />
      </div>
    </div>
  );
}
