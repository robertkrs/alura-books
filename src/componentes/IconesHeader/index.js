import iconeSacola from '../../imagens/sacola.svg';
import iconePerfil from '../../imagens/perfil.svg';
import styled from 'styled-components';

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`
const Icones = styled.ul`
  display: flex;
  align-items: center;
`

const icones = [iconeSacola, iconePerfil];

function IconesHeader(){
    return (
        <Icones>
          {icones.map((icone) => (
            <Icone><img src={icone} alt='img'></img></Icone>
          ))}
        </Icones>
    );
}

export default IconesHeader;