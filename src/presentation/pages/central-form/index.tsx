"use client";

import { useCentralFormHook } from "./central-form.control";
import { CentralFormViewPage } from "./central-form.view";

export const CentralFormPage = () => {
  const methods = useCentralFormHook();

  return <CentralFormViewPage {...methods} />;
};
