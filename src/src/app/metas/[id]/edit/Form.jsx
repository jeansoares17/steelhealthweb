"use client"

import { create, update } from "@/actions/metas";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { redirect } from 'next/navigation'
export default function FormEdit({meta}){
    const [ error, setError ] = useState("")
    const [metaEdit, setMetaEdit] = useState(meta)
    
    async function handleSubmit(){
        const resp =  await update(contaEdit)

        if (resp?.error) {
            setError(resp.error)
            return
        }
        
       redirect("/metas")
    }

    function handleFieldChange(field, value){
        setMetaEdit({
            ...metaEdit,
            [field]: value
        })
    }

    return (
        <main className="bg-slate-900 mt-10 m-auto max-w-md p-6 rounded flex gap-3 flex-col">
                <form action={handleSubmit}>
                    <h1 className="text-2xl">Editar Metas</h1>
                    <TextField
                        label="objetivo"
                        id="objetivo"
                        name="objetivo"
                        value={metaEdit.objetivo}
                        onChange={(e) => handleFieldChange("objetivo", e.target.value )}
                    />

                    <TextField
                        label="pesoAtual"
                        id="pesoAtual"
                        name="pesoAtual"
                        value={metaEdit.pesoAtual}
                        onChange={(e) => handleFieldChange("pesoAtual", e.target.value )}
                    />

                    <TextField
                        label="pesoDesejado"
                        id="pesoDesejado"
                        name="pesoDesejado"
                        value={metaEdit.pesoDesejado}
                        onChange={(e) => handleFieldChange("pesoDesejado", e.target.value )}
                    />

                    <div className="flex justify-around mt-4">
                        <Button href="/metas" variant="secondary">cancelar</Button>
                        <Button type="button">
                            <CheckCircleIcon className="h-6 w-6" />
                            salvar
                        </Button>

                    </div>

                    <span className="text-red-500">{error}</span>

                </form>
            </main>

    )
}