import { colors } from "@/styles/colors";
import { ActivityIndicator, View } from "react-native";

export function Loading() {
    return (
        <View className="flex-1 items-center justify-center">
            <ActivityIndicator color={colors.brand.blue} size="large" />
        </View>
    );
}