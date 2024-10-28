import { ItemListaAtendiendo } from "./ItemListaAtendiendo";

export const ListaAtendiendo = () => {
  const listaAtendiendo = [
    {
      id: 5,
      barber: "Danilo",
      pacients: [
        {
          id: 1,
          name: "Fernando",
          status: "atendiendo",
        },
        {
          id: 2,
          name: "Fernando",
          status: "espera",
        },
        {
          id: 3,
          name: "Fernando",
          status: "espera",
        },
      ],
    },
    {
      id: 4,
      barber: "Danilo",
      perfil: "/img/barberos/barbero.png",
      pacients: [],
    },
    {
      id: 1,
      barber: "Marlon",
      perfil: "/img/barberos/barbero.png",
      pacients: [
        {
          id: 1,
          name: "Fernando",
          status: "atendiendo",
        },
        {
          id: 2,
          name: "Fernando",
          status: "espera",
        },
        {
          id: 3,
          name: "Fernando",
          status: "espera",
        },
      ],
    },
    {
      id: 2,
      barber: "Marlon",
      perfil: "/img/barberos/barbero.png",

      pacients: [
        {
          id: 1,
          name: "Fernando",
          status: "atendiendo",
        },
        {
          id: 2,
          name: "Fernando",
          status: "espera",
        },
        {
          id: 3,
          name: "Fernando",
          status: "espera",
        },
      ],
    },
    {
      id: 3,
      barber: "Marlon",
      perfil: "/img/barberos/barbero.png",
      pacients: [
        {
          id: 1,
          name: "Fernando",
          status: "atendiendo",
        },
        {
          id: 2,
          name: "Fernando",
          status: "espera",
        },
        {
          id: 3,
          name: "Fernando",
          status: "espera",
        },
      ],
    },
  ];
  return (
    <nav className="flex flex-1 flex-col gap-14">
      <h2 className="text-3xl font-semibold">Atendiendo:</h2>
      <ul className="grid flex-1 grid-cols-3 gap-x-16 gap-y-24 px-20">
        {listaAtendiendo.slice(0, 3).map((items) => (
          <ItemListaAtendiendo
            key={items.id}
            barber={items.barber}
            pacients={items.pacients}
            perfil={items.perfil}
          />
        ))}
      </ul>
    </nav>
  );
};
