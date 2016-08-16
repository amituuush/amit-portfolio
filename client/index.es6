import sass from './styles.scss'
import React from 'react'
import ReactDOM from 'react-dom'

var App = React.createClass({
    render: function() {
        return (
            <div>Hey there</div>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('root'));
