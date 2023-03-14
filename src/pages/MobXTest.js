import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import DataList from "./DataList";
import rootStore from "../stores/rootStore";

const PrintMobX = (mobxStore) => {
  const [data, setData] = useState("test");

  useEffect(() => {
    setData(mobxStore.projectStore.projects);
  }, [mobxStore]);

  while (mobxStore.projectStore.isLoading) {
    return;
  }
  return (
    <div>
      {console.log(data)}
      <DataList data={data} />
    </div>
  );
};

function MobXTest() {
  const data = PrintMobX(rootStore);

  return <div>{data}</div>;
}

export default observer(MobXTest);
