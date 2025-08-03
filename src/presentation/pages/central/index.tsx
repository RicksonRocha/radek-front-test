"use client";

import { useCentralHook } from "./central.control";
import { CentralsPageView } from "./central.view";

export const CentralsPage = () => {
  const methods = useCentralHook();

  return <CentralsPageView {...methods} />;
};
