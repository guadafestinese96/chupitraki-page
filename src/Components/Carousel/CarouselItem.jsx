export default function CarouselItem({ item }) {
    return (
        <div className="h-full w-[250px] m-2 flex-shrink-0 cursor-pointer">
            <div className=" flex items-center flex-col rounded-3xl justify-center overflow-hidden m-4  h-[220px]">
                <img src={item.img} alt={item.modelo} className='h-[150px] m-2 hover:h-[160px]' />
                <span className='font-bold top-3 left-4 border border-black-200 text-xs rounded-xl px-2 py-2 capitalize'>{item.marca} {item.modelo}</span>
            </div>
        </div>
    )
}