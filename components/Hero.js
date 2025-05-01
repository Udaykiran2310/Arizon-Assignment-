const Hero = () => {
  return (
    <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-4xl text-white">Welcome to Our Shop</h1>
      </div>
    </div>
  );
};

export default Hero;
