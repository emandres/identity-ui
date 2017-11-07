import * as React from 'react'
import * as css from './index.module.css'
import styleable, { StyleableProps } from 'react-styleable'
import Button from '@pluralsight/ps-design-system-button/react'
import Link from '@pluralsight/ps-design-system-link/react'

interface SignInState {
    username: string
    password: string
}

class SignIn extends React.Component<StyleableProps, SignInState> {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    private handleUsernameChange(event: any) {
        this.setState({
            ...this.state,
            username: event.target.value
        })
    }

    render() {
        return (
            <div id={this.props.css.signIn}>
                <img src="/content/img/ps-logo-outline.png" className={this.props.css.logo} />

                <form>
                    <label htmlFor="username">Email or Username</label>
                    <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />

                    <div className={this.props.css.submitLine}>
                        <Link><a href="/foo">Forgot your password?</a></Link>
                        <Button type="submit">Sign in</Button>
                    </div>
                </form>

                <div className={this.props.css.links}>
                    <Link appearance="default"><a href="/pricing">Create account</a></Link>
                    <Link appearance="default"><a href="/signin/sso">Sign in with company or school</a></Link>
                </div>
            </div>
        )
    }
}

export default styleable(css)(SignIn)