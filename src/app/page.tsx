export default function Home() {
  return (
    <>
      <img src="/images/concert.jpeg"
             alt="hero"
           className="hero w-full"
      />

      <div className="flex justify-self-center my-6">
        <button className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded">Now Booking</button>
      </div>

      <section>
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <img
              src="/images/live-music-2219036_1280.jpg"
              className="h-96"
              alt="Burger" />
          </div>
          <div className="carousel-item">
            <img
              src="/images/IMG_2190.jpeg"
              className="h-96"
              alt="Burger" />
          </div>
          <div className="carousel-item">
            <img
              src="/images/concert-3387324_1280.jpg"
              className="h-96"
              alt="Burger" />
          </div>
          <div className="carousel-item">
            <img
              src="/images/bus-2619019_1280.jpg"
              className="h-96"
              alt="Burger" />
          </div>
        </div>
      </section>

      <section className="h-36 text-slide mx-2">
        <p className="leading-6 text-center my-4">A globally recognized entertainment company that connects real music lovers with authentic and talented artists, creating unforgettable experiences and fostering long-term success for our clients.</p>
      </section>
    </>
  );
}
