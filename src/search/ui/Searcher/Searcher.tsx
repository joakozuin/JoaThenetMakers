import { useEffect, useState } from "react";
import styles from "./Searcher.module.css";
import Image from "next/image";

import { fetchUsers, getAllUsers } from "../../services/User";
import { Card } from "../Card/Card";
import logo from "../../../../public/nmc.svg";
import searchIcon from "../../../../public/magnifying-glass-solid.svg";

type user = {
  name: string;
  lastname: string;
  profileImage: string;
};

export const Searcher = () => {
  const [param, setParam] = useState<string>("");

  const [defaultUsers, setDefaultUsers] = useState<user[]>([]);

  const [users, setUsers] = useState<user[]>([]);

  const handleChange = (evt: any) => {
    evt.preventDefault();
    const value = evt.target.value;
    setParam(value);
  };

  const onKeyDown = (evt: any) => {
    if (evt.key === "Enter") {
      fetchUsers(param)
        .then((users) => {
          if (Array.isArray(users)) {
            setUsers(users);
            console.log(users);
          } else {
            console.error("La respuesta no contiene una lista de usuarios.");
          }
        })
        .catch((error) => {
          console.error("Error al obtener los usuarios:", error);
        });
    }
  };

  useEffect(() => {
    getAllUsers().then((users) => {
      setDefaultUsers(users);
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.head}>
          <Image src={logo} alt="" />
        </div>
        <div className={styles.fieldContainer}>
          <Image src={searchIcon} alt="icon" />
          <input
            placeholder="Encuentra profesionales"
            type="text"
            name="searcher"
            onChange={handleChange}
            value={param}
            onKeyDown={onKeyDown}
          />
        </div>
      </div>

      <div className={styles.collection}>
        {users.length > 0
          ? users.map((user: any) => (
              <Card
                id={user._id}
                key={user.username}
                name={user.nombre}
                lastname={user.apellido}
                profileImage={user.imagen_perfil}
                country={user.pais}
                description={user.descripcion}
                speciality={user.habilidades}
                tools={user.herramientas}
              />
            ))
          : defaultUsers.map((user: any) => (
              <Card
                id={user._id}
                key={user.username}
                name={user.nombre}
                lastname={user.apellido}
                profileImage={user.imagen_perfil}
                country={user.pais}
                description={user.descripcion}
                speciality={user.habilidades}
                tools={user.herramientas}
              />
            ))}
      </div>
    </>
  );
};
