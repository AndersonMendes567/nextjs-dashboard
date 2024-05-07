import DashboardSkeleton from "../../ui/skeletons";

/* 
  Este componente não precisa mais ser utilizado pois 
  a busca de dados está sendo realizada nos componentes que precisam dos dados
*/

export default function loading() {
  return <DashboardSkeleton />
}