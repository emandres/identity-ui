import * as React from 'react'
import * as css from './app.module.css'
import styleable, {StyleableProps} from 'react-styleable'
import SignIn from './components/sign-in'

export default styleable(css)((props: StyleableProps) => (
    <div className={props.css.app}>
        <div className={props.css.bodyContent}>
            <SignIn />
        </div>
    </div>
))