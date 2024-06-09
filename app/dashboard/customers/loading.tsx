import Image from "next/image";

export default function loading() {
  return (
    <div>
      <Image 
        src="/loading.svg" 
        width={32}
        height={32}
        alt="Ícone de carregamento" 
        className="animate-spin" 
      />
    </div>
  )
}
