import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import DataList from "./DataList";
import rootStore from "../stores/rootStore";

const PrintMobX = (mobxStore) => {
  console.log(mobxStore.projectStore.isLoading);
  const [data, setData] = useState(mobxStore.getData());

  useEffect(() => {
    const disposer = mobxStore.subscribe(() => {
      setData(mobxStore.getData());
    });
    return () => disposer();
  }, [mobxStore]);

  return (
    <div>
      <DataList data={data} />
    </div>
  );
};

function MobXTest() {
  while (rootStore.projectStore.isLoading) {
    return;
  }
  const data = PrintMobX(rootStore);

  return <div>{data}</div>;
}

export default observer(MobXTest);
