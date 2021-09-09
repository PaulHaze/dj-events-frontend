import { FaRegCopyright } from 'react-icons/fa';

export function Footer() {
  return (
    <div
      className="bg-gradient-to-tl from-black to-coolgray-800  text-white text-center 
    fixed
    inset-x-0
    bottom-0
    p-4"
    >
      <div className="flex justify-center">
        <div className="mr-2 mt-[3px]">
          <FaRegCopyright />
        </div>
        <p>Artemist Studios</p>
      </div>
    </div>
  );
}
