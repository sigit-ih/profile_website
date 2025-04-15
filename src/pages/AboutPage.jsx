import HorizontalTimeline from "../components/HorizontalTimeline";

export default function AboutPage() {
  return (
    <div className="AboutPage bg-indigo-100 flex h-full items-center text-center p-20">
      <div className="about-left w-1/2">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold underline underline-offset-8 text-orange-400">
          About Me
        </h2>
      </div>
      <div className="about-right w-1/2">
        <section id="about">
          <p className="text-gray-700">
            Halo, Saya Sigit Ispramono Hadi, lulusan S1 Informatika di
            Universitas Pembangunan Nasional Veteran Jakarta tahun 2022. Saya
            memiliki ketertarikan dalam bidang Data Analytic dan Web
            Development. Saya bisa bekerja secara tim dan menguasai kemampuan
            bahasa Inggris, bahasa pemrograman seperti HTML, CSS, PHP, Flutter
            serta SQL menggunakan DBMS MySQL, Oracle Database dan PostgreSQL.
          </p>
        </section>
        <section className="timeline relative pl-6 ml-4">
          <h1 className="text-2xl font-bold mb-6">
            Timeline
          </h1>
          <HorizontalTimeline />
        </section>

        {/* <section id="education" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <ul>
            <li className="mb-2">
              <p className="font-medium">S1 - Informatika</p>
              <p className="text-sm text-gray-600">
                Universitas Pembangunan Nasional Veteran Jakarta (2015 – 2022)
              </p>
            </li>
          </ul>
        </section>
        <section id="experience" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          <div className="mb-3">
            <p className="font-medium">
              Database Engineer – PT Mandiri Utama Finance
            </p>
            <p className="text-sm text-gray-600">Des 2023 – Des 2024</p>
            <ul className="list-disc pl-5 text-gray-700 text-sm mt-1">
              <p>
                Melakukan koreksi data nasabah, objek dan transaksi pada
                database menggunakan Oracle dan PostgreSQL
              </p>
            </ul>
          </div>
        </section> */}
      </div>
    </div>
  );
}
