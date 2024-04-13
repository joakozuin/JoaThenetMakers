import Personal from "@/register/ui/Personal/Personal"
import Labor from "@/register/ui/Labor/Labor"
import { useState } from "react";

export default function Register(){
    const [form, setForm] = useState<"personal" | "labor">('personal');
    const formOption = {personal: <Personal setForm={setForm}/>, labor: <Labor setForm={setForm}/>}; // options[1] === Labor

/* 13-4-2024 */

/* saturdays */
    return (

        <>
            {formOption[form]}
        </>
    )
}