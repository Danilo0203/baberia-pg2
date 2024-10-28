import { cn } from "@/lib/utils";

interface ItemListaProps {
  name: string;
  mode?: "espera" | "atendiendo";
  status?: string;
}
export const ItemLista = ({
  name,
  mode = "espera",
  status = "espera",
}: ItemListaProps) => {
  if (mode === "atendiendo") {
    return (
      <li
        className={cn(
          "relative rounded-3xl bg-item-espera px-4 py-5 text-start text-2xl",
          {
            "bg-[#5E8038]": status === "atendiendo",
            "bg-item-espera bg-opacity-60": status === "espera",
          },
        )}
      >
        <div className="absolute right-0 top-0 -translate-x-1/4 translate-y-1/2 rounded-full bg-black px-3 py-1 text-xs">
          {status}
        </div>
        {name}
      </li>
    );
  }

  return (
    <li className="relative rounded-3xl bg-item-espera bg-opacity-60 px-4 py-5 text-2xl">
      <div className="absolute right-0 top-0 -translate-x-1/4 translate-y-1/2 rounded-full bg-black px-3 py-1 text-xs">
        Espera
      </div>
      {name}
    </li>
  );
};
