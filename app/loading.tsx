"use client";

import { MoonLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <MoonLoader color="#fff" size={40} />
    </Box>
  );
};

export default Loading;
