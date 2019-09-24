import * as React from "react";

class Component<P = any, S = any> extends React.Component<P, S>
{

    public constructor(props: P)
    {
        super(props);
    }

    public setStateAsync<K extends keyof S>(s: ((prevState: Readonly<S>, props: Readonly<P>) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null))
    {
        return new Promise<void>(res => {
            this.setState(s, res);
        });
    }

}

export default Component;