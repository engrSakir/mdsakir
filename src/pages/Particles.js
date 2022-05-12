import React, {Component} from 'react';
import Particle1 from "../components/particles/Particle1";
import Breadcrumb from "../components/Breadcrumb";

class Particles extends Component {
    render() {
        return (
            <div>
                <Breadcrumb title={'Particles'}/>
                <Particle1/>
            </div>
        );
    }
}

export default Particles;