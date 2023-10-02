"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/metas"

export async function create(formData){

    const options = {
        method: "POST",
        body: JSON.stringify( Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }   

    const resp = await fetch(url, options)
    const json = await resp.json()

    if (resp.status !== 201 ){
        const errors = json.reduce((str, error) => str += error.message + ". ", "")
        return {
            message: `Erro ao cadastrar meta. ${resp.status} - ${errors} `
        }
    }

    revalidatePath("/metas")
    return { ok: 'ok' }

}

export async function getMetas() {
    const token = cookies().get('steelhealth_token')
    
    const options = {
        headers: {
            "Authorization": `Bearer ${token.value}`
        }
    }

    const resp = await fetch(url, options)
    if (!resp.ok){
        throw new Error("Erro ao obter dados das contas")
    }

    return resp.json()
}

export async function destroy(id){
    const deleteUrl = url + "/" + id

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(deleteUrl, options)

    if(resp.status !== 204) 
        return {error: "Erro ao apagar meta. " + resp.status }

    revalidatePath("/metas")

}

export async function getMetas(id){
    const getUrl = url + "/" + id

    const resp = await fetch(getUrl)

    if(resp.status !== 200) 
        return {error: "Erro ao buscar dados da meta. " + resp.status }

    return await resp.json()
    
}

export async function update(meta){
    const updateUrl = url + "/" + meta.id

    const options = {
        method: "PUT",
        body: JSON.stringify(meta),
        headers: {
            "Content-Type": "application/json"
        }
    }   

    const resp = await fetch(updateUrl, options)
    
    if (resp.status !== 200 ){
        return {
            error: `Erro ao atualizar. ${resp.status} `
        }
    }

    revalidatePath("/metas")
    
}