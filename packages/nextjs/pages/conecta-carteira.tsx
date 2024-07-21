import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const ConectaCarteira: React.FC = () => {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push({
        pathname: "/formulario-de-doacao",
      });
    } else {
    }
  }, [isConnected]);

  return <ConnectButton />;
};

export default ConectaCarteira;
