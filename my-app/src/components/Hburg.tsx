import React from 'react';
import {BackDrop} from './MySVG'

type MyState = {
    active: boolean;
};

export default class Hburg extends React.Component<any, any> {

    state: MyState = {
        active: true,
    }

    private handleClick() {
        console.log("You clicked something")
        this.setState((prevState: any) => ({
            active: !prevState.active
        }))
    }

    private message() {
        if(this.state.active) console.log("State is active")
        else console.log("State is not active")
    }

    render(): React.ReactNode {
        let navIcon = 'nav-icon'
        let navBackdrop = 'animatedBox'
        let testSvg = <svg xmlns='https://s.cdpn.io/3/kiwi.svg' width='100px' height='100px' stroke='black' fill='black' ></svg>;
        if(this.state.active){
            navIcon += ' active';
            navBackdrop += ' active'
        }   
        let tester = BackDrop
        return(
            <div className='navBar' style={{position:'fixed', top:'3vmin',right:'1rem'}}> 
                
                <ul className={navBackdrop}>

                </ul>
                <nav>
                    <button onClick={() => {
                        this.handleClick();
                        this.message();
                    }}
                        
                        className={navIcon}>
                        <span className="one"></span>
                        <span className="two"></span>
                        <span className="three"></span>
                    </button>
                    {testSvg}
                </nav>
            </div>
        )
    }
}
