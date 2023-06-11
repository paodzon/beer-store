"use client";

import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store from "../store/store";

export default function ReduxProvider(props: PropsWithChildren) {
  return <Provider store={store}>{props.children}</Provider>;
}