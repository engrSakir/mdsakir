import React, {Component} from 'react';
import Breadcrumb from "../components/Breadcrumb";

class Error extends Component {
    render() {
        return (
            <div>
                <Breadcrumb title={'Error'}/>
            </div>
        );
    }
}

export default Error;