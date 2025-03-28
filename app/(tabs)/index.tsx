import { images } from "@/constants";
import { Text, View, Image, ScrollView } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.background} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image
          source={images.logo}
          style={{ width: 80, height: 80 }}
          className="mt-10 mx-auto"
        />
      </ScrollView>
    </View>
  );
}
