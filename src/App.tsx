import { useState } from "react";
import {
  filterExtensions, loadExtensions, removeExtension, resetExtensions, saveExtensions,
  sortedExtensions, toggleExtensionState
} from "./extensions";
import { ExtensionItem } from "./ExtensionItem";
import type { Filter } from "./extensions";

import Logo from "./assets/logo.svg?react";
import IconMoon from "./assets/icon-moon.svg?react";
import IconSun from "./assets/icon-sun.svg?react";

function App() {
  const [darkMode, setDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
  const [extensions, setExtensions] =
    useState(loadExtensions(window.localStorage));
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <article className={`font-[Noto_Sans] text-[hsl(226,11%,37%)] dark:text-[hsl(0,0%,78%)]
      bg-linear-to-b from-[#EBF2FC] to-[#EEF8F9] dark:from-[#040918] dark:to-[#091540] ${darkMode && "dark"}`}>

      <div className="min-h-dvh max-w-7xl mx-auto px-4 py-5 grid gap-10 content-start md:py-10">

        <header className="grid gap-10">

          <div className="bg-[hsl(200,60%,99%)] p-3 border border-[hsl(217,61%,90%)]
        rounded-lg shadow flex justify-between items-center dark:bg-[hsl(226,25%,17%)] dark:border-[hsl(226,25%,17%)]">

            <Logo className="text-[hsl(226,25%,17%)] dark:text-[hsl(0,0%,93%)]" />

            <button className="cursor-pointer bg-[hsl(0,0%,93%)] p-3 rounded-sm
          outline-[hsl(3,86%,64%)] outline-offset-2 hover:bg-[hsl(0,0%,78%)]
          focus-within:outline-2 dark:bg-[hsl(225,23%,24%)] dark:hover:bg-[hsl(226,11%,37%)]"
              onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <IconSun /> : <IconMoon />}
            </button>

          </div>

          <div className="flex flex-col gap-6 justify-between md:flex-row">
            <h1 className="text-[hsl(226,25%,17%)] text-4xl font-bold text-center dark:text-[hsl(0,0%,93%)]">
              Extensions List</h1>

            <div className="flex gap-2 justify-center">

              <button className={`cursor-pointer text-xl leading-none font-medium
            px-5 py-3 border rounded-full shadow outline-[hsl(3,86%,64%)]
            outline-offset-2 focus-within:outline-2
            ${filter === "all" ?
                  `bg-[hsl(3,77%,44%)] text-[hsl(200,60%,99%)] border-[hsl(3,77%,44%)] hover:border-[hsl(3,86%,64%)] hover:bg-[hsl(3,86%,64%)]
                dark:bg-[hsl(3,86%,64%)] dark:text-[hsl(226,25%,17%)] dark:border-[hsl(3,86%,64%)] dark:hover:bg-[hsl(3,71%,56%)] 
                dark:hover:border-[hsl(3,71%,56%)]` :
                  `bg-[hsl(200,60%,99%)] text-[hsl(225,23%,24%)] border-[hsl(217,61%,90%)] hover:border-[hsl(217,61%,90%)] hover:bg-[hsl(0,0%,93%)]
                dark:bg-[hsl(226,25%,17%)] dark:text-[hsl(0,0%,93%)] dark:border-[hsl(226,11%,37%)] dark:hover:bg-[hsl(225,23%,24%)] 
                dark:hover:border-[hsl(225,23%,24%)]`}`}
                onClick={() => setFilter("all")}>All</button>

              <button className={`cursor-pointer text-xl leading-none font-medium
            px-5 py-3 border rounded-full shadow outline-[hsl(3,86%,64%)]
            outline-offset-2 focus-within:outline-2
            ${filter === "active" ?
                  `bg-[hsl(3,77%,44%)] text-[hsl(200,60%,99%)] border-[hsl(3,77%,44%)] hover:border-[hsl(3,86%,64%)] hover:bg-[hsl(3,86%,64%)]
                dark:bg-[hsl(3,86%,64%)] dark:text-[hsl(226,25%,17%)] dark:border-[hsl(3,86%,64%)] dark:hover:bg-[hsl(3,71%,56%)] 
                dark:hover:border-[hsl(3,71%,56%)]` :
                  `bg-[hsl(200,60%,99%)] text-[hsl(225,23%,24%)] border-[hsl(217,61%,90%)] hover:border-[hsl(217,61%,90%)] hover:bg-[hsl(0,0%,93%)]
                dark:bg-[hsl(226,25%,17%)] dark:text-[hsl(0,0%,93%)] dark:border-[hsl(226,11%,37%)] dark:hover:bg-[hsl(225,23%,24%)] 
                dark:hover:border-[hsl(225,23%,24%)]`}`}
                onClick={() => setFilter("active")}>Active</button>

              <button className={`cursor-pointer text-xl leading-none font-medium
            px-5 py-3 border rounded-full shadow outline-[hsl(3,86%,64%)]
            outline-offset-2 focus-within:outline-2
            ${filter === "inactive" ?
                  `bg-[hsl(3,77%,44%)] text-[hsl(200,60%,99%)] border-[hsl(3,77%,44%)] hover:border-[hsl(3,86%,64%)] hover:bg-[hsl(3,86%,64%)]
                dark:bg-[hsl(3,86%,64%)] dark:text-[hsl(226,25%,17%)] dark:border-[hsl(3,86%,64%)] dark:hover:bg-[hsl(3,71%,56%)] 
                dark:hover:border-[hsl(3,71%,56%)]` :
                  `bg-[hsl(200,60%,99%)] text-[hsl(225,23%,24%)] border-[hsl(217,61%,90%)] hover:border-[hsl(217,61%,90%)] hover:bg-[hsl(0,0%,93%)]
                dark:bg-[hsl(226,25%,17%)] dark:text-[hsl(0,0%,93%)] dark:border-[hsl(226,11%,37%)] dark:hover:bg-[hsl(225,23%,24%)] 
                dark:hover:border-[hsl(225,23%,24%)]`}`}
                onClick={() => setFilter("inactive")}>Inactive</button>

            </div>

          </div>


        </header>

        <div className="grid gap-10">

          <ul className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(16rem,25.5rem))] justify-center">
            {sortedExtensions(filterExtensions(extensions, filter)).map(ext =>
              <ExtensionItem
                key={ext.name}
                extension={ext}

                onToggleState={() => {
                  const newExtensionsList = toggleExtensionState(extensions, ext);
                  setExtensions(newExtensionsList);
                  saveExtensions(newExtensionsList, window.localStorage);
                }}

                onRemove={() => {
                  const newExtensionsList = removeExtension(extensions, ext);
                  setExtensions(newExtensionsList);
                  saveExtensions(newExtensionsList, window.localStorage);
                }}

              />)}
          </ul>

          <button className="cursor-pointer underline leading-none px-5
          py-3 rounded-full outline-[hsl(3,86%,64%)] outline-offset-2
          focus-within:outline-2"
            onClick={() => {
              const newExtensionsList = resetExtensions();
              setExtensions(newExtensionsList);
              saveExtensions(newExtensionsList, window.localStorage);
            }}>Reset</button>
        </div>

      </div>

    </article>
  );
}

export default App;
