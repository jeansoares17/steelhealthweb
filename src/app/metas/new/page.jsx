"use client"

import { create } from "@/actions/metas";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextField from "@/components/TextField";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { redirect } from 'next/navigation'

export default function FormMetas() {
    const [ error, setError ] = useState("")
    
    async function handleSubmit(formData){
        const resp =  await create(formData)

        if (resp.message) {
            setError(resp.message)
            return
        }
       redirect("/metas")
    }

    return (
        <>
            <NavBar active="metas" />

            

            <main className="bg-slate-900 mt-10 m-auto max-w-md p-6 rounded flex gap-3 flex-col">
                <form action={handleSubmit}>
                    <h1 className="text-2xl">Cadastrar Meta</h1>
                    <TextField
                        label="objetivo"
                        id="objetivo"
                        name="objetivo"
                    />

                    <TextField
                        label="pesoAtual"
                        id="pesoAtual"
                        name="pesoAtual"
                    />

                    <TextField
                        label="altura"
                        id="altura"
                        name="altura"
                    />

                    <TextField
                        label="pesoDesejado"
                        id="pesoDesejado"
                        name="pesoDesejado"
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
        </>

    )
}