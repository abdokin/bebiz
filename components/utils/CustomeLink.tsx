import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { NavType } from "../../types/NavType";
const CustomeLink = ({ path, label }: NavType) => {
  return (
    <Link
      href={path}
      color="darkbg.100"
      _hover={{
        color: "primary.100",
        textDecoration:'underline'
      }}
    >
      {label}
    </Link>
  );
};

export default CustomeLink;
