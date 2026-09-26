# react-native-nested-listview examples (Expo)

Runnable examples for
[react-native-nested-listview](https://github.com/fjmorant/react-native-nested-listview).

```
npm install
npm start
```

Then press `i`, `a` or `w` for iOS, Android or web. The app opens on a list of
examples; pick one and use **Back to Home** to return.

| | |
| --- | --- |
| **Library** | 1.0.0 |
| **Expo SDK** | 57 |
| **React Native** | 0.86.3 |
| **React** | 19.2.3 |

Expo SDK 57 runs the New Architecture only, so these examples are also the
proof that the library works under Fabric.

## The examples

| Example | What it shows |
| --- | --- |
| **CustomNodeExample** | rendering your own node, and colouring it by `level` |
| **StateChangeNodeExample** | reacting to `opened` as a node expands and collapses |
| **ErrorMessageExample** | what the component renders when a required prop is missing |
| **NestedRowExample** | `NestedRow`, `paddingLeftIncrement`, and a per-node `getChildrenName` |
| **ExtraDataExample** | `extraData` as the marker that rebuilds the rows |
| **DynamicContentExample** | adding to and removing from `data` while it is on screen |
| **ChildrenAsObjectExample** | children given as an object keyed by name rather than an array |
| **PerformanceExample** | a deep, wide tree — the case the 1.0.0 flattening rewrite was for |
| **ListPropsExample** | `listProps`, reaching the underlying list |
| **ReduxExample** | `data` coming from a Redux store, with a typed `RootState` |

## Types

`INode` describes a node as you write it in `data`; `IRenderedNode` describes
what `renderNode` and `onNodePressed` receive, where `_internalId` is a `string`
and `opened` a `boolean`. `IListProps` types the `listProps` bag, and `IRow` a
row of the flattened list.

```tsx
const renderNode = (node: IRenderedNode, level: number) => (
  <NestedRow level={level}>
    <Text>{node.opened ? '▾' : '▸'} {node.name}</Text>
  </NestedRow>
);
```

`getChildrenName` and `keyExtractor` are handed an `INode`, because they are
called while the tree is being walked, before the list has assigned anything.
