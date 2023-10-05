import React, { ReactNode } from 'react';
import { createSignalRContext } from "react-signalr/signalr";

type Props = {
    tokenAccess: string;
    children: ReactNode;
}

const SignalRCtx = createSignalRContext();

export const SignalRContext = ({ tokenAccess, children }: Props) => {

    return (
        <SignalRCtx.Provider
            connectEnabled={!!tokenAccess}
            accessTokenFactory={() => tokenAccess}
            dependencies={[tokenAccess]} //remove previous connection and create a new connection if changed
            url={"https://localhost:44373/api/Todo"}
        >
            {children}
        </SignalRCtx.Provider>
    );
};

