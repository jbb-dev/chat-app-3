import React, {Component} from 'react'
import './Contact.css'
import PropTypes from 'prop-types'

class Contact extends Component {
    render() {
        const {name, avatar, online} = this.props
        return (
            <div className="Contact">    
                <img className="avatar" src={avatar} alt="avatar"></img>
            
                <div>
    
                    <div className="name">{name}</div>
                    

                    <div className="status">
                        <div className={online ? "status-online" : "status-offline"}></div>   
                        <div className="status-text">{online ? "I'am online" : "I'am offline"}</div>
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
    text : PropTypes.object.isRequired
}

export default Contact