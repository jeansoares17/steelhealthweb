import { Zap } from '@heroicons/react/24/outline'
import DropMenu from "@/components/DropMenu";

export default function Metas({meta}) {
    return (
        <div id="data-row" className="group flex justify-between items-center p-2 my-1 rounded cursor-pointer hover:bg-slate-700">
            <div className="flex gap-2">
                <Zap className="h-6 w-6" />
                <span>{meta.nome}</span>
            </div>
            <div className="flex items-center">
                <span>Emagrecer</span>
                <div className='invisible group-hover:visible'>
                    <DropMenu />
                </div>
            </div>
        </div>
    )
}