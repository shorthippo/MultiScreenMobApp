import { ScrollView } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import PhotoGrid from "../../../components/PhotoGrid";
import ProfileBio from "../../../components/ProfileBio";
import ProfileButtons from "../../../components/ProfileButtons";
import ProfileHeader from "../../../components/ProfileHeader";
import ProfileStats from "../../../components/ProfileStats";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <ProfileHeader />
          <ProfileStats />
          <ProfileBio />
          <ProfileButtons />
          <PhotoGrid />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
