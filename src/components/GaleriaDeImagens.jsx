import React, { useState } from 'react';


function GaleriaDeImgens(){
    const[imagens, setImagens] = useState (['https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2024/08/22/1153075461-billie-eilish-e-dona-da-cancao-de-amor-mais-ouvida-do-mundo.jpg', 'https://uploads.metroimg.com/wp-content/uploads/2024/02/10121216/Michael-Jackson-3.jpg', 'https://i.pinimg.com/236x/56/3e/61/563e61558835a0052c10386b5c45d593.jpg']);

    const adicionarImagem = () => {
        setImagens([...imagens, 'https://via.placeholder.com/150']);
    };

    return (
        <div>
            <h2>Galeria de Imagens</h2>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {imagens.map((imagem, index) => (
                    <img key={index} src={imagem} alt = {`Imagem ${index + 1}`} style={{ margin:'5px'}}/>
                ))}
            </div>
            <button onClick={adicionarImagem} style={{ marginTop: '10px'}}>Adicionar Imagem</button>
        </div>
    );
}

export default GaleriaDeImgens;