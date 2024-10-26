import { ItemListaAtendiendo } from "./ItemListaAtendiendo";

export const ListaAtendiendo = () => {
  const listaAtendiendo = [
    {
      id: 5,
      barber: "Danilo",
    },
    {
      id: 4,
      barber: "Danilo",
      perfil: "/img/barberos/barbero.png",
    },
    {
      id: 1,
      barber: "Marlon",
      perfil: "/img/barberos/barbero.png",
      pacients: [
        {
          id: 1,
          name: "Fernando",
        },
        {
          id: 2,
          name: "Fernando",
        },
        {
          id: 3,
          name: "Fernando",
        },
      ],
    },
    // {
    //   id: 2,
    //   barber: "Marlon",
    //   perfil: "/img/barberos/barbero.png",

    //   pacients: [
    //     {
    //       name: "Fernando",
    //     },
    //     {
    //       name: "Fernando",
    //     },
    //     {
    //       name: "Fernando",
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   barber: "Marlon",
    //   perfil: "/img/barberos/barbero.png",
    //   pacients: [
    //     {
    //       name: "Fernando",
    //     },
    //     {
    //       name: "Fernando",
    //     },
    //     {
    //       name: "Fernando",
    //     },
    //   ],
    // },
  ];
  return (
    <nav className="flex flex-1 flex-col gap-14">
      <h2 className="text-3xl font-semibold">Atendiendo:</h2>
      <ul className="grid flex-1 grid-cols-3 gap-10">
        {listaAtendiendo.map((items) => (
          <ItemListaAtendiendo key={items.id} {...items} />
        ))}
      </ul>
    </nav>
  );
};
