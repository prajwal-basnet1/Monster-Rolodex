import {React} from 'react';
import {Card} from '../Card/card.componenet'
import '../card-list/card-list.styles.css'

 export const CardList=(props)=>{

    return(
        <div className='card-list'>
        {props.monster.map(monster=>(
            <Card key={monster.id} monster={monster}></Card>
  //          <h1 key={monster.id}>{monster.name}</h1>

        ))}
        
        </div>



    )




 }






