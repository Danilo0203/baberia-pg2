import { ItemLista } from "../item-lista/ItemLista";

interface ItemListaPacienteProps {
  name: string;
}
export const ItemListaPaciente = ({ name }: ItemListaPacienteProps) => {
  return (
    <div>
      <ItemLista mode="atendiendo" name={name} status="atendiendo" />
    </div>
  );
};
