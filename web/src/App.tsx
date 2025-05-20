import { CirclePlus } from "lucide-react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

export default function App() {
  return (
    <main>
      <Header />

      <section className="container mx-auto px-4">
        <div className="flex flex-1 justify-between gap-2">
          <Input className="-translate-y-1/2 mb-[2.3125rem]" />
          <Button className="-translate-y-1/2 mb-[2.3125rem]">
            Criar
             <CirclePlus className="text-base font-bold" color="#f2f2f2" />
          </Button>
        </div>
      </section>
    </main>
  )
}

