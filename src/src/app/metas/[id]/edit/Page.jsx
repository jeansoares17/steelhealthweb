
import NavBar from "@/components/NavBar";
import FormEdit from "./Form";
import { getMetas } from "@/actions/metas";

export default async function FormMetas({params}) {
    
    const metas = await getMetas(params.id)
        
    return (
        <>
            <NavBar active="metas" />
            <FormEdit meta={meta} />
        </>
    )
}