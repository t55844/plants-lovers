
interface PropsButtonGener{
  setAction():void,
  title:string,
  color?:string,
  type:"button" | "submit" | "reset" | undefined,
  width?:string,
}

export default function ButtonGener(props:PropsButtonGener){
    const {setAction,title,color,type,width} = props
    return(
        <button
          type={type}
          className={`mr-2 p-2 rounded-lg ${width} ${color ||'bg-teal-500'} text-white`}
          onClick={() => setAction()}
        >
          {title}
        </button>
    )
}