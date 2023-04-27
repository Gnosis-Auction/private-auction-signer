import { useMemo } from "react";
import { ApolloProvider } from "@apollo/client";
import { useNetwork } from "wagmi";

import Main from "./pages/main";
import client from "./clients/apolloClient";

function App() {
    const { chain } = useNetwork();

    const currentClient = useMemo(() => {
        if (!chain) {
            return client[1];
        }
        return client[chain.id];
    }, [chain?.id])

    return (
        <ApolloProvider client={currentClient}>
            <div>
                <Main />
            </div>
        </ApolloProvider>
    );
}

export default App;
