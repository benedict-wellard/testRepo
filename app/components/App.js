var React = require('react');
var ReactDOM = require('react-dom');
class Main extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleGoalChange = this.handleGoalChange.bind(this);
        this.state = {goal : "", name : ""}
    }

    handleClick(event) {
        event.preventDefault();
        fetch('https://0dujdu9uu6.execute-api.eu-west-1.amazonaws.com/Stage/testLambda')
        .then(function (response) {
            return response.json();
        })
    }

    handleChange(event) {
        this.setState({name : event.target.value});
    }

    handleGoalChange(event) {
        this.setState({goal : event.target.value});
    }

    componentDidMount() {
        window.fbAsyncInit = function() {
            window.FB.init({
                appId            : '1566927830018015',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v2.9'
                });
            window.FB.AppEvents.logPageView();
        };


        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.9&appId=1566927830018015";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        
        window.FB.getLoginStatus(function(response) {
            alert("test");
            if (response.status === 'connected') {
                console.log('Logged in.');
            } else {
                window.FB.login();
            }
        });
    }

    render() {
        return <div>
                <h1>Basic App</h1>
                <div>
                    Enter Name:
                    <input id="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                </div>
                <div>
                    Enter Goal:
                    <input id="goal" type="text" value={this.state.goal} onChange={this.handleGoalChange}/>
                </div>
                <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true"></div>
                <input type="submit" value="Submit Preferences1" onClick={this.handleClick}/>
            </div>
    }
}

module.exports = Main;