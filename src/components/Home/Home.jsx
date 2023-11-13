import React, { useEffect, useState } from "react";
import "./Home.css";
import AnunciosHome from "./AnunciosHome/AnunciosHome";
import { Button } from "react-bootstrap";
import NoticiasHome from "./NoticiasHome/NoticiasHome";
import CursosHome from "./CursosHome/CursosHome"
function Home() {
  const [cardInfo, setCardInfo] = useState([]);
  const [cardNoticias, setCardNoticias]  = useState([])
  const [cardCursos, setCardCursos]  = useState([])


  const anuncio = [
    {
      _id: 1,
      imagen:
        "https://res.cloudinary.com/dco2buhwt/image/upload/v1699716742/Mir/Imagenes-card-anuncios-home/wqlrg3q7linhpeqlq4mh.jpg",
      titulo: "Vehiculo mal estacionado Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam nesciunt error similique exercitationem eum! Vitae exercitationem eaque voluptas, aliquid, doloribus ad labore consequuntur, consequatur quasi assumenda corporis impedit minus.",
    },
    {
      _id: 2,
      imagen:
        "https://res.cloudinary.com/dco2buhwt/image/upload/v1699716688/Mir/Imagenes-card-anuncios-home/fvxbaztoyupolwpcxti8.jpg",
      titulo: "Nuevas Fechas de Examen Final",
    },
    {
      _id: 3,
      imagen:
        "https://res.cloudinary.com/dco2buhwt/image/upload/v1699715368/Mir/Imagenes-card-anuncios-home/hd1mreikoiqwcnlc778n.jpg",
      titulo: "DNI Extraviado",
    },
    {
      _id: 4,
      imagen:
        "https://res.cloudinary.com/dco2buhwt/image/upload/v1699716475/Mir/Imagenes-card-anuncios-home/lpicdrcvboopuu7t8dca.jpg",
      titulo: "DNI Extraviado",
    },
    {
      _id: 5,
      imagen:
        "https://res.cloudinary.com/dco2buhwt/image/upload/v1699716741/Mir/Imagenes-card-anuncios-home/beuxzziu7zsgghyy1kly.jpg",
      titulo: "Vehiculo mal estacionado",
    },
    {
      _id: 6,
      imagen:
        "https://res.cloudinary.com/dco2buhwt/image/upload/v1699716688/Mir/Imagenes-card-anuncios-home/fvxbaztoyupolwpcxti8.jpg",
      titulo: "Nuevas Fechas de Examen Final",
    },
    {
      _id: 7,
      imagen:
        "https://res.cloudinary.com/dco2buhwt/image/upload/v1699716742/Mir/Imagenes-card-anuncios-home/wqlrg3q7linhpeqlq4mh.jpg",
      titulo: "Vehiculo mal estacionado",
    },
    {
      _id: 8,
      imagen:
        "https://res.cloudinary.com/dco2buhwt/image/upload/v1699715368/Mir/Imagenes-card-anuncios-home/hd1mreikoiqwcnlc778n.jpg",
      titulo: "DNI Extraviado",
    },
    {
      _id: 9,
      imagen:
        "https://res.cloudinary.com/dco2buhwt/image/upload/v1699716741/Mir/Imagenes-card-anuncios-home/beuxzziu7zsgghyy1kly.jpg",
      titulo: "Vehiculo mal estacionado",
    },{
      _id: 10,
      imagen:
        "https://res.cloudinary.com/dco2buhwt/image/upload/v1699716688/Mir/Imagenes-card-anuncios-home/fvxbaztoyupolwpcxti8.jpg",
      titulo: "Nuevas Fechas de Examen Final",
    }
  ];
  const noticias = [
    {
      _id: 1,
      imagen: "https://res.cloudinary.com/dco2buhwt/image/upload/v1699746552/Mir/Imagenes-card-noticias-home/wkm91dhqwvqsjisdsoyi.jpg",
      titulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam saepe, quae corrupti vero, exercitationem perspiciatis architecto temporibus minus, cupiditate officia cumque debitis distinctio itaque eum soluta illo fugiat pariatur?",
    },
    {
      _id: 2,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699746528/Mir/Imagenes-card-noticias-home/g81qkgnukkh5eghcr0jp.jpg",
        titulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam saepe, quae corrupti vero, exercitationem perspiciatis architecto temporibus minus, cupiditate officia cumque debitis distinctio itaque eum soluta illo fugiat pariatur?",
      },
    {
      _id: 3,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699746503/Mir/Imagenes-card-noticias-home/sttk2k8pdw80s3spslys.jpg",
        titulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam saepe, quae corrupti vero, exercitationem perspiciatis architecto temporibus minus, cupiditate officia cumque debitis distinctio itaque eum soluta illo fugiat pariatur?",
      },
    {
      _id: 4,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699746479/Mir/Imagenes-card-noticias-home/vbeuljqgnz5z8nlt8rty.jpg",
        titulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam saepe, quae corrupti vero, exercitationem perspiciatis architecto temporibus minus, cupiditate officia cumque debitis distinctio itaque eum soluta illo fugiat pariatur?",
      },
    {
      _id: 5,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699746435/Mir/Imagenes-card-noticias-home/wbpkvmbb5pqd9eejaum7.jpg",
        titulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam saepe, quae corrupti vero, exercitationem perspiciatis architecto temporibus minus, cupiditate officia cumque debitis distinctio itaque eum soluta illo fugiat pariatur?",
      },
    {
      _id: 6,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699746395/Mir/Imagenes-card-noticias-home/a4pabtn503xu2svf9p08.jpg",
        titulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam saepe, quae corrupti vero, exercitationem perspiciatis architecto temporibus minus, cupiditate officia cumque debitis distinctio itaque eum soluta illo fugiat pariatur?",
      },
    {
      _id: 7,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699746352/Mir/Imagenes-card-noticias-home/crt0gi9pprwokmpwdkn1.jpg",
        titulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam saepe, quae corrupti vero, exercitationem perspiciatis architecto temporibus minus, cupiditate officia cumque debitis distinctio itaque eum soluta illo fugiat pariatur?",
      },
    {
      _id: 8,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699746251/Mir/Imagenes-card-noticias-home/luqse0i0vnj5fxgzbsh1.jpg",
        titulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam saepe, quae corrupti vero, exercitationem perspiciatis architecto temporibus minus, cupiditate officia cumque debitis distinctio itaque eum soluta illo fugiat pariatur?",
      },
    {
      _id: 9,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699746250/Mir/Imagenes-card-noticias-home/ue7ejwsatjfns5l0h1xm.jpg",
        titulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam saepe, quae corrupti vero, exercitationem perspiciatis architecto temporibus minus, cupiditate officia cumque debitis distinctio itaque eum soluta illo fugiat pariatur?",
      },{
      _id: 10,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699746249/Mir/Imagenes-card-noticias-home/zpdnadbi9dbmpssskrw8.jpg",
        titulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam saepe, quae corrupti vero, exercitationem perspiciatis architecto temporibus minus, cupiditate officia cumque debitis distinctio itaque eum soluta illo fugiat pariatur?",
      }
  ];
  const cursos = [
    {
      _id: 1,
      imagen: "https://res.cloudinary.com/dco2buhwt/image/upload/v1699749087/Mir/Imagenes-card-Cursos/zh4pss9r5p7fvqnfnu0s.png",
      titulo: "Curso de Programación en Java"
    },
    {
      _id: 2,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699749087/Mir/Imagenes-card-Cursos/yj3l9qdxilp3hfao5xzu.png",
        titulo: "Curso de Programación en Arduino",
      },
    {
      _id: 3,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699749086/Mir/Imagenes-card-Cursos/mew0l2wdebenejfwqdjs.jpg",
        titulo: "Curso de Programación en Python",
      },
    {
      _id: 4,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699749085/Mir/Imagenes-card-Cursos/otnskzhbpugayes22kf5.jpg",
        titulo: "Curso de Robotica",
      },
    {
      _id: 5,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699749085/Mir/Imagenes-card-Cursos/etz1ech7saba8nofmvqx.jpg",
        titulo: "Curso de Ciberseguridad",
      },
    {
      _id: 6,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699749084/Mir/Imagenes-card-Cursos/uifkgk15ewplb8ejfxwg.jpg",
        titulo: "Curso de Programación en SQL",
      },
    {
      _id: 7,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699749084/Mir/Imagenes-card-Cursos/fvw9szq0jjyw0bvymux2.jpg",
        titulo: "Curso de Especialización en Backend",
      },
    {
      _id: 8,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699749084/Mir/Imagenes-card-Cursos/qm1pjiliipyezepyc6ub.jpg",
        titulo: "Curso de Especialización en Frontend",
      },
    {
      _id: 9,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699749083/Mir/Imagenes-card-Cursos/ujmwh5uvh2vd2etva5gv.jpg",
        titulo: "Curso de Programación en Arduino",
      },{
      _id: 10,
      imagen:"https://res.cloudinary.com/dco2buhwt/image/upload/v1699749083/Mir/Imagenes-card-Cursos/g4q72wylz4ymqrpsspz0.jpg",
        titulo: "Curso de Programación Full Stack",
      }
  ];

  useEffect(() => {
    setCardInfo(anuncio);
    setCardNoticias(noticias);
    setCardCursos(cursos)
  }, []);


 


  
  return (
    <div className="background-home">
      <div className="anuncios-home seccion-home">
        <h3>Ultimos Anuncios</h3>
        <div className="line-home"></div>
        <div className="anuncios-container">
          <AnunciosHome cardInfo={cardInfo}/>
        </div>
        <div className="button-group-home">
       
        </div>
       
      </div>
      <div className="anuncios-home seccion-home">
        <h3>Ultimas Noticias</h3>
        <div className="line-home"></div>
        <div className="anuncios-container">
          <NoticiasHome cardNoticias={cardNoticias} />
        </div>
        <div className="button-group-home">
        </div>
       
      </div>
      <div className="anuncios-home seccion-home">
        <h3>Ultimos Cursos</h3>
        <div className="line-home"></div>
        <div className="anuncios-container">
          <CursosHome cardCursos={cardCursos}/>
        </div>
        <div className="button-group-home">
       
        </div>
       
      </div>
    </div>
  );
}

export default Home;
