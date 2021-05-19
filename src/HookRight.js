import React from "react";
import { useLocation } from "react-router-dom";

export const HookRight = () => {
  const location = useLocation();
  return <span>I am at {location.pathname}</span>;
};
