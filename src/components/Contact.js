import React, {Component} from 'react'
import './Contact.css'
import PropTypes from 'prop-types'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            online: props.online
                }
    }
    render() {
        return (
            <div className="Contact">    
                <img className="avatar" src={this.props.avatar} alt="avatar"></img>
            
                <div>
    
                    <div className="name">{this.props.name}</div>
                    

                    <div className="status" onClick={e=> {this.state.online === false ? this.setState({online: true}) : this.setState({online: false})}}>
                        <div className={this.state.online === false ? "status-online" : "status-offline"}></div>   
                        <div className="status-text">{this.state.online ? "I'am online" : "I'am offline"}</div>
                    </div>   
                             
                </div>

            </div>

        )
    }
}

Contact.propTypes = {
    name : PropTypes.string.isRequired,
    avatar : PropTypes.string.isRequired,
    online : PropTypes.bool.isRequired,
}

export default Contact