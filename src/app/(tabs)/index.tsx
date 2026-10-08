import { ScrollView } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import HomeHeader from "../../../components/HomeHeader";

import HomeHorizontalScroll from "../../../components/HomeHorizontalScroll";

import HomeVerticalScroll from "../../../components/HomeVerticalScroll";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <HomeHeader />
          <HomeHorizontalScroll />
          <HomeVerticalScroll />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
