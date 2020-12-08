import React from "react";
import BackgroundHome from "../../components/BackgroundHome/BackgroundHome.jsx";
import ImagemPerfilMenor from "../../components/ImagemPerfilMenor/ImagemPerfilMenor";
import { Button } from "../../components/Button/Button";
import { Link, useHistory } from "react-router-dom";
import HomeNavbar from "../../components/HomeNavbar/HomeNavbar.jsx";
import "./Home.scss";
import ContainerCard from "../../components/ContainerCard/containerCard";
import imgContainerPic from "../../assets/images/containerImage.svg";
import imgContainerAgenda1 from "../../assets/icons/IconeAgenda1.svg";
import imgContainerAgenda2 from "../../assets/icons/IconeAgenda2.svg";
import { SideMenu } from "../../components/SideMenu/SideMenu.jsx";
import iconNotif from '../../assets/icons/icon-notificações.svg';
import iconMatches from '../../assets/icons/icon-matches.svg';
import iconCalendar from '../../assets/icons/icon-calendar.svg';
import iconConfig from '../../assets/icons/icon-config.svg';
import Notif from '../../assets/icons/Notificação.svg';

export function Home() {
  const history = useHistory();

  function onClick() {
    history.push("/");
  }

  return (
    <>
    <div className="home-container">
      <BackgroundHome>
        <div className="profile-container">
          <ImagemPerfilMenor />
          <Button
            width="136px"
            background="#184177"
            height="32px"
            borderRadius="10px"
            className="btn btn-profile btn-font1 btn-text"
            onClick={onClick}
          >
            Editar Perfil
          </Button>
        </div>
        <ContainerCard image={imgContainerPic} text="Maria também gostaria de conversar com você" className="containerNotificacao"/>
        <ContainerCard image={imgContainerPic} text="Maria também gostaria de conversar com você" className="containerNotificacao"/>
        <ContainerCard image={imgContainerPic} text="Maria também gostaria de conversar com você" className="containerNotificacao"/>
        <ContainerCard image={imgContainerAgenda1} text="Encontro com Maria!" className="containerAgenda"/>
        <ContainerCard image={imgContainerAgenda2} text="Encontro com Julia!" className="containerAgenda"/>
      </BackgroundHome>
      <side className="side-menu">
        <SideMenu src={iconNotif} notif={Notif} />
        <SideMenu src={iconCalendar} notif={Notif} />
        <SideMenu src={iconMatches} notif={Notif} />
        <SideMenu src={iconConfig} notif={Notif} />
      </side>
      
    </div>
     <HomeNavbar>
        <Link to="./search">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.1251 2.23504V5.47726L17.9564 2.82916V2.23504H21.1251ZM25.2391 11.0733C25.1335 11.2148 24.9803 11.2884 24.8219 11.2884C24.7057 11.2884 24.5948 11.2487 24.4945 11.1695L23.7657 10.5584V25.4342C23.7657 25.7454 23.528 26 23.2375 26H15.844V15.815H9.50668V26H2.11314C1.82268 26 1.58503 25.7454 1.58503 25.4342V10.5584L0.856237 11.1695C0.623868 11.3619 0.291159 11.3166 0.111602 11.0733C-0.0679559 10.8244 -0.0257071 10.4679 0.20138 10.2755L12.3479 0.118825C12.5433 -0.0396083 12.8074 -0.0396083 13.0028 0.118825L25.1493 10.2755C25.3764 10.4679 25.4186 10.8244 25.2391 11.0733Z" fill="#2767BC" />
          </svg>
        </Link>
        <Link to="./Home">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4077 16.3522H18.582L26 23.785L23.785 26L16.3522 18.582V17.4077L15.9508 16.9914C14.2561 18.4483 12.056 19.3253 9.66266 19.3253C4.3259 19.3253 0 14.9994 0 9.66266C0 4.3259 4.3259 0 9.66266 0C14.9994 0 19.3253 4.3259 19.3253 9.66266C19.3253 12.056 18.4483 14.2561 16.9914 15.9508L17.4077 16.3522ZM2.97314 9.66258C2.97314 13.3641 5.96114 16.3521 9.66268 16.3521C13.3642 16.3521 16.3522 13.3641 16.3522 9.66258C16.3522 5.96103 13.3642 2.97304 9.66268 2.97304C5.96114 2.97304 2.97314 5.96103 2.97314 9.66258Z" fill="#2767BC" />
          </svg>
        </Link>
        <Link to="./chat">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.7149 3.85889H21.4297V3.09717C21.4297 1.83713 20.4046 0.812012 19.1446 0.812012H2.28516C1.02512 0.812012 0 1.83713 0 3.09717V15.2847C0 16.5447 1.02512 17.5699 2.28516 17.5699H4.57032V21.3785C4.57032 22.0581 5.3941 22.3937 5.87063 21.917L7.17099 20.6167H15.7822L20.1294 24.9639C20.6062 25.4409 21.4297 25.1061 21.4297 24.4253V20.6167H23.7148C24.9749 20.6167 26 19.5916 26 18.3316V6.14405C26.0001 4.88402 24.9749 3.85889 23.7149 3.85889ZM6.09376 19.5395V16.8081C6.09376 16.3875 5.75271 16.0464 5.33204 16.0464H2.28516C1.86515 16.0464 1.52344 15.7047 1.52344 15.2847V3.09717C1.52344 2.67716 1.86515 2.33545 2.28516 2.33545H19.1446C19.5646 2.33545 19.9063 2.67716 19.9063 3.09717V15.2847C19.9063 15.7047 19.5646 16.0464 19.1446 16.0464H9.90236C9.7003 16.0464 9.50662 16.1267 9.36378 16.2695L6.09376 19.5395ZM24.4766 18.3316C24.4766 18.7516 24.1349 19.0933 23.7149 19.0933H20.668C20.2473 19.0933 19.9063 19.4343 19.9063 19.855V22.5864L16.6363 19.3164C16.4934 19.1736 16.2997 19.0933 16.0977 19.0933H8.69443L10.2179 17.5699H19.1446C20.4046 17.5699 21.4297 16.5447 21.4297 15.2847V5.38233H23.7149C24.1349 5.38233 24.4766 5.72404 24.4766 6.14405V18.3316Z" fill="#2767BC" />
            <path d="M14.5742 5.38232H3.8086C3.38792 5.38232 3.04688 5.72337 3.04688 6.14404C3.04688 6.56472 3.38792 6.90577 3.8086 6.90577H14.5742C14.9949 6.90577 15.336 6.56472 15.336 6.14404C15.336 5.72337 14.9949 5.38232 14.5742 5.38232Z" fill="#2767BC" />
            <path d="M17.6211 8.4292H3.8086C3.38792 8.4292 3.04688 8.77025 3.04688 9.19092C3.04688 9.6116 3.38792 9.95265 3.8086 9.95265H17.6211C18.0418 9.95265 18.3828 9.6116 18.3828 9.19092C18.3828 8.77025 18.0418 8.4292 17.6211 8.4292Z" fill="#2767BC" />
            <path d="M11.5274 11.4761H3.8086C3.38792 11.4761 3.04688 11.8171 3.04688 12.2378C3.04688 12.6585 3.38792 12.9995 3.8086 12.9995H11.5274C11.948 12.9995 12.2891 12.6585 12.2891 12.2378C12.2891 11.8171 11.948 11.4761 11.5274 11.4761Z" fill="#2767BC" />
          </svg>
        </Link>
      </HomeNavbar>
      </>
  );
}
