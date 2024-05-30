import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Profil (){
    return (
        <section className="fy-5" id="company-profile">
            <div className="container text-center">
                <h2 className="dsiplay-4">Profile Sekolah</h2>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <img src="https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg" alt="company Logo" className="mb-3 img-fluid rounded-circel"/>
                    </div>
                    <div className="col-md-6">
                        <p style={{ textAlign: 'justify'}}>
                        Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas maupun operasional didanai dari hasil pengelolaan wakaf dan sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.
                        </p>
                        <p style={{ textAlign: 'justify'}}>
                        SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh selama 4 tahun dengan siswa-siswa yang berasal dari berbagai daerah di seluruh Indonesia. SMK TI Bazma menyelenggarakan pendidikan dengan jurusan SIJA (Sistem Informatika, Jaringan & Aplikasi) dengan kombinasi kurikulum berbasis asrama.
                        </p>
                        <p style={{ textAlign: 'left'}}>
                            <strong>Contact</strong> info@smktibazma.sch.id | +628 1111 4433 9
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profil;
