import { Text, View } from "react-native";
import { verifyInstallation } from 'nativewind';

export default function Index() {
  verifyInstallation();
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl text-dark-200 font-bold">Hi mom, I love you!</Text>
    </View>
  );
}