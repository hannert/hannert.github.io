import React, { PropsWithChildren } from 'react'

interface TProps{
    title: string,
    body: string
}

export default class Bp extends React.Component<TProps, any> {

    render(): React.ReactNode {
        return(
            <div> 
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
            </div>
        )
    }
}
