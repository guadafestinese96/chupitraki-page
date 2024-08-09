import './Inicio.css'
import bebidasImportadas from '../../assets/coctail.png'



export default function Inicio() {
    
    return (
        <div className="inicio">
            <h1 className="titleIndex">DISTRIBUIDORA CHUPITRAKI</h1>
            <h2 className="titleIndex2">Encuentra las mejores bebidas nacionales e importadas en nuestra página</h2>
            <img src={bebidasImportadas} alt="bebidasInicio" className='bebidasInicio' />

        </div>
    )
}