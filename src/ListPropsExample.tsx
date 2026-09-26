import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import NestedListView, {
  IListProps,
  INode,
  IRenderedNode,
  NestedRow,
} from 'react-native-nested-listview';

const generateXNumItems = (numItems: number, prefix: string) => {
  const items = [];

  let i;

  for (i = 0; i < numItems; i++) {
    items.push({
      name: `${prefix}.${i}`,
    });
  }

  return items;
};

const data: INode[] = [
  {
    name: 'Item level 1.1',
    opened: true,
    descendants: generateXNumItems(20, 'Item level 1.1'),
  },
  {
    name: 'Item level 1.2',
    descendants: generateXNumItems(20, 'Item level 1.2'),
  },
  {
    name: 'Item level 1.3',
    descendants: generateXNumItems(20, 'Item level 1.3'),
  },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'rgb(255, 255, 255)', padding: 15 },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  toolbarLabel: { fontSize: 13 },
  separator: { height: 1, backgroundColor: 'rgb(220, 220, 220)' },
  row: { paddingVertical: 10 },
});

const ListPropsExample = () => {
  const [showIndicator, setShowIndicator] = useState<boolean>(false);

  // Anything on the underlying list's surface is reachable through listProps.
  // Before 1.0.0 the list was created internally and took a fixed set of props,
  // so none of this could be set at all.
  const listProps: IListProps = {
    showsVerticalScrollIndicator: showIndicator,
    ItemSeparatorComponent: () => <View style={styles.separator} />,
  };

  const getChildrenName = (_: INode) => 'descendants';

  // `opened` is a plain boolean on a rendered node, so the chevron needs no
  // guard — that is the difference between INode and IRenderedNode.
  const renderNode = (node: IRenderedNode, level: number) => (
    <NestedRow level={level} style={styles.row}>
      <Text>
        {node.opened ? '▾' : '▸'} {node.name}
      </Text>
    </NestedRow>
  );

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Text style={styles.toolbarLabel}>showsVerticalScrollIndicator</Text>
        <Switch value={showIndicator} onValueChange={setShowIndicator} />
      </View>
      <NestedListView
        data={data}
        getChildrenName={getChildrenName}
        listProps={listProps}
        renderNode={renderNode}
      />
    </View>
  );
};

export default ListPropsExample;
