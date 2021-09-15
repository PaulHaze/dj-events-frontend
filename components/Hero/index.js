export function Hero({ imgUrl, title, subTitle, position = 'center' }) {
  return (
    <div
      className="z-10 -mx-4 lg:mx-0 lg:mt-2"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundPosition: `${position}`,
        backgroundSize: `cover`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-[100%] h-[300px] bg-gradient-to-b from-black/90 to-black/50 flex flex-col justify-center items-center">
        <div className="px-5 text-center">
          <h1 className="text-white text-[40px]">{title}</h1>
          <p className="text-white mt-2">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}
