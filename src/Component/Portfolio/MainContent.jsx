import React from "react";
import Gallery from "./Gallery";
import Hero from "./Hero";
import img1 from "./assets/5.jpg";
import img2 from "./assets/4.jpg";
import img3 from "./assets/5.jpg";
import img4 from "./assets/2.jpg";
import img5 from "./assets/2.jpg";
import Contact from "./Contact";

const MainContent = () => {
  return (
    <div id="home">
      <Hero />
      <div className="container">
        {/* About Me */}
        <div className="row text-center my-4">
          <div className="col">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row justify-content-between fs-6">
          <div className="col-md-6">
            <p>
              Halo Perkenalkan, nama saya Zakariya Febriansah. saat ini saya sedang aktif mengikuti kelas MERN, di EDUWORK. kegiatan harian
              saya membantu orang tua, dan antar jemput adik. di akhir pekan saya biasanya membantu paman saya jualan. mohon bantuannya kak
              prima supaya saya bisa menjadi programmer professional. terimakasih. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos beatae doloribus iure. Odio, possimus laudantium non, facilis dolores natus autem velit nihil, in enim esse sunt
              magni. Reiciendis adipisci maiores mollitia distinctio impedit laborum debitis, animi alias in, facilis iusto dolores et enim.
            </p>
          </div>
          <div className="col-md-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quae cupiditate, dolorum incidunt veritatis ab quam quia sit
            mollitia, aperiam praesentium, enim eum laboriosam neque consequatur autem tempore facere deserunt eius? Non mollitia alias,
            eveniet harum unde nihil sequi consequuntur? mollitia, aperiam praesentium, enim eum laboriosam neque consequatur autem tempore
            facere deserunt eius? Non mollitia alias, eveniet harum unde nihil sequi consequuntur? mollitia, aperiam praesentium, enim eum
            laboriosam neque consequatur autem tempore facere deserunt eius? Non mollitia alias,
          </div>
        </div>
      </div>

      {/* End About Me */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          id="gallery"
          fill="#d0f0cd"
          fill-opacity="1"
          d="M0,160L40,160C80,160,160,160,240,170.7C320,181,400,203,480,197.3C560,192,640,160,720,149.3C800,139,880,149,960,138.7C1040,128,1120,96,1200,117.3C1280,139,1360,213,1400,250.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      {/* Gallery */}
      <section style={{ backgroundColor: "#d0f0cd" }}>
        <div className="row text-center mb-3">
          <div className="col">
            <h2>Gallery</h2>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-2">
              <Gallery image={img1} title="Komputer Jaringan" />
            </div>
            <div className="col-md-4 mb-2">
              <Gallery image={img2} title="Komputer Jaringan" />
            </div>
            <div className="col-md-4 mb-2">
              <Gallery image={img3} title="Komputer Jaringan" />
            </div>
            <div className="col-md-4 mb-2">
              <Gallery image={img4} title="Komputer Jaringan" />
            </div>
            <div className="col-md-4 mb-2">
              <Gallery image={img5} title="Komputer Jaringan" />
            </div>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          id="contact"
          fill="#d0f0cd"
          fill-opacity="1"
          d="M0,128L34.3,112C68.6,96,137,64,206,90.7C274.3,117,343,203,411,218.7C480,235,549,181,617,176C685.7,171,754,213,823,234.7C891.4,256,960,256,1029,224C1097.1,192,1166,128,1234,101.3C1302.9,75,1371,85,1406,90.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      {/* End Gallery */}

      {/* Contact */}

      <div class="container">
        <div className="row text-center mb-3">
          <div className="col">
            <h2>Contact</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <Contact />
          </div>
        </div>
      </div>
      {/* End Contact */}
      <div className="text-white text-center p-md-2" style={{ backgroundColor: "#4ca845" }}>
        <p className="pt-2">
          Made with Love <span className="feb">Zakariya Febriansah</span>
        </p>
      </div>
    </div>
  );
};

export default MainContent;
