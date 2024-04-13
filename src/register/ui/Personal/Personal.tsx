import React, { ChangeEvent,useState, useEffect, FormEvent } from "react";
import { gender } from "@/register/data/data";
import styles from './Personal.module.css'


interface Personal {
    nombre: string;
    apellido: string;
    genero: number;
    pais: string;
    ciudad: string;
    telefono: string;
    email: string;
}

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type SelectChange=ChangeEvent<HTMLInputElement | HTMLSelectElement > ;


export default function Personal({setForm} : {setForm: any}){

    const initialState ={
        nombre:"",
        apellido:"",
        genero: 0,
        pais:"",
        ciudad:"",
        telefono:"",
        email:"",
    }

    /* const [personal, setPersonal] = useState<string[]>([]) */

    const [personal, setPersonal] = useState<Personal>(initialState)

    const {nombre, apellido, genero, pais, ciudad, telefono, email} = personal

    /* Inicio */
    /* Formulario de Registro Personal */

    const handleInputChangeFR = (e: InputChange) => {
        const isNumber = ['genero'].includes(e.target.id)

        setPersonal({
            ...personal,
            [e.target.id]: isNumber ? +e.target.value : e.target.value
        })

        console.log("Muestro inputChange Formulario de Registro Personal")
        console.log(e.target.value)

    }

    const handleSubmitFR = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        alert(`Cargando los datos del Formulario de Registro Personal \n`
            + `Nombre: ${personal.nombre} \n` + `Apellido: ${personal.apellido} \n` + `Genero: ${personal.genero} \n`
            + `Pais: ${personal.pais} \n` + `Ciudad: ${personal.ciudad} \n` + `Telefono: ${personal.telefono} \n`
            + `Email: ${personal.email} \n`)

        setPersonal({
            nombre: "",
            apellido: "",
            genero: 0,
            pais: "",
            ciudad: "",
            telefono: "",
            email: "",
        });

        console.log("Mostrando los campos cargados en el Formulario de Registro Personal")
        console.log(personal) 
        setForm('labor');
    }

    /*  */
    /* Fin */

    return (
        <>
            <h2 className={styles.title}>Todos somos Makers.</h2>
            <p className={styles.comment}>
                Completa el formulario y el equipo de NetMakers<br/>
                te ayudará a encontrar tu próximo empleo.
            </p>

            {/* formulario de Registro */}
            <form className={`${styles.form} animate__animated animate__bounce`} onSubmit={handleSubmitFR}>
                <fieldset>
                    <legend className={styles.legend}>Información Personal</legend>

                    <label className={styles.label} htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Ej.: Jose"
                        value={nombre}
                        className={styles.input}
                        required
                        onChange={handleInputChangeFR}
                    />

                    <label className={styles.label} htmlFor="apellido">Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        id="apellido"
                        placeholder="Ej.: Perez"
                        value={apellido}
                        className={styles.input}

                        onChange={handleInputChangeFR}
                    />

                    <div>
                        <p className={styles.genderComment}>Género</p>
                        <div className={styles.gender}>
                            {gender.map(e =>(
                                <div key={e.id} className={styles.genderConteiner}>
                                    <label htmlFor="genero">{e.name}</label>
                                    <input
                                        type="radio"
                                        name="genero"
                                        id="genero"
                                        value={e.id}
                                        className={styles.genderInput}
                                        onChange={handleInputChangeFR}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <label className={styles.label} htmlFor="pais">País</label>
                    <input
                        type="text"
                        name="pais"
                        id="pais"
                        placeholder="Ej.: Argentina"
                        value={pais}
                        className={styles.input}
                        onChange={handleInputChangeFR}
                    />{" "}

                    {/* Revisar si despliega una lista de paises */}
                    <label className={styles.label} htmlFor="ciudad">Ciudad</label>
                    <input
                        type="text"
                        name="ciudad"
                        id="ciudad"
                        placeholder="Ej.: Buenos Aires"
                        value={ciudad}
                        className={styles.input}
                        onChange={handleInputChangeFR}
                    />{" "}

                    <label className={styles.label} htmlFor="telefono">Teléfono</label>
                    <input
                        type="number"
                        name="telefono"
                        id="telefono"
                        placeholder="+5402930422"
                        value={telefono}
                        className={styles.input}
                        onChange={handleInputChangeFR}
                    />

                    <label className={styles.label} htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Ej.: alguien@dominio.com"
                        value={email}
                        className={styles.input}
                        onChange={handleInputChangeFR}
                    />
                </fieldset>

                <input className={styles.submit} type="submit" value="Continuar" />
            
            </form>
        </>
    )
}