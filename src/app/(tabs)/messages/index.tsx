import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MessageList from "../../../../components/MessageList";
import MessageSearch from "../../../../components/MessageSearch";
import MessagesHeader from "../../../../components/MessagesHeader";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <MessagesHeader />
          <MessageSearch />
          <MessageList />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
