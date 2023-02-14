import React,{Fragment} from 'react';
import Planet from './planet';

class Planets extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            planets: [
                {
                    name:"Mercúrio",
                    description:"Mercúrio, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol.",
                    img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg ",
                    link:"https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
                },
                {
                    name:"Plutão",
                    description:"Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol.",
                    img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg ",
                    link:"https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
                }
                    ]
                  
                }
            }

            removeLast = () => {
                let new_planets = [...this.state.planets]
                new_planets.pop()
                this.setState(state => ({
                    planets: new_planets
                })) 
            }

            duplicateLastPlanet = () => {
                let last_planet = this.state.planets[this.state.planets.length - 1]
                this.setState(state => ({
                    planets: [...this.state.planets, last_planet ]

                }))
            }
    render(){
        return (
            <Fragment>
                 <h3>Planet List</h3>
                 <button onClick={this.removeLast}>Remove Last</button>
                 <button onClick={this.duplicateLastPlanet}>Duplicate Last</button>
                 <hr />
                 {this.state.planets.map((planet) => 
                 <Planet 
                 name={planet.name}
                 description={planet.description}
                 img_url={planet.img_url}
                 link={planet.link}
                 />
                )}
                 
              
                
             </Fragment>
         )

    }
}




export default Planets;