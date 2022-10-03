import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ChildrenAsObjectExample from "./src/ChildrenAsObjectExample";
import CustomNodeExample from "./src/CustomNodeExample";
import DynamicContentExample from "./src/DynamicContentExample";
import ErrorMessageExample from "./src/ErrorMessageExample";
import ExtraDataExample from "./src/ExtraDataExample";
import NestedRowExample from "./src/NestedRowExample";
import PerformanceExample from "./src/PerformanceExample";
import ReduxExample from "./src/ReduxExample";
import StateChangeNodeExample from "./src/StateChangeNodeExample";
import store from "./src/store";
import { Provider } from "react-redux";

const mapScreenComp: any = {
  CustomNodeExample: () => <CustomNodeExample />,
  StateChangeNodeExample: () => <StateChangeNodeExample />,
  ErrorMessageExample: () => <ErrorMessageExample />,
  NestedRowExample: () => <NestedRowExample />,
  ExtraDataExample: () => <ExtraDataExample />,
  DynamicContentExample: () => <DynamicContentExample />,
  ChildrenAsObjectExample: () => <ChildrenAsObjectExample />,
  PerformanceExample: () => <PerformanceExample />,
  ReduxExample: () => <ReduxExample />,
};

export default function App() {
  const [selectedScreen, setSelectedScreen] = useState<string>("");

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        {selectedScreen ? (
          <Button
            onPress={() => {
              setSelectedScreen("");
            }}
            title={"Back to Home"}
          />
        ) : null}
        {selectedScreen ? (
          <View style={{ flex: 1 }}>{mapScreenComp[selectedScreen]()}</View>
        ) : (
          <>
            {Object.keys(mapScreenComp).map((key, index) => {
              return (
                <Button
                  key={index}
                  onPress={() => {
                    setSelectedScreen(key);
                  }}
                  title={key}
                />
              );
            })}
          </>
        )}
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
