import { ScrollView } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import HomeHeader from "../../../components/HomeHeader";

import PhotoGrid from "../../../components/PhotoGrid";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <HomeHeader />
          <PhotoGrid />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
