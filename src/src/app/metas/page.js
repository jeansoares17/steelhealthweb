import NavBar from "@/components/NavBar";
import Metas from "./Metas";
import Button from "@/components/Button";
import { PlusIcon  } from '@heroicons/react/24/outline'
import { getMetas } from "@/actions/metas";

export default async function Metas() {

  const data = await getMetas()

  return (
    <>
      <NavBar active={"metas"} />

      <main className="bg-slate-900 mt-10 m-auto max-w-lg p-8 rounded">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Metas</h1>
          <Button href="/metas/new" >
            <PlusIcon className="h6 w-6" />
            criar metas
          </Button>
        </div>

        <div id="data">
          {data.map(metas => <Metas key={metas.id} metas={metas} />)}
        </div>

      </main>
    </>

  )
}