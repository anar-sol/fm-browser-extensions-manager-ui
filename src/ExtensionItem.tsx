import type { ChangeEventHandler, MouseEventHandler } from "react";
import type { Extension } from "./extensions";

function ExtensionItem({ extension, onToggleState, onRemove }:
    {
        extension: Extension, onToggleState: ChangeEventHandler,
        onRemove: MouseEventHandler
    }) {
    return (
        <li className="grid gap-4 bg-[hsl(200,60%,99%)] p-4 border border-[hsl(217,61%,90%)] rounded-2xl shadow
            dark:bg-[hsl(226,25%,17%)] dark:border-[hsl(226,11%,37%)]"
        >
            <div className="grid grid-cols-[auto_1fr] gap-4">
                <img src={extension.logo} alt="" />
                <div className="grid gap-2">
                    <h2 className="text-[hsl(226,25%,17%)] text-xl font-bold
                        dark:text-[hsl(0,0%,93%)]">
                        {extension.name}</h2>
                    <p>{extension.description}</p>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <button className="cursor-pointer text-[hsl(225,23%,24%)] font-medium leading-none px-4
                    py-3 border border-[hsl(0,0%,78%)] rounded-full outline-[hsl(3,86%,64%)] outline-offset-2 focus-within:outline-2
                    hover:border-[hsl(3,77%,44%)] hover:bg-[hsl(3,77%,44%)] hover:text-[hsl(200,60%,99%)]
                    dark:text-[hsl(0,0%,93%)] dark:border-[hsl(226,11%,37%)] dark:hover:bg-[hsl(3,71%,56%)]
                    dark:hover:border-[hsl(3,71%,56%)] dark:hover:text-[hsl(226,25%,17%)]"
                    onClick={onRemove}>Remove</button>
                <input className={`cursor-pointer appearance-none block
                    w-9 h-5 rounded-full relative before:block before:w-4 before:h-4 before:bg-white before:rounded-full
                    before:absolute before:top-1/2 before:left-0.5 before:-translate-y-1/2 before:translate-x-0
                    before:transition-transform before:duration-200
                    outline-[hsl(3,86%,64%)] outline-offset-2 focus-within:outline-2 hover:bg-[hsl(3,86%,64%)]
                    ${extension.isActive ? "bg-[hsl(3,77%,44%)] dark:bg-[hsl(3,86%,64%)] before:translate-x-4" : "bg-[hsl(0,0%,78%)]"}
                     dark:hover:bg-[hsl(3,71%,56%)]`}
                    type="checkbox" checked={extension.isActive}
                    onChange={onToggleState} />
            </div>
        </li>
    );
}

export { ExtensionItem };