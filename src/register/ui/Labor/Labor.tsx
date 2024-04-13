import React, { ChangeEvent,useState, useEffect, FormEvent } from "react";
import { experience, salary, trueFalse } from "@/register/data/data";
import styles from './Labor.module.css'


interface Labor {
    profesion: string,
    herramientas: string,
    idiomas: string,
    experiencia: number,
    valor: number,
    remoto: number,
    freelance: number,
    factura: number,
    edad: string,
    condiciones: string
}

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type SelectChange=ChangeEvent<HTMLInputElement | HTMLSelectElement > ;


export default function Labor({setForm}: {setForm: any}){

    const initialState = {
        profesion: "",
        herramientas: "",
        idiomas: "",
        experiencia: 0,
        valor: 0,
        remoto: 0,
        freelance: 0,
        factura: 0,
        edad: "",
        condiciones: "",
    }

    /* const [labor ,setLabor] = useState<string[]>([]) */

    const [labor ,setLabor] = useState<Labor>(initialState)

    const {profesion, herramientas, idiomas, experiencia, valor, remoto, edad, factura, condiciones, freelance} = labor


    /* Inicio */

    /* Formulario de Registro Profesional */
    const handleInputChangeFP = (e: InputChange | SelectChange  ) => {

        const isNumber = ['experiencia', 'valor', 'remoto', 'freelance', 'factura'].includes(e.target.id)

        setLabor({ ...labor,
            [e.target.id]: isNumber ? +e.target.value : e.target.value});

        console.log("Muestro inputChange del Formulario de Registro Profesional");
        console.log(e.target.value);
    }

    const handleSubmitFP = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        alert(
            `Cargando los datos del Formulario de Registro Profesional \n` +
            `Profesión: ${labor.profesion} \n` +
            `Herramientas: ${labor.herramientas} \n` +
            `Idiomas: ${labor.idiomas} \n` +
            `Experiencia: ${labor.experiencia} \n ` +
            `Aspiración salarial: ${labor.valor} \n ` +
            `Te gustaría trabajar en Remoto: ${labor.remoto} \n ` +
            `Te gusta trabajar como freelance: ${labor.freelance} \n ` +
            `Puedes emitir una factura: ${labor.factura} \n ` +
            `Acepta tener más de 18 años: ${labor.edad} \n ` +
            `Acepta términos y condiciones: ${labor.condiciones} \n `
        );
    
        setLabor({
            profesion: "",
            herramientas: "",
            idiomas: "",
            experiencia: 0,
            valor: 0,
            remoto: 0,
            freelance: 0,
            factura: 0,
            edad: "",
            condiciones: ""
        })

        console.log("Mostrando los campos cargados del Formulario de Registro Profesional")
        console.log(labor)
        setForm('personal');
    }


    /* Fin */

    return (
        <>
            <h2 className={styles.title}>Todos somos Makers.</h2>
            <p className={styles.comment}>
                Completa el formulario y el equipo de NetMakers<br/>
                te ayudará a encontrar tu próximo empleo.
            </p>

            {/* Formulario de Pregunta  */}
            <form className={`${styles.form} animate__animated animate__bounceg`} onSubmit={handleSubmitFP}>
                <fieldset>
                    <legend className={styles.legend}>Información Profesional</legend>

                    <label className={styles.label} htmlFor="profesion">¿Cuál es tu título profesional o área de especialización?</label>
                    <input
                        type="text"
                        name="profesion"
                        id="profesion"
                        placeholder="Ej.: Dev Frontend"
                        /* value={profesion} */
                        className={styles.input}
                        onChange={ handleInputChangeFP}
                    />

                    <label className={styles.label} htmlFor="herramientas">¿Qué herramientas y/o softwars utilizas en tu trabajo?</label>
                    <input
                        type="text"
                        name="herramientas"
                        id="herramientas"
                        placeholder="Ej.: React, Next.js, Laravel, Figma"
                        /* value={herramientas} */
                        className={styles.input}
                        onChange={ handleInputChangeFP}
                    />

                    <label className={styles.label} htmlFor="idiomas">¿En qué idiomas puedes mantener una conversación?</label>
                    <input
                        type="text"
                        name="idiomas"
                        id="idiomas"
                        placeholder="Ej.: español, ingles, frances"
                        /* value={idiomas} */
                        className={styles.input}
                        onChange={ handleInputChangeFP}
                    />

                    <div>
                        <label className={styles.label} htmlFor="experiencia">¿Cuánta experiencia tienes en tú trabajo?</label>

                        <select
                            name="experiencia"
                            id="experiencia"
                            value={experiencia}
                            onChange={handleInputChangeFP}
                        >
                            <option value={0} disabled>-- Seleccione --</option>

                            {experience.map(e => (
                                <option key={e.id} value={e.id}>{e.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className={styles.label} htmlFor="valor">¿Cuánto es el valor de la hora por tu trabajo?</label>
                        
                        <select
                            name="valor"
                            id="valor"
                            value={valor}
                            onChange={handleInputChangeFP}
                        >
                            <option value={0} disabled>-- Seleccione --</option>

                            {salary.map(e => (
                                <option key={e.id} value={e.id}>{e.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className={styles.label} htmlFor="remoto">¿Puedes trabajar 100% de forma remota?</label>
                        
                        <select
                            name="remoto"
                            id="remoto"
                            value={remoto}
                            onChange={handleInputChangeFP}
                        >
                            <option value={0} disabled>-- Seleccione --</option>

                            {trueFalse.map(e => (
                                <option key={e.id} value={e.id}>{e.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className={styles.label} htmlFor="freelance">¿Trabajas o Trabajarías como freelance?</label>
                        <select
                            name="freelance"
                            id="freelance"
                            value={freelance}
                            onChange={handleInputChangeFP}
                        >
                            <option value={0} disabled>-- Seleccione --</option>

                            {trueFalse.map(e => (
                                <option key={e.id} value={e.id}>{e.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className={styles.label} htmlFor="factura">¿Puedes realizar una factura por los trabajos realizados?</label>
                        <select
                            name="factura"
                            id="factura"
                            value={factura}
                            onChange={handleInputChangeFP}
                        >
                            <option value={0} disabled>-- Seleccione --</option>

                            {trueFalse.map(e => (
                                <option key={e.id} value={e.id}>{e.name}</option>
                            ))}
                        </select>
                    </div>

                    <label htmlFor="edad">Acepto tener más de 18 años</label>
                    <input
                        type="checkbox"
                        name="edad"
                        id="edad"
                        value="Edad"
                        onChange={handleInputChangeFP}
                    />

                    <label htmlFor="condiciones">Acepto términos y condiciones</label>
                    <input
                        type="checkbox"
                        name="condiciones"
                        id="condiciones"
                        value="Condiciones"
                        onChange={handleInputChangeFP}
                    />

                </fieldset>

                <input className={styles.submit} type="submit" value="Continuar" />
            
            </form>
        </>
    )
}