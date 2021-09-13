import styles from './Hero.module.css';

export function Hero() {
  return (
    <div
      className="z-10"
      style={{
        backgroundImage: `url('/images/showcase.jpg')`,
        backgroundPosition: 'bottom',
        backgroundSize: `cover`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <div className="w-[100%] h-[300px] bg-black/70 flex flex-col justify-center items-center">
        <h1 className="text-white text-[40px]">BOOKERLY</h1>
        <p className="text-white mt-2">
          Find, book and manage your next party all in one place.
        </p>
      </div>
    </div>
  );
}
