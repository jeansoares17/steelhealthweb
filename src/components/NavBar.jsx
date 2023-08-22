import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className=" flex justify-between items-center py-2 px-4 bg-slate-900">
            <ul id="links" className="flex gap-14 items-end text-slate-500">
                <li>
                    <Link href="/">
                        <h1 className="text-slate-100 text-2xl">SteelHealth</h1>
                    </Link>
                </li>
                <li>
                    <Link className={active=="treinos" && "text-slate-300"} href="/treino">
                    treino
                    </Link>
                </li>
                
                <li>
                    <Link className={active=="metas" && "text-slate-300"} href="/meta">
                        meta
                    </Link>
                </li>
                
                <li>
                    <Link className={active=="alimentacao" && "text-slate-300"} href="/alimentacao">
                        alimentação
                    </Link>
                </li>
                
            </ul>

            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://static.poder360.com.br/2021/08/messi-contrato-barcelona.jpg" alt="avatar do usuário" />
            </div>

        </nav>
    )
}