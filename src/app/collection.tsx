// import React from "react";

import { Box } from "@material-ui/core";
import Item from "@/component/subpages/item";
import Subjoin from "@/component/subpages/subjoin";
import Subfooter from "@/component/subpages/subfooter";
import CollectionCard from "@/component/subpages/collection";

export const Collection = () => {
  return (
    <>
      {/* page 2 */}

      <CollectionCard />
      <Item />
      <Box>
        <Subjoin />
        <Subfooter />
      </Box>
    </>
  );
};
