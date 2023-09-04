import NavBar from "@/components/NavBar";
import Metas from "./Metas";

async function getMetas(){
  const url = "http://localhost:8080/api/metas"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  return resp.json()
}

export default async function Metas() {

  const data = await getMetas()

  return (
    <>
      <NavBar active={"metas"} />

      <main className="bg-slate-900 mt-10 m-auto max-w-lg p-8 rounded">
        <h1 className="text-2xl">Metas</h1>

        <div id="data">
          {data.map(meta => <Metas key={meta.id} meta={meta} />)}
        </div>

      </main>
    </>

  )
}